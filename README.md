# AWS AI Practitioner — Practice App

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

**🚀 [Ver app en vivo](https://jazminlu.github.io/aws-ai-practitioner/)**

App de práctica para el examen **AWS Certified AI Practitioner (AIF-C01)**. Sin dependencias externas ni servidor — abrís el archivo y empezás a estudiar.

---

## Características

- **70+ conceptos y servicios** organizados en 6 dominios del examen
- **Modo Flashcards** — repasá a tu ritmo con animación de volteo y tips clave
- **Modo Quiz** — opción múltiple con 3 tipos de pregunta
- **Progreso persistente** — guardado en `localStorage`, sobrevive al cierre del navegador
- **Áreas débiles** — detecta automáticamente qué temas seguís errando
- **Atajos de teclado** — navegación sin mouse
- **Responsive** — funciona en mobile y desktop

---

## Cómo usar

### Opción 1 — Clonar y abrir localmente

```bash
git clone https://github.com/jazminLU/aws-ai-practitioner.git
cd aws-ai-practitioner
```

Abrí `index.html` con doble click. No necesita servidor.

```
aws-ai-practitioner/
├── index.html
├── css/
│   └── styles.css
└── js/
    ├── data.js      ← conceptos y servicios AIF-C01
    └── app.js       ← lógica de la aplicación
```

---

## Modos de práctica

### Flashcards

| Acción | Teclado |
|--------|---------|
| Voltear tarjeta | `Space` o click |
| Tarjeta anterior | `←` |
| Tarjeta siguiente | `→` |
| Lo sabía ✓ | `1` |
| Regular | `2` |
| No sabía ✗ | `3` |

### Quiz

| Acción | Teclado |
|--------|---------|
| Responder A/B/C/D | `A` `B` `C` `D` |
| Siguiente pregunta | `Enter` |

Tres modos: **Nombre → Descripción**, **Descripción → Nombre** y **Mixto**.

---

## Dominios cubiertos

| Dominio | Contenido |
|---------|-----------|
| AI/ML Fundamentos | Supervised/Unsupervised/RL, Deep Learning, Overfitting, Embeddings, Métricas |
| Generative AI | Foundation Models, LLMs, Tokens, Prompt Engineering, RAG, Fine-tuning, RLHF, Agentes |
| AWS AI Services | Bedrock, SageMaker, Rekognition, Comprehend, Textract, Lex, Kendra, Q, Trainium, Inferentia |
| Responsible AI | Bias, Fairness, Explainability, Transparency, Human Oversight, Model Cards |
| MLOps | Pipelines, Model Registry, Model Monitor, Clarify, Feature Store, A/B Testing |
| Seguridad | Cifrado, IAM, Prompt Injection, Gobernanza, Lineage, Compliance, VPC |

---

## Examen AIF-C01

| Dominio | Peso |
|---------|------|
| Fundamentals of AI and ML | 20% |
| Fundamentals of Generative AI | 24% |
| Applications of Foundation Models | 28% |
| Guidelines for Responsible AI | 14% |
| Security, Compliance & Governance for AI | 14% |

---

## Tecnologías

- **HTML5** semántico — sin frameworks
- **CSS3** — custom properties, grid, flexbox, animaciones
- **JavaScript ES6+** — vanilla, sin dependencias
- **localStorage** — persistencia de progreso en el navegador

---

## Licencia

MIT
