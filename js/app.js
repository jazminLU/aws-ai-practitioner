/* ─── Progress (localStorage) ──────────────────────────────────────────── */
const STORAGE_KEY = 'aip-aif-c01';

const Progress = {
  data: {},

  load() {
    try { this.data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { this.data = {}; }
  },

  save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data)); }
    catch {}
  },

  record(name, correct) {
    if (!this.data[name]) this.data[name] = { ok: 0, fail: 0 };
    correct ? this.data[name].ok++ : this.data[name].fail++;
    this.save();
  },

  get(name) {
    return this.data[name] || { ok: 0, fail: 0 };
  },

  masteredCount() {
    return Object.values(this.data).filter(d => d.ok >= 2 && d.fail === 0).length;
  },

  weakServices(minAttempts = 1) {
    return SERVICES.filter(s => {
      const d = this.data[s.name];
      return d && (d.ok + d.fail) >= minAttempts && d.fail > 0;
    }).sort((a, b) => {
      const da = this.data[a.name], db = this.data[b.name];
      const ra = da.fail / (da.ok + da.fail), rb = db.fail / (db.ok + db.fail);
      return rb - ra;
    });
  },

  reset() {
    this.data = {};
    this.save();
  },
};

/* ─── State ────────────────────────────────────────────────────────────── */
const State = {
  view: 'home',          // home | flashcards | quiz | results
  filter: 'all',         // 'all' or category key
  quizType: 'mixed',     // name2desc | desc2name | mixed
  weakOnly: false,

  fc: {
    list: [],
    index: 0,
    flipped: false,
  },

  quiz: {
    queue: [],
    current: null,
    correctIdx: -1,
    answered: false,
    ok: 0,
    fail: 0,
    catStats: {},        // { cat: { ok, total } }
  },
};

/* ─── Utilities ────────────────────────────────────────────────────────── */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getFiltered() {
  if (State.filter === 'all') return SERVICES;
  return SERVICES.filter(s => s.cat === State.filter);
}

function catColor(cat) {
  return (CATEGORIES[cat] || {}).color || '#8b949e';
}

function catLabel(cat) {
  return (CATEGORIES[cat] || {}).label || cat;
}

function pctClass(pct) {
  if (pct >= 80) return 'great';
  if (pct >= 60) return 'ok';
  return 'needs';
}

function pctBarColor(pct) {
  if (pct >= 80) return 'var(--green)';
  if (pct >= 60) return 'var(--yellow)';
  return 'var(--red)';
}

/* ─── Router ───────────────────────────────────────────────────────────── */
function navigate(view, opts = {}) {
  State.view = view;
  Object.assign(State, opts);

  // Update nav active state
  document.querySelectorAll('.nav-btn[data-view]').forEach(b => {
    b.classList.toggle('active', b.dataset.view === view);
  });

  const app = document.getElementById('app');
  app.innerHTML = '';

  const div = document.createElement('div');
  div.className = 'view';

  switch (view) {
    case 'home':       div.innerHTML = renderHome();          break;
    case 'flashcards': div.innerHTML = renderFlashcards();    break;
    case 'quiz':       div.innerHTML = renderQuizShell();     break;
    case 'results':    div.innerHTML = renderResults();       break;
    case 'simulacro':  div.innerHTML = renderSimulacro();     break;
    case 'sim-results':div.innerHTML = renderSimResults();    break;
  }

  app.appendChild(div);

  if (view === 'quiz') {
    initQuiz();
    setTimeout(() => showQuestion(), 0);
  }
  // simulacro landing needs no init — user picks an exam card
}


/* ─── HOME ──────────────────────────────────────────────────────────────── */
function renderHome() {
  const total = SERVICES.length;
  const mastered = Progress.masteredCount();
  const attempted = Object.keys(Progress.data).length;
  const weak = Progress.weakServices();
  const pct = attempted > 0 ? Math.round((mastered / total) * 100) : 0;

  const weakBanner = weak.length > 0 ? `
    <div class="weak-banner">
      <div class="weak-banner-icon">⚠️</div>
      <div class="weak-banner-text">
        Tenés <strong>${weak.length} servicio${weak.length > 1 ? 's' : ''} débil${weak.length > 1 ? 'es' : ''}</strong>
        que seguís errando. Te recomendamos repasar: ${weak.slice(0, 3).map(s => `<strong>${s.name}</strong>`).join(', ')}${weak.length > 3 ? '…' : ''}.
      </div>
      <button class="weak-study-btn" onclick="startWeakQuiz()">Practicar débiles</button>
    </div>
  ` : '';

  const catRows = Object.entries(CATEGORIES).map(([key, cat]) => {
    const count = SERVICES.filter(s => s.cat === key).length;
    return `
      <div class="cat-chip" onclick="navigateToCat('${key}')">
        <div class="cat-chip-left">
          <div class="cat-dot" style="background:${cat.color}"></div>
          <span class="cat-chip-label">${cat.label}</span>
        </div>
        <span class="cat-chip-count">${count}</span>
      </div>`;
  }).join('');

  return `
    <div class="home-hero">
      <h1>AWS AI Practitioner</h1>
      <p>Practica los ${total} conceptos y servicios del examen AIF-C01 con flashcards y quiz de opción múltiple.</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value">${total}</div>
        <div class="stat-label">Servicios totales</div>
      </div>
      <div class="stat-card">
        <div class="stat-value green">${mastered}</div>
        <div class="stat-label">Dominados ✓</div>
      </div>
      <div class="stat-card">
        <div class="stat-value orange">${attempted}</div>
        <div class="stat-label">Estudiados</div>
      </div>
      <div class="stat-card">
        <div class="stat-value ${pct >= 70 ? 'green' : pct >= 40 ? 'orange' : 'red'}">${pct}%</div>
        <div class="stat-label">Progreso</div>
      </div>
    </div>

    ${weakBanner}

    <div class="home-modes" style="grid-template-columns:repeat(3,1fr)">
      <button class="mode-card" onclick="navigate('flashcards')">
        <div class="mode-card-icon">🃏</div>
        <div class="mode-card-title">Flashcards</div>
        <div class="mode-card-desc">Repasá cada servicio a tu ritmo. Calificá si lo sabías para trackear tu progreso.</div>
        <span class="mode-card-tag">Estudio libre</span>
      </button>
      <button class="mode-card" onclick="navigate('quiz')">
        <div class="mode-card-icon">🎯</div>
        <div class="mode-card-title">Quiz</div>
        <div class="mode-card-desc">Opción múltiple. Elegí si querés identificar nombres, descripciones o modo mixto.</div>
        <span class="mode-card-tag">4 opciones</span>
      </button>
      <button class="mode-card" onclick="navigate('simulacro')">
        <div class="mode-card-icon">📝</div>
        <div class="mode-card-title">Simulacro</div>
        <div class="mode-card-desc">65 preguntas reales del examen AIF-C01 con explicaciones detalladas por opción.</div>
        <span class="mode-card-tag" style="background:#2d1b69;color:#a78bfa;border-color:#7c3aed">${EXAMS.reduce((s,e)=>s+e.questions.length,0)} preguntas</span>
      </button>
    </div>

    <div class="home-cats-title">Por categoría</div>
    <div class="cat-grid">${catRows}</div>

    ${attempted > 0 ? `
      <hr class="divider">
      <div style="text-align:center">
        <button class="btn-secondary" onclick="confirmReset()" style="font-size:12px;padding:7px 14px">
          Reiniciar progreso
        </button>
      </div>
    ` : ''}
  `;
}

function navigateToCat(cat) {
  State.filter = cat;
  navigate('flashcards');
}

function startWeakQuiz() {
  State.weakOnly = true;
  State.filter = 'all';
  navigate('quiz');
}

function confirmReset() {
  if (confirm('¿Reiniciar todo el progreso guardado?')) {
    Progress.reset();
    navigate('home');
  }
}

/* ─── FLASHCARDS ────────────────────────────────────────────────────────── */
function renderFlashcards() {
  initFC();

  const pills = buildPills();
  const rated = State.fc.list.filter(s => Progress.data[s.name]).length;

  return `
    <div class="page-title">Flashcards</div>
    <div class="page-subtitle" id="fc-subtitle">${State.fc.list.length} servicios</div>

    <div class="pill-bar" id="pill-bar">${pills}</div>

    <div class="progress-row">
      <div class="progress-track">
        <div class="progress-fill" id="fc-prog" style="width:${fcProgress()}%"></div>
      </div>
      <div class="progress-label" id="fc-prog-label">${rated} / ${State.fc.list.length} calificadas</div>
    </div>

    <div style="display:flex;justify-content:flex-end;gap:8px;margin-bottom:16px">
      <button class="fc-shuffle-btn" onclick="shuffleFC()">⟳ Barajar</button>
      <button class="fc-shuffle-btn" onclick="sortFC()">A–Z Ordenar</button>
    </div>

    <div class="fc-grid" id="fc-grid">
      ${State.fc.list.map((s, idx) => buildGridCard(s, idx)).join('')}
    </div>
  `;
}

function buildGridCard(s, idx) {
  const tips = s.tips && s.tips.length
    ? `<div class="fc-tips">${s.tips.map(t => `<div class="fc-tip">💡 ${t}</div>`).join('')}</div>`
    : '';

  const prog = Progress.get(s.name);
  const total = prog.ok + prog.fail;
  let stateClass = '';
  if (total > 0) {
    if (prog.ok > 0 && prog.fail === 0) stateClass = 'card-knew';
    else if (prog.fail > 0 && prog.ok === 0) stateClass = 'card-didnt';
    else stateClass = 'card-unsure';
  }

  return `
    <div class="fc-grid-card ${stateClass}">
      <span class="fc-cat-badge">${catLabel(s.cat)}</span>
      <div class="fc-service-name">${s.name}</div>
      <div class="fc-service-short">${s.short}</div>
      <hr class="divider" style="margin:8px 0">
      <div class="fc-desc">${s.desc}</div>
      ${tips}
      <div class="fc-card-rating">
        <button class="rating-btn knew"   onclick="rateGridCard(${idx}, true,  true)">✓ Sabía</button>
        <button class="rating-btn unsure" onclick="rateGridCard(${idx}, false, false)">~ Regular</button>
        <button class="rating-btn didnt"  onclick="rateGridCard(${idx}, false, true)">✗ No sabía</button>
      </div>
    </div>
  `;
}

function rateGridCard(idx, known, recordIt) {
  const s = State.fc.list[idx];
  if (recordIt) Progress.record(s.name, known);

  const cards = document.querySelectorAll('.fc-grid-card');
  const card = cards[idx];
  if (card) {
    card.classList.remove('card-knew', 'card-unsure', 'card-didnt');
    if (known) card.classList.add('card-knew');
    else if (!recordIt) card.classList.add('card-unsure');
    else card.classList.add('card-didnt');
  }

  const rated = State.fc.list.filter(sv => Progress.data[sv.name]).length;
  const pct = State.fc.list.length > 0 ? (rated / State.fc.list.length) * 100 : 0;
  const prog = document.getElementById('fc-prog');
  const progLbl = document.getElementById('fc-prog-label');
  if (prog) prog.style.width = pct + '%';
  if (progLbl) progLbl.textContent = `${rated} / ${State.fc.list.length} calificadas`;
}

function initFC() {
  const services = State.weakOnly
    ? Progress.weakServices()
    : getFiltered();

  if (services.length === 0) {
    State.filter = 'all';
  }

  State.fc.list = shuffle(services.length ? services : getFiltered());
  State.fc.index = 0;
  State.weakOnly = false;
}

function fcProgress() {
  if (!State.fc.list.length) return 0;
  const rated = State.fc.list.filter(s => Progress.data[s.name]).length;
  return (rated / State.fc.list.length) * 100;
}

function shuffleFC() {
  State.fc.list = shuffle(State.fc.list);
  const grid = document.getElementById('fc-grid');
  if (grid) grid.innerHTML = State.fc.list.map((s, idx) => buildGridCard(s, idx)).join('');
}

function sortFC() {
  State.fc.list = [...State.fc.list].sort((a, b) => a.name.localeCompare(b.name));
  const grid = document.getElementById('fc-grid');
  if (grid) grid.innerHTML = State.fc.list.map((s, idx) => buildGridCard(s, idx)).join('');
}

/* ─── QUIZ ──────────────────────────────────────────────────────────────── */
function renderQuizShell() {
  return `
    <div class="page-title">Quiz</div>
    <div class="page-subtitle">Elegí una opción para responder. Podés usar las teclas A B C D.</div>

    <div class="pill-bar" id="pill-bar">${buildPills()}</div>

    <div class="quiz-type-row" id="qtype-row">
      ${['mixed','name2desc','desc2name'].map(t => {
        const labels = { mixed: '🔀 Mixto', name2desc: 'Nombre → Descripción', desc2name: 'Descripción → Nombre' };
        return `<button class="qtype-btn ${State.quizType === t ? 'active' : ''}"
          onclick="setQuizType('${t}', this)">${labels[t]}</button>`;
      }).join('')}
    </div>

    <div class="score-row">
      Correctas: <span class="val ok" id="sc-ok">0</span>
      &nbsp;·&nbsp;
      Incorrectas: <span class="val fail" id="sc-fail">0</span>
      &nbsp;·&nbsp;
      Restantes: <span class="val" id="sc-left">–</span>
    </div>

    <div class="progress-row">
      <div class="progress-track">
        <div class="progress-fill" id="quiz-prog" style="width:0%"></div>
      </div>
      <div class="progress-label" id="quiz-prog-label">0%</div>
    </div>

    <div id="quiz-question-wrap"></div>
  `;
}

function initQuiz() {
  const services = State.weakOnly
    ? Progress.weakServices()
    : getFiltered();

  State.quiz.queue    = shuffle(services.length > 0 ? services : SERVICES);
  State.quiz.ok       = 0;
  State.quiz.fail     = 0;
  State.quiz.catStats = {};
  State.quiz.answered = false;
  State.quiz.current  = null;
  State.weakOnly      = false;
}

function setQuizType(type, btn) {
  State.quizType = type;
  document.querySelectorAll('.qtype-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  initQuiz();
  showQuestion();
}

function buildQuestionData(svc) {
  const type = State.quizType === 'mixed'
    ? (Math.random() > 0.5 ? 'name2desc' : 'desc2name')
    : State.quizType;

  const pool   = shuffle(SERVICES.filter(s => s.name !== svc.name));
  const wrongs = pool.slice(0, 3);

  let questionHTML, options;

  if (type === 'name2desc') {
    questionHTML = `¿Cuál es la descripción de <strong>${svc.name}</strong>?`;
    options = shuffle([
      { text: svc.desc,  correct: true,  svcName: svc.name },
      ...wrongs.map(s => ({ text: s.desc,  correct: false, svcName: s.name })),
    ]);
  } else {
    questionHTML = `¿Qué servicio corresponde a esta descripción?<br><br><em>"${svc.desc}"</em>`;
    options = shuffle([
      { text: svc.name,  correct: true,  svcName: svc.name },
      ...wrongs.map(s => ({ text: s.name,  correct: false, svcName: s.name })),
    ]);
  }

  return { questionHTML, options, correctIdx: options.findIndex(o => o.correct) };
}

function showQuestion() {
  if (State.quiz.queue.length === 0) {
    navigate('results');
    return;
  }

  State.quiz.current  = State.quiz.queue.shift();
  State.quiz.answered = false;

  const svc  = State.quiz.current;
  const { questionHTML, options, correctIdx } = buildQuestionData(svc);
  State.quiz.correctIdx = correctIdx;

  const done  = State.quiz.ok + State.quiz.fail;
  const total = done + State.quiz.queue.length + 1;
  const pct   = total > 0 ? Math.round((done / total) * 100) : 0;
  const letters = ['A', 'B', 'C', 'D'];

  // Update score bar
  const scLeft = document.getElementById('sc-left');
  const scOk   = document.getElementById('sc-ok');
  const scFail = document.getElementById('sc-fail');
  const prog   = document.getElementById('quiz-prog');
  const progLbl= document.getElementById('quiz-prog-label');
  if (scLeft)  scLeft.textContent  = State.quiz.queue.length;
  if (scOk)    scOk.textContent    = State.quiz.ok;
  if (scFail)  scFail.textContent  = State.quiz.fail;
  if (prog)    prog.style.width    = pct + '%';
  if (progLbl) progLbl.textContent = pct + '%';

  // Render question card fresh
  const wrap = document.getElementById('quiz-question-wrap');
  if (!wrap) return;

  wrap.innerHTML = `
    <div class="quiz-card">
      <div class="q-meta">
        <span class="q-meta-label">Pregunta ${done + 1} de ${total}</span>
        <span class="q-cat-badge" style="border-color:${catColor(svc.cat)};color:${catColor(svc.cat)}">${catLabel(svc.cat)}</span>
      </div>
      <div class="q-text">${questionHTML}</div>
      <div class="options">
        ${options.map((o, i) => `
          <button class="option" data-idx="${i}" data-correct="${o.correct}" onclick="answerQuiz(this)">
            <span class="opt-letter">${letters[i]}</span>
            <span>${o.text}</span>
          </button>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="q-feedback"></div>
    </div>
    <button class="next-btn" id="next-btn" onclick="showQuestion()">Siguiente →</button>
  `;
}

function answerQuiz(btn) {
  if (State.quiz.answered) return;
  State.quiz.answered = true;

  const correct = btn.dataset.correct === 'true';
  const svc     = State.quiz.current;

  Progress.record(svc.name, correct);

  if (!State.quiz.catStats[svc.cat]) State.quiz.catStats[svc.cat] = { ok: 0, total: 0 };
  State.quiz.catStats[svc.cat].total++;
  if (correct) State.quiz.catStats[svc.cat].ok++;

  // Style all options
  document.querySelectorAll('.option').forEach((b, i) => {
    b.setAttribute('disabled', '');
    b.onclick = null;
    if (i === State.quiz.correctIdx) b.classList.add('correct');
  });

  if (!correct) {
    btn.classList.add('wrong');
    State.quiz.fail++;
  } else {
    State.quiz.ok++;
  }

  // Update score
  const scOk   = document.getElementById('sc-ok');
  const scFail = document.getElementById('sc-fail');
  if (scOk)   scOk.textContent   = State.quiz.ok;
  if (scFail) scFail.textContent = State.quiz.fail;

  // Feedback
  const tip = svc.tips && svc.tips.length
    ? `<div class="feedback-tip">${svc.tips[0]}</div>`
    : '';

  const fb = document.getElementById('q-feedback');
  if (fb) {
    if (correct) {
      fb.className = 'quiz-feedback ok show';
      fb.innerHTML = `✓ Correcto. <strong>${svc.name}</strong> — ${svc.short}.${tip}`;
    } else {
      fb.className = 'quiz-feedback bad show';
      fb.innerHTML = `✗ Incorrecto. La respuesta correcta es <strong>${svc.name}</strong> — ${svc.short}.<br><br>${svc.desc}${tip}`;
    }
  }

  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) {
    nextBtn.textContent = State.quiz.queue.length === 0 ? 'Ver resultado →' : 'Siguiente →';
    nextBtn.classList.add('show');
  }
}

/* ─── RESULTS ───────────────────────────────────────────────────────────── */
function renderResults() {
  const { ok, fail, catStats } = State.quiz;
  const total = ok + fail;
  const pct = total > 0 ? Math.round((ok / total) * 100) : 0;
  const cls = pctClass(pct);

  const msgs = {
    great: `¡Muy bien! ${pct >= 90 ? 'Prácticamente listo para el examen.' : 'Seguís en buen camino.'}`,
    ok:    'Vas bien, pero hay margen de mejora. Revisá las que erraste.',
    needs: 'Necesitás más práctica. No te rindas — seguí repasando.',
  };

  // Breakdown by category
  const breakdownRows = Object.entries(catStats)
    .map(([cat, st]) => {
      const p = Math.round((st.ok / st.total) * 100);
      return { cat, pct: p, ok: st.ok, total: st.total };
    })
    .sort((a, b) => a.pct - b.pct)
    .map(row => `
      <div class="breakdown-row">
        <div class="breakdown-cat">${catLabel(row.cat)}</div>
        <div class="breakdown-bar-wrap">
          <div class="breakdown-bar" style="width:${row.pct}%;background:${pctBarColor(row.pct)}"></div>
        </div>
        <div class="breakdown-score" style="color:${pctBarColor(row.pct)}">${row.pct}%</div>
      </div>
    `).join('');

  const weak = Progress.weakServices();

  return `
    <div class="results-card">
      <div class="results-title">Resultado del Quiz</div>
      <div class="results-pct ${cls}">${pct}%</div>
      <div class="results-msg">
        ${ok} correctas de ${total} preguntas.<br>${msgs[cls]}
      </div>

      ${breakdownRows ? `
        <div class="results-breakdown">
          <div class="breakdown-title">Por categoría</div>
          ${breakdownRows}
        </div>
      ` : ''}

      <div class="results-actions">
        <button class="btn-primary"   onclick="navigate('quiz')">Volver a intentar</button>
        <button class="btn-secondary" onclick="navigate('home')">Inicio</button>
        ${weak.length > 0 ? `<button class="btn-danger" onclick="startWeakQuiz()">Practicar ${weak.length} débiles</button>` : ''}
      </div>
    </div>
  `;
}

/* ─── Category pill bar ─────────────────────────────────────────────────── */
function buildPills() {
  const cats = [['all', 'Todos'], ...Object.entries(CATEGORIES).map(([k, v]) => [k, v.label])];
  return cats.map(([key, label]) => `
    <button class="pill ${State.filter === key ? 'active' : ''}"
      onclick="setFilter('${key}', this)">${label}</button>
  `).join('');
}

function setFilter(cat, btn) {
  State.filter = cat;
  document.querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  if (State.view === 'flashcards') {
    initFC();
    const grid = document.getElementById('fc-grid');
    if (grid) {
      grid.innerHTML = State.fc.list.map((s, idx) => buildGridCard(s, idx)).join('');
    }
    const rated = State.fc.list.filter(s => Progress.data[s.name]).length;
    const prog = document.getElementById('fc-prog');
    const progLbl = document.getElementById('fc-prog-label');
    const sub = document.getElementById('fc-subtitle');
    if (prog) prog.style.width = fcProgress() + '%';
    if (progLbl) progLbl.textContent = `${rated} / ${State.fc.list.length} calificadas`;
    if (sub) sub.textContent = `${State.fc.list.length} servicios`;
  } else if (State.view === 'quiz') {
    initQuiz();
    showQuestion();
  }
}

/* ─── Keyboard shortcuts ────────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  if (State.view === 'quiz') {
    if (State.quiz.answered) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showQuestion();
      }
    } else {
      const map = { a: 0, b: 1, c: 2, d: 3 };
      const idx = map[e.key.toLowerCase()];
      if (idx !== undefined) {
        const btn = document.querySelectorAll('.option')[idx];
        if (btn) btn.click();
      }
    }
  }
});

/* ─── SIMULACRO ─────────────────────────────────────────────────────────── */
const Sim = {
  exam:     null,   // current exam object {id, title, questions, categories}
  filter:   'all',
  queue:    [],
  index:    0,
  selected: new Set(),
  answered: false,
  ok:       0,
  fail:     0,
  catStats: {},
};

function simCatColor(key) {
  const cats = Sim.exam ? Sim.exam.categories : {};
  return (cats[key] || {}).color || '#8b949e';
}
function simCatLabel(key) {
  const cats = Sim.exam ? Sim.exam.categories : {};
  return (cats[key] || {}).label || key;
}

/* Landing: list of all available exams */
function renderSimulacro() {
  const examCards = EXAMS.map(exam => {
    const total = exam.questions.length;
    const cats  = Object.keys(exam.categories);
    const dots  = cats.map(k =>
      `<span class="exam-cat-dot" style="background:${exam.categories[k].color}" title="${exam.categories[k].label}"></span>`
    ).join('');
    const multiCount = exam.questions.filter(q => q.multiSelect).length;
    return `
      <button class="exam-card" onclick="startSimExam('${exam.id}')">
        <div class="exam-card-icon">📝</div>
        <div class="exam-card-title">${exam.title}</div>
        <div class="exam-card-meta">
          <span>${total} preguntas</span>
          ${multiCount ? `<span>${multiCount} multi-select</span>` : ''}
          <span>${cats.length} categorías</span>
        </div>
        <div class="exam-cat-dots">${dots}</div>
      </button>`;
  }).join('');

  return `
    <div class="page-title">Simulacro</div>
    <div class="page-subtitle">Elegí un examen de práctica para comenzar.</div>
    <div class="exam-grid">${examCards}</div>
  `;
}

function startSimExam(examId) {
  Sim.exam   = EXAMS.find(e => e.id === examId) || EXAMS[0];
  Sim.filter = 'all';
  initSim();
  renderSimExamShell();
  setTimeout(() => showSimQuestion(), 0);
}

function renderSimExamShell() {
  const exam = Sim.exam;
  const catPills = [['all', 'Todas']].concat(
    Object.entries(exam.categories).map(([k, v]) => [k, v.label])
  ).map(([key, label]) => {
    const count = key === 'all'
      ? exam.questions.length
      : exam.questions.filter(q => q.cat === key).length;
    return `<button class="pill ${Sim.filter === key ? 'active' : ''}"
      onclick="setSimFilter('${key}', this)">${label}
      <span style="opacity:.6;font-size:11px">${count}</span></button>`;
  }).join('');

  const app = document.getElementById('app');
  app.innerHTML = '';
  const div = document.createElement('div');
  div.className = 'view';
  div.innerHTML = `
    <div class="page-title">${exam.title}</div>

    <div class="pill-bar" id="sim-pill-bar">${catPills}</div>

    <div class="progress-row">
      <div class="progress-track">
        <div class="progress-fill" id="sim-prog" style="width:0%"></div>
      </div>
      <div class="progress-label" id="sim-prog-label">0 / ${Sim.queue.length}</div>
    </div>

    <div class="score-row">
      Correctas: <span class="val ok" id="sim-ok">0</span>
      &nbsp;·&nbsp;
      Incorrectas: <span class="val fail" id="sim-fail">0</span>
      &nbsp;·&nbsp;
      Restantes: <span class="val" id="sim-left">${Sim.queue.length}</span>
    </div>

    <div id="sim-question-wrap"></div>
  `;
  app.appendChild(div);
}

function initSim() {
  const pool = Sim.filter === 'all'
    ? Sim.exam.questions
    : Sim.exam.questions.filter(q => q.cat === Sim.filter);
  Sim.queue    = shuffle([...pool]);
  Sim.index    = 0;
  Sim.selected = new Set();
  Sim.answered = false;
  Sim.ok       = 0;
  Sim.fail     = 0;
  Sim.catStats = {};
}

function setSimFilter(key, btn) {
  Sim.filter = key;
  document.querySelectorAll('#sim-pill-bar .pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  initSim();
  const progLbl = document.getElementById('sim-prog-label');
  const elLeft  = document.getElementById('sim-left');
  if (progLbl) progLbl.textContent = `0 / ${Sim.queue.length}`;
  if (elLeft)  elLeft.textContent  = Sim.queue.length;
  showSimQuestion();
}

function showSimQuestion() {
  if (Sim.index >= Sim.queue.length) {
    navigate('sim-results');
    return;
  }

  const q       = Sim.queue[Sim.index];
  const done    = Sim.index;
  const total   = Sim.queue.length;
  const pct     = total > 0 ? Math.round((done / total) * 100) : 0;
  const letters = ['A','B','C','D','E','F'];

  Sim.selected = new Set();
  Sim.answered = false;

  const elProg    = document.getElementById('sim-prog');
  const elProgLbl = document.getElementById('sim-prog-label');
  const elLeft    = document.getElementById('sim-left');
  const elOk      = document.getElementById('sim-ok');
  const elFail    = document.getElementById('sim-fail');
  if (elProg)    elProg.style.width    = pct + '%';
  if (elProgLbl) elProgLbl.textContent = `${done} / ${total}`;
  if (elLeft)    elLeft.textContent    = total - done;
  if (elOk)      elOk.textContent      = Sim.ok;
  if (elFail)    elFail.textContent    = Sim.fail;

  const multiHint = q.multiSelect
    ? `<div class="sim-multi-hint">Selecciona <strong>${q.selectCount}</strong> opciones correctas y luego confirma.</div>`
    : '';

  const optionsHTML = q.options.map((o, i) => `
    <button class="sim-option" data-idx="${i}" onclick="simSelect(this, ${q.multiSelect})">
      <span class="opt-letter">${letters[i]}</span>
      <span>${o.text}</span>
    </button>
  `).join('');

  const confirmBtn = q.multiSelect
    ? `<button class="next-btn show" id="sim-confirm" onclick="answerSim()"
         style="max-width:100%;margin-top:8px">Confirmar selección</button>`
    : '';

  const wrap = document.getElementById('sim-question-wrap');
  if (!wrap) return;

  wrap.innerHTML = `
    <div class="quiz-card">
      <div class="q-meta">
        <span class="q-meta-label">Pregunta ${done + 1} de ${total}</span>
        <span class="q-cat-badge" style="border-color:${simCatColor(q.cat)};color:${simCatColor(q.cat)}">
          ${simCatLabel(q.cat)}
        </span>
      </div>
      ${multiHint}
      <div class="q-text">${q.text}</div>
      <div id="sim-options">${optionsHTML}</div>
      <div class="quiz-feedback" id="sim-feedback"></div>
    </div>
    ${confirmBtn}
    <button class="next-btn" id="sim-next" onclick="nextSimQuestion()">
      ${done === total - 1 ? 'Ver resultado →' : 'Siguiente →'}
    </button>
  `;
}

function simSelect(btn, isMulti) {
  if (Sim.answered) return;
  const idx = parseInt(btn.dataset.idx);
  if (!isMulti) {
    document.querySelectorAll('.sim-option').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    Sim.selected = new Set([idx]);
    answerSim();
  } else {
    if (Sim.selected.has(idx)) {
      Sim.selected.delete(idx);
      btn.classList.remove('selected');
    } else {
      Sim.selected.add(idx);
      btn.classList.add('selected');
    }
  }
}

function answerSim() {
  if (Sim.answered) return;
  Sim.answered = true;

  const q       = Sim.queue[Sim.index];
  const correct = new Set(q.options.map((o, i) => o.correct ? i : -1).filter(i => i >= 0));
  const isRight = [...correct].every(i => Sim.selected.has(i))
               && [...Sim.selected].every(i => correct.has(i));

  if (!Sim.catStats[q.cat]) Sim.catStats[q.cat] = { ok: 0, total: 0 };
  Sim.catStats[q.cat].total++;
  if (isRight) { Sim.ok++; Sim.catStats[q.cat].ok++; }
  else         { Sim.fail++; }

  const confirmBtn = document.getElementById('sim-confirm');
  if (confirmBtn) confirmBtn.style.display = 'none';

  // Color options
  document.querySelectorAll('.sim-option').forEach((btn, i) => {
    btn.setAttribute('disabled', '');
    btn.onclick = null;
    const isCor = correct.has(i);
    const isSel = Sim.selected.has(i);
    if      (isCor && isSel)  btn.classList.add('correct');
    else if (isCor)           btn.classList.add('correct-missed');
    else if (isSel)           btn.classList.add('wrong');
    else                      btn.classList.add('dim');
  });

  // All options — always show every one with its explanation
  const letters = ['A','B','C','D','E','F'];
  const expRows = q.options.map((o, i) => {
    const isCor = correct.has(i);
    const icon  = isCor ? '✓' : '✗';
    const cls   = isCor ? 'exp-row-correct' : 'exp-row-wrong';
    const exp   = o.explanation
      ? `<span class="exp-text">${o.explanation}</span>`
      : '';
    return `<div class="exp-row ${cls}">
      <span class="exp-icon">${icon}</span>
      <div><strong>${letters[i]}. ${o.text}</strong>${exp ? '<br>' + exp : ''}</div>
    </div>`;
  }).join('');

  // Images
  const imgs = (q.images || []).map(url =>
    `<img src="${url}" alt="Diagrama" loading="lazy">`
  ).join('');
  const imgWrap = imgs ? `<div class="sim-img-wrap">${imgs}</div>` : '';

  const fb = document.getElementById('sim-feedback');
  if (fb) {
    fb.className = 'quiz-feedback show ' + (isRight ? 'ok' : 'bad');
    fb.innerHTML = `
      <strong>${isRight ? '✓ Correcto' : '✗ Incorrecto'}</strong>
      <div class="sim-exp-wrap">${expRows}</div>
      ${imgWrap}
    `;
  }

  const nextBtn = document.getElementById('sim-next');
  if (nextBtn) {
    nextBtn.textContent = Sim.index === Sim.queue.length - 1 ? 'Ver resultado →' : 'Siguiente →';
    nextBtn.classList.add('show');
  }

  const elOk   = document.getElementById('sim-ok');
  const elFail = document.getElementById('sim-fail');
  if (elOk)   elOk.textContent   = Sim.ok;
  if (elFail) elFail.textContent = Sim.fail;
}

function nextSimQuestion() {
  Sim.index++;
  showSimQuestion();
}

/* ─── Simulacro Results ─────────────────────────────────────────────────── */
function renderSimResults() {
  const total = Sim.ok + Sim.fail;
  const pct   = total > 0 ? Math.round((Sim.ok / total) * 100) : 0;
  const cls   = pctClass(pct);
  const msgs  = {
    great: `¡Excelente resultado! ${pct >= 90 ? 'Estás listo para el examen.' : 'Seguís en muy buen camino.'}`,
    ok:    'Buen resultado, pero revisá las preguntas que erraste.',
    needs: 'Necesitás más práctica. Repasá los temas con más errores.',
  };

  const breakdownRows = Object.entries(Sim.catStats)
    .map(([cat, st]) => {
      const p = st.total > 0 ? Math.round((st.ok / st.total) * 100) : 0;
      return { cat, pct: p, ok: st.ok, total: st.total };
    })
    .sort((a, b) => a.pct - b.pct)
    .map(row => `
      <div class="breakdown-row">
        <div class="breakdown-cat" style="width:200px;flex-shrink:0">${simCatLabel(row.cat)}</div>
        <div class="breakdown-bar-wrap">
          <div class="breakdown-bar" style="width:${row.pct}%;background:${pctBarColor(row.pct)}"></div>
        </div>
        <div class="breakdown-score" style="color:${pctBarColor(row.pct)}">${row.pct}%</div>
      </div>
    `).join('');

  return `
    <div class="results-card">
      <div class="results-title">${Sim.exam ? Sim.exam.title : 'Simulacro'}</div>
      <div class="results-pct ${cls}">${pct}%</div>
      <div class="results-msg">
        ${Sim.ok} correctas de ${total} preguntas.<br>${msgs[cls] || ''}
      </div>
      ${breakdownRows ? `
        <div class="results-breakdown">
          <div class="breakdown-title">Por categoría</div>
          ${breakdownRows}
        </div>
      ` : ''}
      <div class="results-actions">
        <button class="btn-primary"   onclick="startSimExam('${Sim.exam ? Sim.exam.id : ''}')">
          Reintentar este test
        </button>
        <button class="btn-secondary" onclick="navigate('simulacro')">Elegir otro test</button>
        <button class="btn-secondary" onclick="navigate('home')">Inicio</button>
      </div>
    </div>
  `;
}

/* ─── Bootstrap ─────────────────────────────────────────────────────────── */
Progress.load();
navigate('home');
