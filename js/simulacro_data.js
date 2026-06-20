// Auto-generated — do not edit by hand
const EXAMS = [
  {
    "id": "test1",
    "title": "Simulacro Test 1 — AIF-C01",
    "questions": [
      {
        "id": 1,
        "text": "Un especialista en IA está desarrollando un modelo de IA entrenado y alojado en Amazon SageMaker. El especialista debe elegir una opción de inferencia de SageMaker que proporcione predicciones inmediatas y de baja latencia para un sistema de recomendaciones y respuestas en tiempo real a consultas de los usuarios. ¿Cuál de las siguientes opciones es la más adecuada para los requisitos dados?",
        "cat": "fm_apps",
        "catLabel": "Aplicaciones de los modelos fundacionales",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q23-1.jpg"
        ],
        "options": [
          {
            "text": "Paralelismo de modelos e inferencia de modelos grandes",
            "correct": false,
            "explanation": "Estas técnicas están diseñadas para manejar modelos muy grandes que no caben en la memoria de un solo dispositivo GPU. Aunque son útiles para el entrenamiento y la inferencia de modelos grandes, no abordan específicamente la necesidad de predicciones inmediatas y de baja latencia."
          },
          {
            "text": "Inferencia sin servidor",
            "correct": false,
            "explanation": "Está diseñada principalmente para cargas de trabajo con tráfico intermitente o impredecible. Administra automáticamente la infraestructura subyacente en función de las solicitudes entrantes. Aunque ofrece flexibilidad y eficiencia en costos, podría introducir latencia debido al tiempo necesario para escalar los recursos, lo que la hace menos adecuada para aplicaciones que requieren respuestas inmediatas."
          },
          {
            "text": "Inferencia asíncrona",
            "correct": false,
            "explanation": "Está diseñada principalmente para procesamiento por lotes o escenarios donde no se requieren respuestas inmediatas. Permite encolar solicitudes de inferencia y procesarlas a medida que los recursos estén disponibles, lo cual no es ideal para los requisitos de tiempo real y baja latencia."
          },
          {
            "text": "Inferencia en tiempo real",
            "correct": true,
            "explanation": "La inferencia en tiempo real es la más adecuada para cargas de trabajo de inferencia que requieren respuestas interactivas, en tiempo real y de baja latencia. Puedes desplegar tu modelo en los servicios de alojamiento de SageMaker y obtener un endpoint para realizar la inferencia. Estos endpoints están completamente gestionados y admiten autoescalado, lo que los hace bien adecuados para aplicaciones como sistemas de recomendación que necesitan respuestas en tiempo real a las consultas de los usuarios. SageMaker ofrece endpoints totalmente gestionados para la inferencia en tiempo real, lo que garantiza que el modelo pueda manejar cargas de trabajo interactivas y de baja latencia. Opciones incorrectas:"
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints.html"
        ]
      },
      {
        "id": 2,
        "text": "Una empresa de automatización del hogar quiere mejorar su chatbot de atención al cliente, impulsado por un modelo de lenguaje grande (LLM), integrando información de la documentación de productos y la base de conocimientos. ¿Qué técnica debe emplear la empresa para lograr este objetivo con el menor esfuerzo de desarrollo posible?",
        "cat": "fm_apps",
        "catLabel": "Aplicaciones de los modelos fundacionales",
        "multiSelect": false,
        "selectCount": 1,
        "images": [],
        "options": [
          {
            "text": "Integración con un grafo de conocimiento",
            "correct": false,
            "explanation": "Integrar grafos de conocimiento con LLMs puede ser un enfoque poderoso, pero generalmente requiere un esfuerzo significativo en la construcción de grafos, vinculación de entidades e integración de modelos."
          },
          {
            "text": "Fine-tuning",
            "correct": false,
            "explanation": "Aunque el fine-tuning puede ser una técnica eficaz para adaptar un LLM a un dominio específico, requiere reentrenar el modelo con datos específicos, lo que puede consumir mucho tiempo y esfuerzo."
          },
          {
            "text": "RAG (Retrieval Augmented Generation)",
            "correct": true,
            "explanation": "Es una técnica que mejora la salida de los modelos de lenguaje grande al hacer referencia a una base de conocimientos externa y autorizada antes de generar respuestas. Esta técnica mejora la relevancia y precisión del modelo sin requerir un reentrenamiento, lo que la convierte en una forma rentable de aprovechar conocimientos específicos del dominio o de la organización. RAG es el método más simple para integrar información actualizada con el mínimo esfuerzo de desarrollo. Opciones incorrectas:"
          },
          {
            "text": "Active Learning",
            "correct": false,
            "explanation": "Active Learning es una técnica útil para mejorar iterativamente el rendimiento de los modelos de machine learning, incluidos los sistemas conversacionales de IA. Sin embargo, generalmente se utiliza junto con otras técnicas, como el fine-tuning o la expansión de la base de conocimientos. No aborda directamente la integración de la documentación de productos y bases de conocimientos existentes."
          }
        ],
        "references": [
          "https://aws.amazon.com/what-is/retrieval-augmented-generation/",
          "https://aws.amazon.com/what-is/large-language-model/"
        ]
      },
      {
        "id": 3,
        "text": "Una empresa especializada en servicios financieros recibe grandes volúmenes de datos de audio que contienen discusiones complejas sobre productos financieros, utilizando terminología específica del sector, como acrónimos, nombres de marcas y jerga técnica. Para mejorar sus operaciones y análisis, la empresa desea transcribir estos audios con alta precisión, asegurando que todos los términos específicos del dominio sean reconocidos y transcritos correctamente. Dado que la precisión de la transcripción es crucial para el análisis posterior, la empresa necesita una solución que pueda manejar la complejidad del lenguaje especializado. ¿Qué solución de AWS debería implementar la empresa para mejorar la precisión de las transcripciones en contextos específicos del dominio?",
        "cat": "fm_apps",
        "catLabel": "Aplicaciones de los modelos fundacionales",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q6-1.jpg"
        ],
        "options": [
          {
            "text": "Utilizar un modelo de lenguaje personalizado en Amazon Transcribe",
            "correct": true,
            "explanation": "Amazon Transcribe es un servicio que convierte el habla en texto de manera precisa. Para mejorar la precisión en transcripciones que contienen terminología específica del dominio, como en el caso de la empresa financiera, Amazon Transcribe permite crear un modelo de lenguaje personalizado. Este modelo puede incluir vocabulario especializado, como nombres de marcas, acrónimos y términos técnicos, lo que mejora significativamente la precisión de las transcripciones en estos contextos. Opciones incorrectas:"
          },
          {
            "text": "Utilizar un modelo de lenguaje personalizado en Amazon Translate",
            "correct": false,
            "explanation": "Amazon Translate es un servicio que proporciona traducción entre múltiples idiomas. Aunque es útil para traducción de texto, no tiene capacidades para mejorar la transcripción de audio específico de un dominio."
          },
          {
            "text": "Utilizar la identificación de idioma por lotes en Amazon Transcribe",
            "correct": false,
            "explanation": "Amazon Transcribe ofrece una función de identificación de idioma por lotes que permite identificar automáticamente el idioma en archivos de audio. Sin embargo, esta función no mejora la precisión de la transcripción en términos de vocabulario específico de un dominio."
          },
          {
            "text": "Utilizar un bot personalizado en Amazon Lex",
            "correct": false,
            "explanation": "Amazon Lex es un servicio diseñado para crear interfaces conversacionales y chatbots, utilizando comprensión del lenguaje natural y reconocimiento automático de voz. Sin embargo, no está diseñado para mejorar la precisión de transcripciones de audio especializado."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html"
        ]
      },
      {
        "id": 4,
        "text": "Una empresa que opera en un entorno regulado ha implementado Amazon Bedrock para sus operaciones de inteligencia artificial. Para cumplir con los requisitos de conformidad y auditoría interna, la empresa necesita registrar detalladamente todas las llamadas de API que se realizan a Amazon Bedrock. Específicamente, desean asegurar que estos registros incluyan información clave como el tipo de operación realizada, el usuario que ejecutó la llamada, la hora exacta en la que se realizó la operación, y el origen de la solicitud. ¿Qué servicio de AWS debería implementar la empresa para cumplir con estos requisitos y asegurar un registro completo y auditable de las llamadas de API?",
        "cat": "security",
        "catLabel": "Seguridad, normativa y gobernanza de las soluciones de IA",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q1-1.jpg"
        ],
        "options": [
          {
            "text": "Amazon Inspector",
            "correct": false,
            "explanation": "Amazon Inspector es una herramienta de análisis de seguridad que identifica vulnerabilidades y problemas de conformidad en los entornos de AWS, pero no está diseñada para registrar o auditar llamadas de API."
          },
          {
            "text": "AWS Trusted Advisor",
            "correct": false,
            "explanation": "AWS Trusted Advisor ofrece recomendaciones para optimizar el uso de los servicios de AWS y mejorar la seguridad, pero no proporciona la capacidad de registrar llamadas de API ni de generar logs auditable."
          },
          {
            "text": "Amazon CloudWatch",
            "correct": false,
            "explanation": "Amazon CloudWatch es un servicio de monitoreo y gestión de logs que permite rastrear métricas y eventos en tiempo real. Aunque es útil para el monitoreo de la infraestructura y las aplicaciones, no cumple con el propósito de registrar y auditar llamadas de API de manera detallada."
          },
          {
            "text": "AWS CloudTrail",
            "correct": true,
            "explanation": "AWS CloudTrail es el servicio adecuado para este escenario, ya que proporciona un registro detallado y auditable de todas las llamadas de API realizadas en una cuenta de AWS. CloudTrail registra información completa sobre las operaciones realizadas, incluyendo el usuario, el tipo de operación, la hora exacta, y el origen de la solicitud. Esto permite a la empresa cumplir con los requisitos de conformidad y auditoría de manera efectiva. Opciones incorrectas:"
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/es_es/awscloudtrail/latest/userguide/cloudtrail-user-guide.html"
        ]
      },
      {
        "id": 5,
        "text": "Una empresa biotecnológica utiliza modelos de machine learning (ML) en AWS para analizar datos genómicos sensibles. Antes de continuar con su investigación, la empresa debe revisar la adhesión de AWS a las normas de seguridad de datos y regulaciones de cumplimiento. ¿Qué servicio puede proporcionar esta información?",
        "cat": "security",
        "catLabel": "Seguridad, normativa y gobernanza de las soluciones de IA",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q55-1.jpg"
        ],
        "options": [
          {
            "text": "Amazon Inspector",
            "correct": false,
            "explanation": "Esta opción es un servicio de evaluación de seguridad que ayuda a analizar la postura de seguridad de las instancias de EC2 al identificar posibles vulnerabilidades. Si bien es útil para mejorar la postura de seguridad de la infraestructura, no proporciona los informes de cumplimiento o la documentación necesaria para verificar la conformidad regulatoria de AWS."
          },
          {
            "text": "AWS Config",
            "correct": false,
            "explanation": "Este servicio solo se utiliza para evaluar, auditar y analizar las configuraciones de los recursos de AWS, en lugar de proporcionar informes de cumplimiento."
          },
          {
            "text": "AWS Artifact",
            "correct": true,
            "explanation": "Portal de autoservicio que proporciona acceso a la documentación de cumplimiento bajo demanda de AWS. Este servicio ofrece un repositorio integral de informes de seguridad y cumplimiento de AWS, incluidos certificados, certificaciones y acuerdos. Estos documentos son esenciales para los clientes en industrias altamente reguladas, como la atención médica, finanzas y biotecnología, ya que demuestran la adhesión de AWS a las normas de la industria y los requisitos regulatorios. AWS Artifact ayuda a las organizaciones a garantizar que los datos almacenados en AWS cumplan con marcos regulatorios como HIPAA, GDPR y PCI DSS. Opciones incorrectas:"
          },
          {
            "text": "AWS Trusted Advisor",
            "correct": false,
            "explanation": "Está diseñado principalmente para proporcionar orientación en tiempo real sobre las mejores prácticas para optimizar tu entorno AWS, pero no proporciona información detallada de cumplimiento."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html",
          "https://aws.amazon.com/artifact/"
        ]
      },
      {
        "id": 6,
        "text": "Una organización de salud está desarrollando una aplicación de diagnóstico impulsada por IA que utiliza Amazon Bedrock. La aplicación se implementa dentro de una VPC que debe cumplir con estrictas regulaciones de privacidad de datos. Estas regulaciones prohíben cualquier conectividad a Internet desde o hacia la VPC. ¿Qué servicio o característica de AWS satisfará estos objetivos?",
        "cat": "security",
        "catLabel": "Seguridad, normativa y gobernanza de las soluciones de IA",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q63-1.jpg"
        ],
        "options": [
          {
            "text": "AWS PrivateLink",
            "correct": true,
            "explanation": "Permite conectar tu VPC directamente a los servicios de AWS sin exponer tus datos a Internet público. Esto es crucial para empresas que deben cumplir con estrictas normativas de cumplimiento, ya que garantiza que el tráfico de red permanezca completamente privado y dentro de la red de AWS, sin depender de gateways o conexiones externas a Internet. Opciones incorrectas:"
          },
          {
            "text": "Amazon S3 VPC Endpoint",
            "correct": false,
            "explanation": "Simplemente permite la conectividad privada a Amazon S3 y no cubriría la necesidad de conectarse a otros servicios de AWS como Amazon Bedrock."
          },
          {
            "text": "Internet gateway",
            "correct": false,
            "explanation": "Habilita la conectividad a Internet, lo cual violaría directamente el requisito de la organización de prohibir el acceso a Internet desde o hacia la VPC."
          },
          {
            "text": "AWS Direct Connect",
            "correct": false,
            "explanation": "Este servicio solo proporciona una conexión de red dedicada entre las instalaciones locales y AWS, pero no impide de forma inherente la conectividad a Internet dentro de la VPC."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html",
          "https://docs.aws.amazon.com/vpc/latest/privatelink/concepts.html"
        ]
      },
      {
        "id": 7,
        "text": "Una empresa de comercio electrónico está diseñando un chatbot para asistir a los clientes con consultas sobre productos, actualizaciones de estado de pedidos y resolución de problemas. ¿Qué capacidad de la IA es más relevante para asegurar que el chatbot proporcione respuestas en tiempo real a las consultas de los clientes?",
        "cat": "genai",
        "catLabel": "Fundamentos de IA Generativa",
        "multiSelect": false,
        "selectCount": 1,
        "images": [],
        "options": [
          {
            "text": "Capacidad de respuesta",
            "correct": true,
            "explanation": "Asegura que el chatbot genere contenido en tiempo real, proporcionando respuestas inmediatas a las consultas de los clientes. En un contexto de comercio electrónico, los clientes esperan asistencia rápida, por lo que la capacidad de respuesta es crucial. Opciones incorrectas:"
          },
          {
            "text": "Adaptabilidad",
            "correct": false,
            "explanation": "Esta capacidad se refiere principalmente a la capacidad del chatbot para aprender de las interacciones con los clientes y adaptar sus respuestas según el contexto. Aunque la adaptabilidad es valiosa, no aborda directamente la capacidad de respuesta en tiempo real."
          },
          {
            "text": "Eficiencia de datos",
            "correct": false,
            "explanation": "Solo permite que el chatbot maneje grandes cantidades de datos de los clientes de manera eficiente. Sin embargo, no se relaciona directamente con la provisión de respuestas en tiempo real."
          },
          {
            "text": "Simplicidad",
            "correct": false,
            "explanation": "Esto solo se refiere a la capacidad del chatbot para simplificar tareas complejas mediante la automatización de la creación de contenido. Aunque es útil, no aborda la necesidad de respuestas inmediatas en tiempo real."
          }
        ],
        "references": [
          "https://aws.amazon.com/what-is/generative-ai/"
        ]
      },
      {
        "id": 8,
        "text": "¿Qué modelo de aprendizaje automático es conocido por producir datos artificiales al aprender de ejemplos existentes?",
        "cat": "aiml",
        "catLabel": "Fundamentos de IA y ML",
        "multiSelect": false,
        "selectCount": 1,
        "images": [],
        "options": [
          {
            "text": "Recurrent Neural Network (RNN)",
            "correct": false,
            "explanation": "Se utilizan principalmente para tareas que implican datos secuenciales o series temporales, como reconocimiento de voz, modelado de lenguaje y pronósticos de series temporales. Aunque las RNN aprenden de patrones temporales, no están diseñadas para generar nuevos datos basados en un proceso antagónico."
          },
          {
            "text": "Convolutional Neural Networks (CNN)",
            "correct": false,
            "explanation": "Están especializadas en el procesamiento de datos estructurados en forma de cuadrícula, como las imágenes. Se utilizan principalmente para tareas como clasificación de imágenes, detección de objetos y reconocimiento facial, donde el modelo necesita aprender jerarquías espaciales de características, pero no están diseñadas para generar nuevos datos, sino para extraer características importantes de los datos existentes."
          },
          {
            "text": "Aprendizaje por refuerzo",
            "correct": false,
            "explanation": "Se centra en la toma de decisiones en entornos donde un agente realiza acciones para maximizar las recompensas acumuladas. No está diseñado para generar nuevos datos, sino para mejorar el rendimiento del agente mediante prueba y error."
          },
          {
            "text": "Generative Adversarial Network (GAN)",
            "correct": true,
            "explanation": "Son un tipo de modelo de aprendizaje automático diseñado para generar nuevos datos aprendiendo de un conjunto de datos existente. Las GAN consisten en dos redes neuronales, el generador y el discriminador, que trabajan juntas en un proceso competitivo. El generador crea muestras de datos sintéticos que se asemejan a los datos originales, mientras que el discriminador intenta diferenciar entre muestras reales y falsas. A medida que las dos redes compiten, el generador mejora su capacidad para crear datos realistas, y el discriminador se vuelve mejor identificando los datos falsos. Este proceso antagónico permite a las GAN generar datos altamente realistas, como imágenes, audio o texto. Opciones incorrectas:"
          }
        ],
        "references": [
          "https://aws.amazon.com/what-is/gan/"
        ]
      },
      {
        "id": 9,
        "text": "Un científico de datos está trabajando en un modelo de machine learning usando Amazon SageMaker. El modelo tiene un rendimiento deficiente tanto en los conjuntos de datos de entrenamiento como en los de validación, mostrando un alto sesgo. ¿Cuál es la causa más probable de este problema?",
        "cat": "aiml",
        "catLabel": "Fundamentos de IA y ML",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q50-1.jpg"
        ],
        "options": [
          {
            "text": "Overfitting",
            "correct": false,
            "explanation": "Suele llevar a una alta varianza, no a un alto sesgo, y el modelo generalmente funciona bien en los datos de entrenamiento, pero mal en los datos de validación."
          },
          {
            "text": "Preprocesamiento de datos insuficiente",
            "correct": false,
            "explanation": "Aunque puede causar un bajo rendimiento, no conduce directamente a un alto sesgo. El problema más común con una preprocesamiento insuficiente es un rendimiento inconsistente, no un sesgo alto en ambos conjuntos de datos."
          },
          {
            "text": "Calidad de los datos pobre",
            "correct": false,
            "explanation": "Aunque puede afectar el rendimiento general, no es un indicador específico de un alto sesgo."
          },
          {
            "text": "Underfitting",
            "correct": true,
            "explanation": "Ocurre cuando un modelo es demasiado simple para capturar los patrones subyacentes en los datos, lo que resulta en un alto sesgo y un rendimiento deficiente en ambos conjuntos de datos, tanto de entrenamiento como de validación. Esto generalmente sucede cuando el modelo no ha sido entrenado el tiempo suficiente o con una cantidad suficiente de datos. Opciones incorrectas:"
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/machine-learning/latest/dg/model-fit-underfitting-vs-overfitting.html",
          "https://aws.amazon.com/what-is/overfitting/"
        ]
      },
      {
        "id": 10,
        "text": "Un equipo está trabajando en un proyecto de machine learning. Han desarrollado un modelo para predecir si un correo electrónico es spam o no. Antes de desplegar el modelo, el equipo quiere asegurar la equidad y la transparencia. ¿Cuál de las siguientes opciones sería la más adecuada para este caso de uso?",
        "cat": "security",
        "catLabel": "Seguridad, normativa y gobernanza de las soluciones de IA",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q54-1.jpg"
        ],
        "options": [
          {
            "text": "Amazon SageMaker Clarify",
            "correct": true,
            "explanation": "Ofrece herramientas para detectar y abordar sesgos en modelos de machine learning. Ayuda a los científicos de datos y a los ingenieros de ML a monitorear regularmente las predicciones en busca de sesgos. SageMaker Clarify genera informes de equidad y transparencia que pueden exportarse y proporciona la opción de configurar alertas en Amazon CloudWatch para notificaciones si el sesgo supera un umbral definido. Es la opción ideal para garantizar la equidad y transparencia en el modelo de predicción de spam. Opciones incorrectas:"
          },
          {
            "text": "Amazon Personalize",
            "correct": false,
            "explanation": "Está diseñado únicamente para construir sistemas de recomendación, no específicamente para la equidad o la transparencia en los modelos de predicción de spam."
          },
          {
            "text": "Amazon SageMaker Ground Truth",
            "correct": false,
            "explanation": "Aunque es esencial para crear datos de entrenamiento etiquetados de alta calidad, no aborda directamente la equidad ni la transparencia. Se enfoca en la etiquetación de datos en lugar de la detección de sesgos."
          },
          {
            "text": "Amazon Comprehend",
            "correct": false,
            "explanation": "Este servicio de procesamiento de lenguaje natural (NLP) es principalmente útil para el análisis de sentimientos, el reconocimiento de entidades y el análisis de temas. No aborda específicamente las preocupaciones sobre la equidad o la transparencia en los modelos de machine learning."
          }
        ],
        "references": [
          "https://aws.amazon.com/sagemaker/clarify/",
          "https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-model-monitor-bias-drift.html"
        ]
      },
      {
        "id": 11,
        "text": "En el contexto de la inteligencia artificial generativa, una empresa está explorando el uso de modelos avanzados para abordar una variedad de tareas, desde la generación de texto hasta la clasificación de imágenes. Uno de los conceptos clave que la empresa debe entender es el modelo fundacional (FM), que desempeña un papel crucial en el desarrollo de aplicaciones de IA generativa. Este tipo de modelo se ha entrenado previamente en vastos conjuntos de datos y tiene la capacidad de realizar múltiples tareas. ¿Qué es un modelo fundacional (FM) en el contexto de la IA generativa?",
        "cat": "genai",
        "catLabel": "Fundamentos de IA Generativa",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q9-1.jpg"
        ],
        "options": [
          {
            "text": "Un marco teórico para entender cómo diferentes tipos de modelos aprenden representaciones",
            "correct": false,
            "explanation": "Un modelo fundacional no es un marco teórico; es una implementación práctica de un modelo grande entrenado en datos diversos."
          },
          {
            "text": "Una arquitectura básica que sirve como punto de partida para diseñar redes neuronales más complejas",
            "correct": false,
            "explanation": "Un modelo fundacional no es simplemente una arquitectura básica. Es un modelo preentrenado extenso que sirve como base para tareas específicas a través de la adaptación con datos adicionales."
          },
          {
            "text": "Un modelo grande y de propósito general que se entrena previamente en conjuntos de datos diversos y que se puede ajustar para tareas específicas",
            "correct": true,
            "explanation": "Un modelo fundacional (FM) es un modelo grande y de propósito general que se entrena previamente utilizando grandes volúmenes de datos variados. Estos modelos pueden realizar múltiples tareas y, lo que es más importante, pueden ser ajustados o refinados para tareas específicas utilizando conjuntos de datos más pequeños. Esto los convierte en una herramienta flexible y poderosa en la IA generativa, permitiendo que un solo modelo sirva para múltiples aplicaciones, desde la generación de texto hasta el reconocimiento de imágenes. Opciones incorrectas:"
          },
          {
            "text": "Un modelo específico para una tarea que se entrena en un dominio limitado, como finanzas o medicina, para servir como base en esa área",
            "correct": false,
            "explanation": "Los modelos fundacionales no son modelos específicos para una tarea en un dominio limitado, sino que están diseñados para ser generales y adaptables a través del ajuste fino para tareas específicas."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html"
        ]
      },
      {
        "id": 12,
        "text": "Una startup está desarrollando una nueva aplicación impulsada por IA utilizando Amazon Bedrock. Debido a patrones de uso impredecibles, quieren minimizar los costos iniciales y pagar solo por los recursos que consumen. ¿Cuál es el modelo de precios MÁS adecuado en Amazon Bedrock para cumplir con las necesidades de la empresa?",
        "cat": "fm_apps",
        "catLabel": "Aplicaciones de los modelos fundacionales",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q31-1.jpg"
        ],
        "options": [
          {
            "text": "Bajo demanda (On-Demand)",
            "correct": true,
            "explanation": "Es el modelo de precios flexible de Amazon Bedrock que permite a las empresas pagar solo por las unidades de cómputo que usan. Esto es ideal para aplicaciones con cargas de trabajo impredecibles, como las de una startup que busca reducir costos iniciales mientras escala capacidades de IA en función de necesidades reales. Con un modelo de pago por uso, Bedrock permite a las empresas concentrarse en la innovación y el desarrollo de aplicaciones sin preocuparse por la gestión de recursos operativos. Opciones incorrectas:"
          },
          {
            "text": "Provisioned Throughput",
            "correct": false,
            "explanation": "Está diseñado para cargas de trabajo consistentes y de gran tamaño, donde se requiere un rendimiento garantizado. Esto implica comprometerse con el uso por períodos de 1 o 6 meses, lo cual no es ideal para una startup que quiere evitar compromisos de largo plazo y solo pagar por lo que consume."
          },
          {
            "text": "Por lotes (Batch)",
            "correct": false,
            "explanation": "Está destinado principalmente a realizar una gran cantidad de predicciones al mismo tiempo. Aunque este modelo es más económico que On-Demand, está mejor diseñado para procesamiento por lotes y no para cargas de trabajo en tiempo real e impredecibles."
          },
          {
            "text": "Evaluación del modelo",
            "correct": false,
            "explanation": "Se cobra según las inferencias realizadas durante las pruebas. No es adecuado para manejar cargas de trabajo impredecibles en producción."
          }
        ],
        "references": [
          "https://aws.amazon.com/bedrock/pricing/"
        ]
      },
      {
        "id": 13,
        "text": "Una empresa de ciberseguridad está implementando un modelo de machine learning para analizar el tráfico de red en busca de amenazas de seguridad. La empresa debe proporcionar documentación detallada sobre el entrenamiento del modelo y garantizar que sus predicciones sean completamente explicables para auditorías. ¿Cuál de las siguientes combinaciones de características de Amazon SageMaker cumplirá con estos requisitos? (Selecciona dos).",
        "cat": "security",
        "catLabel": "Seguridad, normativa y gobernanza de las soluciones de IA",
        "multiSelect": true,
        "selectCount": 2,
        "images": [],
        "options": [
          {
            "text": "SageMaker Ground Truth Plus",
            "correct": false,
            "explanation": "Se utiliza solo para crear conjuntos de datos etiquetados de alta calidad mediante anotación humana para entrenar modelos de machine learning. Si bien es esencial para el proceso de etiquetado de datos, no proporciona características para la documentación del modelo o la explicabilidad, que son necesarias para auditorías y cumplimiento."
          },
          {
            "text": "SageMaker Autopilot",
            "correct": false,
            "explanation": "Esta función automatiza principalmente el proceso de entrenamiento y ajuste de modelos de machine learning, facilitando el despliegue rápido de modelos. Sin embargo, no aborda específicamente la necesidad de documentación exhaustiva del proceso de entrenamiento del modelo ni garantiza que las predicciones puedan explicarse completamente durante las auditorías."
          },
          {
            "text": "SageMaker Clarify",
            "correct": true,
            "explanation": "Está diseñado para ayudar a los practicantes de machine learning a abordar cuestiones de imparcialidad, sesgo y explicabilidad en sus modelos. Proporciona herramientas para detectar sesgo en los datos y modelos, y ofrece transparencia sobre cómo las diferentes características influyen en las predicciones. Además, genera informes de explicabilidad que destacan el razonamiento detrás de predicciones específicas, facilitando las auditorías y revisiones. Opciones incorrectas:"
          },
          {
            "text": "SageMaker Model Cards",
            "correct": true,
            "explanation": "Proporcionan un marco estructurado para documentar detalles esenciales sobre los modelos de machine learning en cada etapa de su desarrollo. Estas tarjetas incluyen información sobre el propósito del modelo, datos de entrenamiento, métricas de evaluación, consideraciones éticas y detalles de implementación. Ayudan a cumplir con los estándares de la industria en términos de transparencia y cumplimiento, lo que facilita las auditorías regulatorias y las evaluaciones internas."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-configure-processing-jobs.html#clarify-fairness-and-explainability",
          "https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html"
        ]
      },
      {
        "id": 14,
        "text": "Un experto financiero está construyendo un modelo para predecir el valor futuro de un portafolio basado en el rendimiento histórico, la asignación de activos y las tendencias del mercado. El modelo de predicción ayudará a tomar decisiones de inversión y a optimizar la estrategia de asignación del portafolio. ¿Qué técnica de aprendizaje automático debería considerarse para cumplir este objetivo?",
        "cat": "aiml",
        "catLabel": "Fundamentos de IA y ML",
        "multiSelect": false,
        "selectCount": 1,
        "images": [],
        "options": [
          {
            "text": "Reducción de dimensionalidad",
            "correct": false,
            "explanation": "Se usa principalmente para reducir el número de características en un conjunto de datos mientras se retiene la mayor cantidad de información posible. No se utiliza directamente para predicción de tareas."
          },
          {
            "text": "Densidad de probabilidad",
            "correct": false,
            "explanation": "Generalmente se utiliza para estimar la probabilidad de que una variable aleatoria caiga dentro de un rango de valores, no para predecir valores futuros basados en datos históricos."
          },
          {
            "text": "Detección de anomalías",
            "correct": false,
            "explanation": "Solo se usa para identificar valores atípicos o patrones inusuales en los datos, lo cual no es el objetivo principal de predecir valores continuos del portafolio."
          },
          {
            "text": "Regresión lineal",
            "correct": true,
            "explanation": "La regresión lineal es una técnica de aprendizaje supervisado utilizada para predecir valores continuos. Implica determinar la relación entre una variable dependiente y una o más variables independientes. Analizando los patrones en los datos históricos, los modelos de regresión pueden predecir resultados futuros, lo que lo hace ideal para tareas como la predicción del precio de acciones, valores inmobiliarios o rendimiento de portafolios. Opciones incorrectas:"
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/machine-learning/latest/dg/amazon-machine-learning-key-concepts.html",
          "https://aws.amazon.com/compare/the-difference-between-machine-learning-supervised-and-unsupervised/"
        ]
      },
      {
        "id": 15,
        "text": "Una empresa financiera ha recopilado 2 años de datos de transacciones diarias almacenados en un bucket de Amazon S3. Para mejorar la gestión de liquidez, la planificación financiera y la asignación de recursos, planean desarrollar un modelo de machine learning para predecir los volúmenes de transacciones para los próximos 90 días. ¿Qué tipo de algoritmo debería usar la empresa?",
        "cat": "fm_apps",
        "catLabel": "Aplicaciones de los modelos fundacionales",
        "multiSelect": false,
        "selectCount": 1,
        "images": [],
        "options": [
          {
            "text": "Algoritmo Object2Vec",
            "correct": false,
            "explanation": "Este algoritmo se usa principalmente para crear embeddings para objetos o entidades para que los objetos similares estén más cerca en el espacio vectorial. Esto es útil para tareas como recomendaciones o consultas basadas en similitudes, pero no aborda directamente la predicción en series temporales."
          },
          {
            "text": "Algoritmo de agrupamiento (Clustering algorithm)",
            "correct": false,
            "explanation": "Se usa para agrupar puntos de datos en clústeres. Este enfoque no es adecuado para tareas de pronóstico, ya que el objetivo aquí es predecir valores futuros en lugar de agrupar puntos de datos."
          },
          {
            "text": "Algoritmo de pronóstico (Forecasting algorithm)",
            "correct": true,
            "explanation": "Los algoritmos de pronóstico (Forecasting algorithms) son cruciales en el análisis predictivo, especialmente para predecir valores futuros basados en patrones históricos en datos de series temporales. AWS ofrece potentes capacidades de pronóstico a través de Amazon Forecast, un servicio completamente gestionado que utiliza machine learning para proporcionar predicciones precisas de series temporales. Esto ayuda a la empresa a tomar decisiones financieras informadas y a mejorar la planificación de recursos. Opciones incorrectas:"
          },
          {
            "text": "Algoritmo Linear Learner",
            "correct": false,
            "explanation": "Se utiliza típicamente para tareas que involucran encontrar una relación lineal entre características de entrada y variables objetivo, generalmente para tareas de regresión. Aunque puede usarse para datos de series temporales, puede no capturar eficazmente las dependencias temporales, lo que lo hace inadecuado para esta tarea específica."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html",
          "https://docs.aws.amazon.com/sagemaker/latest/dg/deepar.html"
        ]
      },
      {
        "id": 16,
        "text": "Una empresa de comercio electrónico ha implementado un modelo de IA para categorizar productos basados en imágenes subidas por los vendedores. La empresa debe determinar qué tan bien el modelo clasifica correctamente las categorías de los productos. ¿Cuál es la métrica más adecuada para evaluar la efectividad del modelo de clasificación de imágenes?",
        "cat": "aiml",
        "catLabel": "Fundamentos de IA y ML",
        "multiSelect": false,
        "selectCount": 1,
        "images": [],
        "options": [
          {
            "text": "Precision",
            "correct": false,
            "explanation": "Es una métrica que mide la proporción de predicciones positivas correctas. La precisión es particularmente valiosa en escenarios donde el costo de los falsos positivos es alto, como en la detección de spam o publicidad dirigida. Sin embargo, como el recall, la precisión solo proporciona una visión parcial del rendimiento del modelo, centrándose en la corrección de las predicciones positivas."
          },
          {
            "text": "Recall",
            "correct": false,
            "explanation": "Esta métrica solo mide la proporción de instancias positivas reales (verdaderos positivos) identificadas correctamente por el modelo. En la clasificación de imágenes, el objetivo es categorizar correctamente las imágenes en múltiples categorías. Enfocarse solo en el recall podría llevar a que el modelo priorice ciertas categorías, posiblemente pasando por alto la exactitud general."
          },
          {
            "text": "RMSE",
            "correct": false,
            "explanation": "Esta métrica se utiliza comúnmente para modelos de regresión y no de clasificación. El RMSE mide el promedio de la magnitud del error entre los valores previstos y los valores reales, lo que lo hace ideal para evaluar variables continuas. Dado que la clasificación de imágenes implica categorías discretas y no valores continuos, el RMSE no es aplicable en este escenario."
          },
          {
            "text": "Accuracy",
            "correct": true,
            "explanation": "Es una métrica comúnmente utilizada para evaluar el rendimiento de los modelos de clasificación en machine learning. Mide la proporción de instancias correctamente clasificadas respecto al total de instancias en el conjunto de datos, ofreciendo una visión general de cómo se desempeña el modelo en todas las clases. En clasificación de imágenes, la exactitud es particularmente útil cuando el conjunto de datos tiene una distribución balanceada de clases. Esta métrica ayuda a las organizaciones a evaluar la efectividad general del modelo en la identificación correcta de categorías a partir de las imágenes proporcionadas. Opciones incorrectas:"
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/machine-learning/latest/dg/binary-model-insights.html",
          "https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-accuracy-evaluation.html"
        ]
      },
      {
        "id": 17,
        "text": "Un especialista en IA está desarrollando un sistema para detectar vehículos en imágenes utilizando ML. El objetivo es crear etiquetas para un gran conjunto de datos de imágenes y utilizar Reinforcement Learning from Human Feedback (RLHF) para mejorar el modelo con el tiempo. ¿Cuál de las siguientes opciones sería la más adecuada para esta tarea?",
        "cat": "aiml",
        "catLabel": "Fundamentos de IA y ML",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q51-1.jpg"
        ],
        "options": [
          {
            "text": "Amazon Comprehend",
            "correct": false,
            "explanation": "Se usa exclusivamente para tareas de procesamiento de lenguaje natural (NLP) y no para etiquetado de imágenes."
          },
          {
            "text": "Amazon SageMaker built-in algorithms",
            "correct": false,
            "explanation": "Los algoritmos integrados de SageMaker están destinados al entrenamiento de modelos, no al etiquetado de datos. Estos algoritmos no abordan directamente las tareas de etiquetado."
          },
          {
            "text": "Amazon SageMaker Ground Truth",
            "correct": true,
            "explanation": "Amazon SageMaker Ground Truth proporciona una amplia gama de capacidades de \"human-in-the-loop\", lo que te permite aprovechar la retroalimentación humana a lo largo del proceso de aprendizaje automático para mejorar la precisión y relevancia del modelo. Con Ground Truth, puedes realizar varias tareas de \"human-in-the-loop\", incluidas la generación de datos, la anotación, la revisión de modelos, la personalización y la evaluación. Esto lo hace ideal para etiquetar imágenes y utilizar Reinforcement Learning from Human Feedback (RLHF). Opciones incorrectas:"
          },
          {
            "text": "Amazon Rekognition Custom Labels",
            "correct": false,
            "explanation": "Aunque Amazon Rekognition puede detectar objetos en imágenes, no está diseñado para la integración con Reinforcement Learning o retroalimentación humana. Es más adecuado para utilizar modelos preentrenados o entrenar etiquetas personalizadas con conjuntos de datos predefinidos."
          }
        ],
        "references": [
          "https://aws.amazon.com/sagemaker/groundtruth/",
          "https://docs.aws.amazon.com/sagemaker/latest/dg/sms-label-images.html"
        ]
      },
      {
        "id": 18,
        "text": "Un ingeniero de ML está evaluando el rendimiento de un sistema de modelo generativo utilizado para soporte al cliente. El ingeniero necesita identificar métricas clave de rendimiento y optimizar el modelo para mejorar la precisión y eficiencia de las respuestas. ¿Qué métrica comercial evaluaría mejor el rendimiento del modelo?",
        "cat": "aiml",
        "catLabel": "Fundamentos de IA y ML",
        "multiSelect": false,
        "selectCount": 1,
        "images": [],
        "options": [
          {
            "text": "Tiempo de respuesta promedio",
            "correct": false,
            "explanation": "El tiempo de respuesta promedio mide únicamente la rapidez con la que el sistema responde, pero no evalúa si las respuestas son útiles o correctas."
          },
          {
            "text": "Reseñas de clientes de AWS",
            "correct": false,
            "explanation": "Las reseñas de clientes de AWS no son una métrica directa ni cuantificable para evaluar el rendimiento específico de un modelo en un sistema de soporte al cliente."
          },
          {
            "text": "Satisfacción del cliente",
            "correct": true,
            "explanation": "La satisfacción del cliente es una métrica comercial clave que refleja tanto la eficiencia como la precisión desde la perspectiva del usuario final. Si las respuestas generadas por el modelo son útiles, rápidas y comprensibles, esto se verá reflejado en una mayor satisfacción. Es una métrica integral para evaluar el impacto del modelo en el soporte al cliente. Opciones incorrectas:"
          },
          {
            "text": "Tasa de conversión",
            "correct": false,
            "explanation": "La tasa de conversión está más relacionada con ventas y marketing, no con la calidad del soporte al cliente basado en IA."
          }
        ],
        "references": [
          "https://aws.amazon.com/blogs/apn/how-to-manage-your-customer-satisfaction-csat-data-in-apn-partner-central/"
        ]
      },
      {
        "id": 19,
        "text": "Una empresa de tecnología está explorando el uso de modelos de IA generativa, como los grandes modelos de lenguaje (LLMs), para diversas aplicaciones. Sin embargo, la empresa está comprometida a asegurar que estos modelos se implementen de acuerdo con los principios de IA responsable. ¿Cuáles de los siguientes son desafíos significativos de la IA generativa que la empresa debe considerar? (Selecciona tres).",
        "cat": "genai",
        "catLabel": "Fundamentos de IA Generativa",
        "multiSelect": true,
        "selectCount": 3,
        "images": [],
        "options": [
          {
            "text": "Toxicidad",
            "correct": true,
            "explanation": "Se refiere al riesgo de generar contenido que sea ofensivo, perturbador o inapropiado. Este desafío se ve agravado por la naturaleza subjetiva de definir qué constituye contenido tóxico, que puede variar según el contexto y la cultura. La detección y mitigación de un lenguaje sutilmente ofensivo aumenta la complejidad de gestionar la toxicidad en los resultados de IA generativa."
          },
          {
            "text": "Propiedad intelectual (PI)",
            "correct": true,
            "explanation": "Las preocupaciones sobre la propiedad intelectual surgen cuando los modelos de IA generativa producen contenido que imita o reproduce elementos de sus datos de entrenamiento. Esto puede llevar a problemas legales si el contenido generado se parece demasiado al material protegido por derechos de autor o lo reproduce de manera literal."
          },
          {
            "text": "Explicabilidad y transparencia",
            "correct": false,
            "explanation": "Aunque son relevantes para comprender cómo los modelos de IA toman decisiones, no son desafíos únicos específicos de la IA generativa."
          },
          {
            "text": "Recursos computacionales",
            "correct": false,
            "explanation": "Solo se refieren a los aspectos operativos del funcionamiento de los modelos de IA y no son un desafío ético o legal significativo generado por la IA generativa."
          },
          {
            "text": "Alucinaciones",
            "correct": true,
            "explanation": "Son afirmaciones o datos creados por modelos de IA generativa que pueden sonar plausibles pero son incorrectos. Los LLMs pueden generar patrones de texto que parecen verídicos pero no se basan en hechos, produciendo así información errónea. Opciones incorrectas:"
          },
          {
            "text": "Privacidad y seguridad",
            "correct": false,
            "explanation": "Aunque es un aspecto crucial de la IA responsable, es un problema más general que se aplica a todos los tipos de sistemas de IA, no solo a la IA generativa."
          }
        ],
        "references": [
          "https://aws.amazon.com/machine-learning/responsible-ai/"
        ]
      },
      {
        "id": 20,
        "text": "Una firma legal tiene una gran colección de documentos legales escaneados y archivos de casos en formato PDF. Quieren un sistema de búsqueda semántica que permita a los abogados encontrar fácilmente imágenes específicas y contenido relevante. El sistema debe analizar el contenido de las imágenes, extraer texto e identificar elementos clave para minimizar la intervención manual. ¿Qué servicios de AWS cubrirían de manera más eficiente las necesidades de la firma con el **mínimo** de gestión operativa? (Selecciona dos).",
        "cat": "fm_apps",
        "catLabel": "Aplicaciones de los modelos fundacionales",
        "multiSelect": true,
        "selectCount": 2,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q39-1.jpg"
        ],
        "options": [
          {
            "text": "Amazon Rekognition",
            "correct": true,
            "explanation": "Servicio de análisis de imágenes y videos que utiliza deep learning para identificar objetos, texto, personas y actividades dentro de imágenes. Puede ayudar a las empresas a analizar automáticamente imágenes incrustadas en documentos PDF, como firmas escaneadas, permitiendo a los empleados encontrar rápidamente imágenes relevantes según su contenido y contexto. El servicio es completamente administrado, lo que minimiza la sobrecarga operativa. Opciones incorrectas:"
          },
          {
            "text": "Amazon Textract",
            "correct": true,
            "explanation": "Servicio de machine learning diseñado para extraer automáticamente texto impreso, escritura a mano, formularios y tablas de documentos escaneados. Además, identifica la estructura de los documentos, como las claves y valores en formularios o las relaciones entre celdas en una tabla. Esto es especialmente útil para procesar archivos legales complejos, convirtiendo documentos escaneados en datos analizables sin necesidad de intervención manual."
          },
          {
            "text": "Amazon Kendra",
            "correct": false,
            "explanation": "Servicio de búsqueda empresarial diseñado para buscar en una amplia gama de formatos de documentos y fuentes de datos. Si bien Kendra puede integrarse en un sistema de búsqueda, no realiza análisis de imágenes ni extracción de texto de PDFs escaneados."
          },
          {
            "text": "Amazon Comprehend",
            "correct": false,
            "explanation": "Servicio de procesamiento de lenguaje natural (NLP) enfocado en analizar y extraer información de texto. Aunque es útil para procesar grandes volúmenes de datos textuales, no está diseñado para extraer texto de imágenes o documentos escaneados."
          },
          {
            "text": "Amazon Personalize",
            "correct": false,
            "explanation": "Servicio para construir sistemas de recomendación personalizados, basado en las preferencias y el comportamiento del usuario. No está diseñado para extraer ni analizar imágenes o documentos escaneados."
          }
        ],
        "references": [
          "https://aws.amazon.com/textract/faqs/"
        ]
      },
      {
        "id": 21,
        "text": "Una empresa de marketing quiere generar descripciones de productos personalizadas para el sitio web de un cliente de comercio electrónico. ¿Qué técnica de ingeniería de prompts cumplirá con estos requisitos con el menor esfuerzo operativo?",
        "cat": "fm_apps",
        "catLabel": "Aplicaciones de los modelos fundacionales",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q13-1.jpg"
        ],
        "options": [
          {
            "text": "Entrenamiento continuo en un dominio diferente",
            "correct": false,
            "explanation": "El entrenamiento continuo en un dominio diferente implica proporcionar datos no etiquetados a un modelo base para que el modelo pueda entrenarse en un dominio o tema específico. Este método no es el más efectivo para este caso y requiere un esfuerzo operativo adicional, lo que lo hace menos adecuado para generar descripciones de productos con el menor esfuerzo."
          },
          {
            "text": "Fine-tuning para optimizar las descripciones basadas en métricas de interacción del cliente",
            "correct": false,
            "explanation": "Fine-tuning implica optimizar los modelos de lenguaje para métricas específicas, como el compromiso del cliente. Sin embargo, esta técnica requiere más esfuerzo operativo y no es necesario para generar descripciones de productos, especialmente cuando se pueden lograr buenos resultados con few-shot prompting."
          },
          {
            "text": "Zero-shot prompting sin ningún ejemplo",
            "correct": false,
            "explanation": "Zero-shot prompting sin ejemplos es menos efectivo para tareas que requieren un estilo de redacción o formato específico. Sin ejemplos, el modelo podría tener dificultades para inferir el resultado deseado, lo que podría llevar a descripciones menos precisas o coherentes."
          },
          {
            "text": "Few-shot prompting con ejemplos de descripciones de productos bien redactadas",
            "correct": true,
            "explanation": "Few-shot prompting con ejemplos puede ayudar al modelo de lenguaje a aprender el estilo y formato deseado para las descripciones de productos. Esta técnica es adecuada para este escenario y requiere el menor esfuerzo operativo, ya que simplemente proporciona algunos ejemplos bien redactados para guiar al modelo. Opciones incorrectas:"
          }
        ],
        "references": [
          "https://www.promptingguide.ai/techniques/fewshot"
        ]
      },
      {
        "id": 22,
        "text": "Una empresa está construyendo una aplicación móvil para asistir a usuarios con discapacidad visual. La aplicación debe ser capaz de convertir texto impreso de imágenes en lenguaje hablado. Los usuarios pueden tomar fotos de documentos, notas manuscritas o etiquetas de productos, y la aplicación leerá el contenido en voz alta. La aplicación debe ser precisa, confiable y eficiente. ¿Qué servicios de AWS recomendarías para implementar esta funcionalidad? (Selecciona dos).",
        "cat": "fm_apps",
        "catLabel": "Aplicaciones de los modelos fundacionales",
        "multiSelect": true,
        "selectCount": 2,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q39-1.jpg",
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q38-2.jpg"
        ],
        "options": [
          {
            "text": "Amazon Textract",
            "correct": true,
            "explanation": "Servicio de reconocimiento óptico de caracteres (OCR) que extrae texto de imágenes escaneadas y archivos PDF. Puede manejar varios formatos, incluyendo texto impreso y escritura a mano. Al integrar Textract, la aplicación puede extraer con precisión el texto de las imágenes, lo que es crucial para proporcionar lenguaje hablado a los usuarios con discapacidad visual."
          },
          {
            "text": "Amazon Lex",
            "correct": false,
            "explanation": "Servicio diseñado para construir interfaces conversacionales (chatbots) utilizando comprensión del lenguaje natural (NLU). Aunque es potente para crear experiencias conversacionales, no maneja la extracción de texto de imágenes ni la conversión de texto a voz."
          },
          {
            "text": "Amazon Comprehend",
            "correct": false,
            "explanation": "Servicio de procesamiento de lenguaje natural (NLP) que analiza el texto para extraer entidades, frases y palabras clave. Aunque es útil para entender el contenido, no aborda directamente la conversión de texto a voz."
          },
          {
            "text": "Amazon Polly",
            "correct": true,
            "explanation": "Servicio de texto a voz que convierte texto en voz natural. Ofrece voces realistas y soporta múltiples idiomas. Al usar Polly, la aplicación puede generar lenguaje hablado a partir del texto extraído, haciéndolo accesible para los usuarios con discapacidad visual. Opciones incorrectas:"
          },
          {
            "text": "Amazon Rekognition",
            "correct": false,
            "explanation": "Se enfoca en el análisis de imágenes y videos, incluyendo reconocimiento facial y de objetos. No está especializado en la extracción de texto ni en la conversión de texto a voz, por lo que no es adecuado para este caso."
          }
        ],
        "references": [
          "https://aws.amazon.com/textract/"
        ]
      },
      {
        "id": 23,
        "text": "Una empresa de formación en línea utiliza un modelo fundacional (FM) para generar resúmenes de textos largos de su material de estudio. La empresa necesita evaluar la efectividad de los resúmenes generados. ¿Qué métrica se puede utilizar para evaluar el rendimiento del modelo fundacional en la tarea de resumen de texto?",
        "cat": "aiml",
        "catLabel": "Fundamentos de IA y ML",
        "multiSelect": false,
        "selectCount": 1,
        "images": [],
        "options": [
          {
            "text": "Balanced classification accuracy",
            "correct": false,
            "explanation": "Esta métrica se utiliza principalmente para evaluar el rendimiento de los modelos de clasificación, especialmente cuando hay un desequilibrio entre las clases. Mide la precisión del modelo considerando los verdaderos positivos y los verdaderos negativos, pero no es adecuada para la tarea de resumen de textos."
          },
          {
            "text": "Precision",
            "correct": false,
            "explanation": "Esta métrica suele usarse en clasificación y tareas de recuperación de información para medir la precisión de los elementos relevantes recuperados o clasificados correctamente. No mide directamente la calidad o efectividad en la tarea de resumen de textos."
          },
          {
            "text": "ROUGE-N",
            "correct": true,
            "explanation": "Es una métrica ampliamente reconocida para evaluar modelos de resumen de texto, incluyendo aquellos generados por modelos fundacionales. ROUGE se utiliza para medir la similitud entre el texto generado y el texto escrito por humanos, siendo un indicador clave de la calidad del resumen generado. Cuanto mayor sea la coincidencia entre ambos, mejor será el rendimiento del modelo. La métrica ROUGE-N es crucial cuando es necesario preservar información clave y patrones lingüísticos del texto original en el resumen. Opciones incorrectas:"
          },
          {
            "text": "Recall",
            "correct": false,
            "explanation": "Es una métrica utilizada en tareas de clasificación para medir la capacidad del modelo de identificar correctamente todas las instancias relevantes. En resumen de texto, el objetivo es generar resúmenes que capturen los puntos principales del texto de entrada, mientras que Recall se utiliza más para tareas de clasificación."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-foundation-model-evaluate-overview.html",
          "https://aws.amazon.com/blogs/machine-learning/evaluate-the-text-summarization-capabilities-of-llms-for-enhanced-decision-making-on-aws/"
        ]
      },
      {
        "id": 24,
        "text": "¿Qué factores pueden influir directamente en la latencia de la inferencia de un modelo de machine learning? (Selecciona dos).",
        "cat": "aiml",
        "catLabel": "Fundamentos de IA y ML",
        "multiSelect": true,
        "selectCount": 2,
        "images": [],
        "options": [
          {
            "text": "Longitud de la secuencia de salida generada",
            "correct": true,
            "explanation": "La longitud de la secuencia de salida también impacta directamente la latencia, ya que el modelo genera cada token de salida secuencialmente. Cuantos más tokens se deban generar, mayor será el tiempo total. Opciones incorrectas:"
          },
          {
            "text": "Complejidad de la arquitectura del modelo",
            "correct": false,
            "explanation": "La complejidad de la arquitectura (como el número de capas o parámetros) puede influir en la latencia, pero no de forma tan directa como las longitudes de entrada y salida. Además, este factor suele ser constante durante la inferencia y no varía entre solicitudes."
          },
          {
            "text": "Longitud de la secuencia de datos de entrada",
            "correct": true,
            "explanation": "La longitud de la secuencia de entrada influye directamente en la latencia, ya que el modelo debe procesar cada elemento de la secuencia. A mayor longitud, mayor procesamiento y mayor tiempo de inferencia."
          },
          {
            "text": "Configuración del parámetro de inferencia",
            "correct": false,
            "explanation": "Los parámetros de inferencia como temperatura, Top-K o Top-P afectan el comportamiento del modelo en cuanto a diversidad o aleatoriedad, pero no influyen significativamente en la velocidad con la que se procesa la inferencia."
          },
          {
            "text": "Tamaño del lote utilizado durante la inferencia",
            "correct": false,
            "explanation": "El tamaño del lote puede optimizar el rendimiento cuando se procesan múltiples entradas a la vez (batch inference), pero en inferencia en tiempo real, donde se suele enviar una solicitud por vez, el batch size no afecta directamente la latencia."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/bedrock/latest/userguide/inference.html",
          "https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html"
        ]
      },
      {
        "id": 25,
        "text": "Una empresa global de logística maneja una gran cantidad de facturas en formato digital, almacenadas principalmente en archivos PNG. Estas facturas contienen tanto texto impreso como texto manuscrito, como direcciones de envío, detalles de facturación y notas especiales. Para mejorar la eficiencia operativa y automatizar el procesamiento de estas facturas, la empresa necesita extraer y procesar el texto y la escritura manual de estos documentos de manera precisa. ¿Qué servicio de AWS debería utilizar la empresa para detectar y extraer automáticamente texto y escritura manuscrita de las facturas almacenadas en formato PNG?",
        "cat": "aiml",
        "catLabel": "Fundamentos de IA y ML",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q5-1.jpg"
        ],
        "options": [
          {
            "text": "Amazon Comprehend",
            "correct": false,
            "explanation": "Amazon Comprehend es un servicio de procesamiento de lenguaje natural (NLP) que se enfoca en extraer insights y relaciones a partir de datos textuales, pero requiere que el texto ya esté disponible como entrada directa. No puede procesar texto o escritura manuscrita desde imágenes."
          },
          {
            "text": "Amazon Polly",
            "correct": false,
            "explanation": "Amazon Polly es un servicio de conversión de texto a voz (TTS) que transforma texto en discurso natural. Aunque es útil para crear aplicaciones con capacidades de síntesis de voz, no puede detectar ni extraer texto o escritura de imágenes de facturas."
          },
          {
            "text": "Amazon Kendra",
            "correct": false,
            "explanation": "Amazon Kendra es un servicio de búsqueda inteligente que utiliza comprensión semántica y contextual para proporcionar respuestas relevantes a consultas de búsqueda. No está diseñado para extraer texto ni datos de imágenes como las facturas en formato PNG."
          },
          {
            "text": "Amazon Textract",
            "correct": true,
            "explanation": "Amazon Textract es un servicio completamente gestionado que permite detectar y extraer texto, incluidos datos manuscritos, de documentos escaneados, archivos PDF e imágenes como las facturas en formato PNG. Es ideal para el procesamiento de facturas, ya que puede identificar automáticamente información clave como direcciones de envío y detalles de facturación a partir de imágenes. Opciones incorrectas:"
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/textract/latest/dg/what-is.html"
        ]
      },
      {
        "id": 26,
        "text": "Una empresa está utilizando un modelo fundacional (FM) para la generación de texto y quiere evaluar el rendimiento de este modelo en términos de la calidad del texto generado. Es crucial que la empresa utilice una técnica o métrica adecuada para medir con precisión la efectividad del modelo en generar textos que sean coherentes, relevantes y fieles a la intención original. ¿Qué técnica o métrica debe utilizar la empresa para evaluar el rendimiento de un modelo fundacional en la generación de texto?",
        "cat": "fm_apps",
        "catLabel": "Aplicaciones de los modelos fundacionales",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q11-1.jpg"
        ],
        "options": [
          {
            "text": "Fine-Tuning",
            "correct": false,
            "explanation": "El Fine-Tuning es un proceso mediante el cual se personaliza un modelo fundacional entrenándolo en un conjunto de datos específico del dominio o de la empresa. Aunque es una técnica útil para mejorar el rendimiento de un modelo, no es una métrica para evaluar la calidad del texto generado."
          },
          {
            "text": "Aprendizaje por refuerzo",
            "correct": false,
            "explanation": "El aprendizaje por refuerzo es una técnica de entrenamiento en la que un modelo aprende a tomar decisiones secuenciales para maximizar una recompensa acumulativa. Aunque es poderoso para ciertos tipos de problemas, no es una métrica adecuada para evaluar la calidad del texto generado por un modelo fundacional."
          },
          {
            "text": "F1-score",
            "correct": false,
            "explanation": "El F1-score es una métrica de evaluación utilizada principalmente en problemas de clasificación binaria, combinando precisión y exhaustividad. Aunque es útil para medir la precisión de un modelo en tareas de clasificación, no es adecuada para evaluar la calidad de la generación de texto."
          },
          {
            "text": "ROUGE",
            "correct": true,
            "explanation": "ROUGE (Recall-Oriented Understudy for Gisting Evaluation) es una métrica ampliamente utilizada para evaluar la calidad de la generación de texto, especialmente en tareas como la generación de resúmenes y la traducción automática. ROUGE compara la salida generada por el modelo con una referencia humana y mide la coincidencia en términos de n-gramas, lo que permite evaluar qué tan bien el modelo genera texto que coincide con la expectativa o estándar de calidad. Esta métrica es particularmente útil para evaluar modelos fundacionales en tareas de generación de texto. Opciones incorrectas:"
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/sagemaker/latest/dg/algorithms-text-generation.html"
        ]
      },
      {
        "id": 27,
        "text": "Una compañía de seguros recibe muchos formularios de reclamos en papel de los asegurados. Estos formularios contienen información escrita a mano e impresa sobre accidentes, tratamientos médicos y daños a la propiedad. La empresa desea automatizar la extracción de datos relevantes de estos documentos escaneados para agilizar su flujo de trabajo de procesamiento de reclamos. ¿Qué servicio de AWS deberías recomendar para lograr este objetivo?",
        "cat": "fm_apps",
        "catLabel": "Aplicaciones de los modelos fundacionales",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q34-1.jpg"
        ],
        "options": [
          {
            "text": "Amazon Rekognition",
            "correct": false,
            "explanation": "Se utiliza principalmente para el análisis de imágenes y videos, como el reconocimiento facial, la detección de objetos y la moderación de contenido. No se enfoca en la extracción de texto de documentos. Rekognition no es adecuado para este caso, ya que trata más sobre análisis visual."
          },
          {
            "text": "Amazon Textract",
            "correct": true,
            "explanation": "Amazon Textract es un servicio avanzado de aprendizaje automático (ML) que extrae automáticamente texto, escritura a mano, elementos de diseño y datos de documentos escaneados. Supera el reconocimiento óptico de caracteres (OCR) tradicional al identificar, comprender y extraer datos específicos de documentos, lo que hace que sea ideal para automatizar la extracción de datos de formularios de reclamos escaneados. Opciones incorrectas:"
          },
          {
            "text": "Amazon Comprehend",
            "correct": false,
            "explanation": "Es un servicio de procesamiento de lenguaje natural (NLP) que analiza texto para obtener entidades clave, frases y sentimientos. No extrae directamente datos estructurados de documentos escaneados. Aunque es útil para entender el contenido del texto, no satisface el requisito específico de extraer datos estructurados."
          },
          {
            "text": "Amazon Polly",
            "correct": false,
            "explanation": "Está diseñado como un servicio de texto a voz que convierte texto en voz realista. No puede extraer texto de documentos escaneados. Polly hace lo opuesto a lo que se necesita en este escenario: genera voz a partir del texto, en lugar de extraer texto de imágenes."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/textract/"
        ]
      },
      {
        "id": 28,
        "text": "¿Cuál de las siguientes opciones proporciona soluciones preconstruidas y modelos fundacionales para acelerar proyectos de IA y aprendizaje automático?",
        "cat": "fm_apps",
        "catLabel": "Aplicaciones de los modelos fundacionales",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q26-1.jpg"
        ],
        "options": [
          {
            "text": "Amazon SageMaker Autopilot",
            "correct": false,
            "explanation": "Automatiza principalmente el proceso de creación, entrenamiento y ajuste de modelos de aprendizaje automático. Está diseñado para facilitar la creación de modelos de ML sin necesidad de ser un experto, pero no proporciona específicamente soluciones preconstruidas y modelos como lo hace SageMaker JumpStart."
          },
          {
            "text": "PartyRock (Amazon Bedrock Playground)",
            "correct": false,
            "explanation": "Es un entorno práctico, basado en Amazon Bedrock, para crear aplicaciones de IA sin necesidad de escribir código o tener una cuenta de AWS. Sin embargo, no se enfoca específicamente en proporcionar soluciones preconstruidas y modelos para acelerar proyectos de IA y ML como lo hace JumpStart."
          },
          {
            "text": "Amazon SageMaker JumpStart",
            "correct": true,
            "explanation": "Amazon SageMaker JumpStart es un centro de aprendizaje automático (ML) diseñado para acelerar tu jornada de ML. Con SageMaker JumpStart, puedes evaluar, comparar y seleccionar modelos de aprendizaje automático preentrenados basados en métricas de calidad y confiabilidad predefinidas. Estos modelos pueden personalizarse para tu caso de uso específico con tus propios datos y pueden implementarse fácilmente en producción utilizando la interfaz de usuario o el SDK. Además, puedes compartir modelos y cuadernos dentro de tu organización para agilizar la creación y el despliegue de modelos. Opciones incorrectas:"
          },
          {
            "text": "Amazon SageMaker Studio",
            "correct": false,
            "explanation": "Aunque Amazon SageMaker Studio es un entorno de desarrollo integrado (IDE) completo para aprendizaje automático, no se enfoca principalmente en proporcionar soluciones preconstruidas y modelos. En cambio, está más orientado al proceso de desarrollo de modelos."
          }
        ],
        "references": [
          "https://aws.amazon.com/sagemaker/jumpstart/"
        ]
      },
      {
        "id": 29,
        "text": "Una organización financiera está planeando integrar servicios de inteligencia artificial generativa (IA generativa) en su flujo de trabajo para mejorar el soporte al cliente con capacidades de procesamiento de lenguaje natural. La compañía está interesada en asegurarse de que los modelos de IA sean transparentes, justos y responsables. Están buscando recursos para entender las implicaciones éticas y el uso responsable de los servicios de IA. ¿Qué recurso o servicio de AWS ayuda a entender el uso ético y responsable de los modelos de IA generativa?",
        "cat": "responsible_ai",
        "catLabel": "Directrices para una IA Responsable",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q24-1.jpg"
        ],
        "options": [
          {
            "text": "Amazon Polly",
            "correct": false,
            "explanation": "Servicio que convierte texto en habla realista, pero no se centra en la ética de la IA."
          },
          {
            "text": "AWS AI Service Cards",
            "correct": true,
            "explanation": "AWS AI Service Cards proporcionan información importante sobre las consideraciones éticas, la transparencia y el uso previsto de los servicios de IA de AWS. Su objetivo es ayudar a los usuarios a comprender el uso ético de los servicios de IA, asegurando que los modelos sean justos, transparentes y responsables. Estas tarjetas proporcionan información sobre los posibles riesgos y las mejores formas de usar los servicios de IA de manera responsable. Opciones incorrectas:"
          },
          {
            "text": "AWS Marketplace",
            "correct": false,
            "explanation": "Tienda en línea donde los clientes pueden encontrar, comprar e inmediatamente comenzar a usar software y servicios que se ejecutan en AWS, pero no aborda las implicaciones éticas ni el uso responsable de los servicios de IA."
          },
          {
            "text": "Amazon Comprehend",
            "correct": false,
            "explanation": "Servicio de procesamiento de lenguaje natural (NLP) que utiliza machine learning para encontrar ideas y relaciones en los textos, pero no se centra en el uso ético y responsable de la IA."
          }
        ],
        "references": [
          "https://aws.amazon.com/blogs/machine-learning/introducing-aws-ai-service-cards-a-new-resource-to-enhance-transparency-and-advance-responsible-ai/"
        ]
      },
      {
        "id": 30,
        "text": "Una empresa tecnológica está desarrollando una solución avanzada en AWS para potenciar su base de conocimientos con capacidades de búsqueda semántica. Este proyecto incluye la integración con Amazon Bedrock para aprovechar los modelos de IA de última generación, que ayudarán a mejorar la precisión y relevancia de los resultados de búsqueda. Dado que Amazon Bedrock es un servicio crítico para la operación y seguridad de los datos sensibles de la empresa, es esencial implementar un control estricto sobre quién puede acceder y utilizar este servicio. La empresa quiere asegurarse de que solo los usuarios y roles con la autorización adecuada puedan interactuar con Amazon Bedrock, minimizando riesgos de acceso no autorizado. ¿Qué servicio de AWS debería utilizar la empresa para implementar estos controles de acceso de manera eficaz?",
        "cat": "security",
        "catLabel": "Seguridad, normativa y gobernanza de las soluciones de IA",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q3-1.jpg"
        ],
        "options": [
          {
            "text": "Amazon Macie",
            "correct": false,
            "explanation": "Amazon Macie es un servicio especializado en la detección, clasificación y protección de datos sensibles mediante machine learning, pero no ofrece capacidades para gestionar directamente el acceso a servicios como Amazon Bedrock."
          },
          {
            "text": "AWS Config",
            "correct": false,
            "explanation": "AWS Config se utiliza principalmente para la evaluación, auditoría y monitoreo de configuraciones de recursos en AWS. Aunque es útil para mantener conformidad y monitorear cambios, no ofrece control sobre el acceso de usuarios a servicios como Amazon Bedrock."
          },
          {
            "text": "AWS Identity and Access Management (IAM)",
            "correct": true,
            "explanation": "AWS Identity and Access Management (IAM) es el servicio fundamental para gestionar la seguridad y el acceso a los recursos en AWS. Con IAM, la empresa puede definir políticas detalladas que regulan quién tiene acceso a Amazon Bedrock, en qué condiciones y con qué nivel de permisos. Esto asegura que solo los usuarios y roles específicamente autorizados puedan interactuar con Amazon Bedrock, lo cual es crucial para mantener la seguridad y conformidad en un entorno de datos sensibles. Opciones incorrectas:"
          },
          {
            "text": "Amazon Rekognition",
            "correct": false,
            "explanation": "Amazon Rekognition es un servicio enfocado en el análisis de imágenes y videos, proporcionando funcionalidades como la detección de objetos y reconocimiento facial. Aunque es potente para tareas de análisis visual, no es relevante para la gestión de acceso a servicios de AWS."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/es_es/IAM/latest/UserGuide/introduction.html"
        ]
      },
      {
        "id": 31,
        "text": "Un especialista en IA implementa modelos de IA para optimizar las operaciones de red de una empresa. Para cumplir con los estándares de la industria, el especialista debe documentar los detalles de entrenamiento y rendimiento de los modelos para fines de auditoría. ¿Qué servicio de AWS puede ayudar a la empresa a cumplir con este requisito?",
        "cat": "security",
        "catLabel": "Seguridad, normativa y gobernanza de las soluciones de IA",
        "multiSelect": false,
        "selectCount": 1,
        "images": [],
        "options": [
          {
            "text": "Amazon SageMaker Model Monitor",
            "correct": false,
            "explanation": "Su enfoque principal es detectar y alertar sobre desviaciones en la calidad de los modelos de machine learning desplegados en entornos de producción. Aunque ayuda a mantener el rendimiento de los modelos en producción, no cumple con la necesidad de documentar los detalles de entrenamiento y rendimiento para fines de auditoría."
          },
          {
            "text": "AWS CloudTrail",
            "correct": false,
            "explanation": "Se utiliza principalmente para registrar y monitorear la actividad de las API dentro de tu cuenta de AWS. Aunque es útil para auditar el acceso a las API, no proporciona funcionalidad específica para documentar modelos de machine learning o detalles de rendimiento."
          },
          {
            "text": "Amazon SageMaker Model Cards",
            "correct": true,
            "explanation": "Amazon SageMaker Model Cards ayuda a gestionar y documentar el ciclo de vida de tus modelos de machine learning. Esta función de Amazon SageMaker te permite crear y almacenar tarjetas de modelos que contienen detalles cruciales sobre tus modelos, como los datos de entrenamiento, métricas de rendimiento y casos de uso previstos. Al consolidar esta información, las tarjetas de modelos de SageMaker ofrecen un método estructurado y estandarizado para documentar el desarrollo de modelos, facilitando la colaboración y revisión de la información entre equipos. Esta documentación es valiosa para garantizar el cumplimiento de las normativas de la industria y la transparencia en los flujos de trabajo de IA. Opciones incorrectas:"
          },
          {
            "text": "AWS Config",
            "correct": false,
            "explanation": "Servicio que ayuda a evaluar, auditar y evaluar las configuraciones de los recursos de AWS. No está diseñado para documentar modelos de machine learning ni detalles de rendimiento."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html",
          "https://docs.aws.amazon.com/sagemaker/latest/dg/whatis-features.html"
        ]
      },
      {
        "id": 32,
        "text": "Un desarrollador de IA está trabajando en un sistema de tutoría impulsado por IA con un modelo fundacional (FM) para ayudar a los estudiantes a entender conceptos científicos complejos. El sistema tiene como objetivo proporcionar respuestas correctas y explicar claramente los principios subyacentes. El desarrollador está explorando técnicas para mejorar el rendimiento del modelo. ¿Qué técnica de ingeniería de prompts mejorará MÁS la capacidad del modelo fundacional para proporcionar explicaciones paso a paso de conceptos científicos complejos?",
        "cat": "genai",
        "catLabel": "Fundamentos de IA Generativa",
        "multiSelect": false,
        "selectCount": 1,
        "images": [],
        "options": [
          {
            "text": "Directional-stimulus",
            "correct": false,
            "explanation": "Implica guiar las respuestas del modelo en función de pistas o direcciones específicas. Esta técnica puede influir en la dirección de las respuestas, pero no mejora específicamente la capacidad del modelo para proporcionar explicaciones estructuradas paso a paso."
          },
          {
            "text": "Chain-of-thought",
            "correct": true,
            "explanation": "También llamado Cadena de Pensamiento, es una técnica que mejora la capacidad de los modelos fundacionales para ofrecer explicaciones detalladas paso a paso al representar explícitamente el proceso de razonamiento necesario para resolver un problema. Este método descompone tareas complejas en pasos más pequeños y manejables, permitiendo que el modelo genere respuestas más precisas y estructuradas. Al priorizar el razonamiento intermedio y la progresión lógica, Chain-of-Thought asegura que cada parte de la solución se entienda y articule completamente, lo que lo hace especialmente beneficioso en entornos educativos donde se necesitan explicaciones detalladas. Opciones incorrectas:"
          },
          {
            "text": "Complexity-based",
            "correct": false,
            "explanation": "Esta técnica se enfoca en adaptar el enfoque del modelo según la complejidad de la tarea o problema. Puede ser útil para ajustar la estrategia del modelo, pero no aborda inherentemente la necesidad de proporcionar explicaciones paso a paso."
          },
          {
            "text": "Tree-of-thought",
            "correct": false,
            "explanation": "Es una técnica que organiza la información en una estructura jerárquica, como un árbol de decisiones. Tree of Thought ayuda a visualizar relaciones y caminos, en lugar de descomponer problemas complejos en pasos secuenciales."
          }
        ],
        "references": [
          "https://aws.amazon.com/what-is/prompt-engineering/",
          "https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-prompt-engineering.html"
        ]
      },
      {
        "id": 33,
        "text": "Una startup de IA utiliza modelos de IA generativa para crear contenido personalizado. La empresa desarrolla y despliega estos modelos de IA utilizando Amazon SageMaker, Amazon Bedrock y Amazon Q Business. Recientemente, han surgido preocupaciones sobre el acceso no autorizado a datos de entrenamiento sensibles y parámetros de modelos. ¿Cuál de los siguientes servicios ayudará a la startup a auditar la actividad de las API relacionadas con sus cargas de trabajo de IA generativa?",
        "cat": "security",
        "catLabel": "Seguridad, normativa y gobernanza de las soluciones de IA",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q45-1.jpg"
        ],
        "options": [
          {
            "text": "AWS Config",
            "correct": false,
            "explanation": "Proporciona una vista detallada de los recursos de AWS y sus configuraciones. Ayuda con el cumplimiento y la gobernanza al registrar cambios en las configuraciones de los recursos. Sin embargo, no audita directamente la actividad de las API como lo hace CloudTrail."
          },
          {
            "text": "AWS CloudTrail",
            "correct": true,
            "explanation": "Servicio proporcionado por AWS que te permite auditar, gobernar y asegurar el cumplimiento dentro de tu cuenta de AWS. Los eventos se registran en CloudTrail para capturar acciones realizadas por usuarios, roles o servicios de AWS. Esto incluye actividades llevadas a cabo en la consola de AWS, la CLI de AWS y las API de AWS. CloudTrail se activa automáticamente en tu cuenta de AWS y cualquier actividad dentro de tu cuenta se registra como un evento de CloudTrail. Al habilitar CloudTrail, la startup puede monitorear y auditar la actividad de las API relacionadas con sus cargas de trabajo de IA, abordando las preocupaciones sobre el acceso no autorizado a datos sensibles y parámetros de modelos. Opciones incorrectas:"
          },
          {
            "text": "Amazon Inspector",
            "correct": false,
            "explanation": "Está diseñado principalmente como un servicio de evaluación de seguridad que ayuda a identificar vulnerabilidades en aplicaciones e instancias. No rastrea específicamente la actividad de las API ni proporciona capacidades de auditoría como lo hace CloudTrail."
          },
          {
            "text": "Amazon GuardDuty",
            "correct": false,
            "explanation": "Es solo un servicio de detección de amenazas que analiza registros y tráfico de red para detectar comportamientos maliciosos o sospechosos. Aunque es útil para monitorear la seguridad, no se enfoca en auditar la actividad de las API."
          }
        ],
        "references": [
          "https://aws.amazon.com/cloudtrail/",
          "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html"
        ]
      },
      {
        "id": 34,
        "text": "Un científico de datos observa que un modelo tiene una alta precisión en los datos de entrenamiento, pero muestra una precisión baja en los datos de prueba. ¿Cuál es la causa más probable de estos resultados?",
        "cat": "responsible_ai",
        "catLabel": "Directrices para una IA Responsable",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q17-1.jpg"
        ],
        "options": [
          {
            "text": "No se ha entrenado el modelo el tiempo suficiente",
            "correct": false,
            "explanation": "Si el modelo no se hubiera entrenado el tiempo suficiente, se esperaría que la precisión fuera baja tanto en los datos de entrenamiento como en los de prueba, ya que el modelo no habría tenido suficiente oportunidad para aprender las características relevantes de los datos."
          },
          {
            "text": "Demasiados datos de entrenamiento",
            "correct": false,
            "explanation": "Tener demasiados datos de entrenamiento por sí solo no limita la precisión de un modelo. De hecho, en muchos casos, más datos de entrenamiento pueden mejorar la capacidad del modelo para generalizar. Sin embargo, esto no explica por qué un modelo tendría alta precisión en los datos de entrenamiento pero baja precisión en los datos de prueba."
          },
          {
            "text": "Sobreajuste",
            "correct": true,
            "explanation": "El sobreajuste (overfitting) ocurre cuando un modelo aprende demasiado de los detalles y el ruido en los datos de entrenamiento, al punto de que se adapta excesivamente a esos datos y pierde la capacidad de generalizar a datos nuevos. Esto explica por qué el modelo tiene una alta precisión en los datos de entrenamiento, pero una baja precisión en los datos de prueba, ya que el modelo no puede aplicar correctamente lo aprendido a nuevas situaciones o datos no vistos anteriormente. Opciones incorrectas:"
          },
          {
            "text": "Subajuste",
            "correct": false,
            "explanation": "El subajuste (underfitting) ocurre cuando un modelo no es capaz de capturar las relaciones subyacentes en los datos de entrenamiento. Esto resultaría en una precisión baja tanto en los datos de entrenamiento como en los de prueba, ya que el modelo no ha aprendido adecuadamente de los datos."
          }
        ],
        "references": [
          "https://aws.amazon.com/es/what-is/overfitting/",
          "https://docs.aws.amazon.com/es_es/machine-learning/latest/dg/model-fit-underfitting-vs-overfitting.html"
        ]
      },
      {
        "id": 35,
        "text": "Una empresa está planeando construir un chatbot para analizar reseñas de clientes utilizando modelos de lenguaje a gran escala (LLMs). Están evaluando varios LLMs para encontrar el que prediga mejor si una reseña es positiva, negativa o neutral, mientras asegura que se elimine la información sensible antes de procesar los datos. Este paso es crucial para prevenir consecuencias no deseadas y cumplir con las regulaciones de privacidad. ¿Qué combinación de pasos cumplirá con los requisitos? (Selecciona dos).",
        "cat": "responsible_ai",
        "catLabel": "Directrices para una IA Responsable",
        "multiSelect": true,
        "selectCount": 2,
        "images": [],
        "options": [
          {
            "text": "Amazon Comprehend",
            "correct": false,
            "explanation": "Este servicio se centra principalmente en analizar datos textuales y extraer conocimientos. No realiza evaluación de modelos ni eliminación automática de información sensible."
          },
          {
            "text": "Amazon Bedrock Guardrails",
            "correct": true,
            "explanation": "Te permite establecer protecciones para tus aplicaciones de IA, alineando con casos de uso específicos y pautas de IA responsable. Puedes personalizar múltiples guardrails para escenarios diversos y aplicarlos a diferentes modelos fundacionales (FMs), asegurando una experiencia de usuario uniforme y seguridad en términos de privacidad y seguridad."
          },
          {
            "text": "Amazon SageMaker Ground Truth",
            "correct": false,
            "explanation": "Se usa principalmente para crear conjuntos de datos etiquetados de alta calidad a través de flujos de trabajo de revisión humana. No realiza directamente evaluación de modelos ni elimina información sensible automáticamente."
          },
          {
            "text": "Amazon Lex",
            "correct": false,
            "explanation": "Permite la comprensión del lenguaje natural y la gestión de conversaciones, pero no maneja directamente el análisis de sentimientos ni preocupaciones sobre la privacidad."
          },
          {
            "text": "Amazon Bedrock Model Evaluation",
            "correct": true,
            "explanation": "Te permite evaluar, comparar y elegir los modelos fundacionales más adecuados para tus necesidades. Esto incluye la evaluación automática y la evaluación humana, proporcionando métricas como precisión, robustez y toxicidad, lo que ayuda a seleccionar el mejor modelo para predecir si una reseña es positiva, negativa o neutral. Opciones incorrectas:"
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"
        ]
      },
      {
        "id": 36,
        "text": "Una empresa de comercio electrónico está desarrollando un modelo utilizando Amazon SageMaker para predecir la probabilidad de que un producto sea devuelto después de la compra. La empresa posee un conjunto de datos etiquetado que contiene categorías de productos, precios, reseñas de clientes y estado de devolución, almacenado en un bucket de Amazon S3. ¿Qué enfoque de aprendizaje automático es más apropiado para esta tarea?",
        "cat": "aiml",
        "catLabel": "Fundamentos de IA y ML",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q43-1.jpg"
        ],
        "options": [
          {
            "text": "Aprendizaje no supervisado (Unsupervised learning)",
            "correct": false,
            "explanation": "Este método se utiliza solo para analizar y agrupar datos sin etiquetas. Se aplica en escenarios donde el objetivo es descubrir patrones ocultos o agrupar datos, como la segmentación de clientes o la detección de anomalías. En este caso, el objetivo es predecir un resultado basado en un conjunto de datos etiquetado, lo que hace que el aprendizaje supervisado sea el enfoque adecuado."
          },
          {
            "text": "Transfer learning",
            "correct": false,
            "explanation": "Generalmente se usa cuando ya tienes un modelo preentrenado que puede ser ajustado para una tarea específica. En este escenario, el enfoque está en utilizar un conjunto de datos etiquetado para predecir un resultado específico, lo que hace que el aprendizaje supervisado sea una mejor opción."
          },
          {
            "text": "Aprendizaje supervisado (Supervised learning)",
            "correct": true,
            "explanation": "El aprendizaje supervisado (Supervised learning) es un enfoque de machine learning donde un modelo se entrena en un conjunto de datos etiquetado. Esto significa que el conjunto de datos contiene pares de entrada-salida donde se conoce el resultado deseado. La principal ventaja del aprendizaje supervisado es que permite al modelo aprender la relación entre las características de entrada (como las categorías de productos y precios) y la salida (como el estado de devolución), lo que permite una predicción precisa de eventos futuros. Opciones incorrectas:"
          },
          {
            "text": "Few-shot learning",
            "correct": false,
            "explanation": "Este método de aprendizaje solo se usa cuando los datos disponibles para el entrenamiento son limitados. Permite que los modelos generalicen a partir de solo unos pocos ejemplos, lo que no es el caso en este escenario."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/sagemaker/latest/dg/algorithms-choose.html#algorithms-choose-supervised-learning"
        ]
      },
      {
        "id": 37,
        "text": "Una compañía financiera utiliza Amazon Bedrock para desplegar un chatbot basado en IA generativa que ofrece asesoría financiera personalizada y responde consultas relacionadas. La compañía necesita una solución para mantener el control sobre el contenido generado por el chatbot, asegurando precisión, idoneidad y cumplimiento de los estándares regulatorios. ¿Qué servicio de AWS ayudará a garantizar que los consejos del chatbot cumplan con los estándares de precisión y cumplimiento normativo?",
        "cat": "responsible_ai",
        "catLabel": "Directrices para una IA Responsable",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q65-1.jpg"
        ],
        "options": [
          {
            "text": "Amazon Comprehend",
            "correct": false,
            "explanation": "Es un servicio de procesamiento de lenguaje natural (NLP) que se utiliza principalmente para análisis de texto, detección de entidades, análisis de sentimientos y detección de lenguaje. Aunque Amazon Comprehend es útil para entender y extraer información de textos, no ofrece la funcionalidad necesaria para aplicar reglas o directrices sobre el contenido generado por los modelos de IA."
          },
          {
            "text": "Amazon Bedrock Agents",
            "correct": false,
            "explanation": "Si bien es útil para construir y configurar agentes autónomos que interactúan con usuarios y realizan acciones orquestadas, Amazon Bedrock Agents no se enfoca específicamente en garantizar la precisión y el cumplimiento regulatorio del contenido generado por los modelos de IA. Su función principal es facilitar la integración de los modelos fundacionales con fuentes de datos y aplicaciones, en lugar de imponer controles o directrices sobre la salida de esos modelos."
          },
          {
            "text": "Amazon Lex",
            "correct": false,
            "explanation": "Este servicio simplemente permite crear interfaces conversacionales, como chatbots, que pueden interactuar con los usuarios a través de texto y voz. Si bien Amazon Lex permite la creación de chatbots, no ofrece características específicas para controlar la precisión, idoneidad o cumplimiento regulatorio del contenido generado por los modelos de IA utilizados dentro de los chatbots de la compañía."
          },
          {
            "text": "Guardrails for Amazon Bedrock",
            "correct": true,
            "explanation": "Es una característica esencial diseñada para asegurar que el contenido generado por los modelos de IA se adhiera a directrices específicas y cumpla con los estándares regulatorios. Esta capacidad es crucial en industrias como las finanzas, donde la precisión y adecuación del contenido generado son críticas. Guardrails permite a las organizaciones establecer límites en torno a las salidas generadas por IA, asegurando que las respuestas del chatbot sean relevantes, precisas y conformes a las políticas de la compañía y regulaciones de la industria. Implementando estos guardrails, las empresas pueden mitigar riesgos asociados con consejos incorrectos o no conformes, manteniendo la confianza de los usuarios y evitando posibles problemas legales. Opciones incorrectas:"
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"
        ]
      },
      {
        "id": 38,
        "text": "Una empresa tiene una aplicación frontend en contenedores para su aplicación de IA. La empresa debe implementar una solución para evaluar la postura de seguridad de su entorno en AWS. La solución debe identificar posibles vulnerabilidades de seguridad en instancias de Amazon EC2 y en los repositorios de Amazon Elastic Container Registry (Amazon ECR) utilizados por la aplicación. Además, la solución debe proporcionar recomendaciones para la remediación. ¿Qué servicio de AWS cumplirá con estos requisitos?",
        "cat": "responsible_ai",
        "catLabel": "Directrices para una IA Responsable",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q20-1.jpg"
        ],
        "options": [
          {
            "text": "AWS CloudTrail",
            "correct": false,
            "explanation": "AWS CloudTrail se utiliza para registrar las acciones realizadas por un usuario, rol o servicio en tu cuenta. Aunque CloudTrail es útil para rastrear la actividad del usuario y los cambios realizados en los recursos de AWS, no evalúa directamente la postura de seguridad de tu entorno ni identifica vulnerabilidades de seguridad."
          },
          {
            "text": "AWS Artifact",
            "correct": false,
            "explanation": "AWS Artifact ofrece acceso bajo demanda a documentos de seguridad y cumplimiento, pero no identifica vulnerabilidades de seguridad en instancias de EC2 y repositorios de Amazon ECR. Tampoco proporciona recomendaciones para la remediación."
          },
          {
            "text": "AWS Config",
            "correct": false,
            "explanation": "AWS Config proporciona una vista detallada de las configuraciones de tus recursos de AWS y ayuda a rastrear cambios en la configuración. Sin embargo, AWS Config no evalúa vulnerabilidades de seguridad ni realiza comprobaciones de cumplimiento contra regulaciones o estándares específicos. Su enfoque principal es el monitoreo de configuraciones de recursos para garantizar que cumplan con las configuraciones deseadas y las mejores prácticas."
          },
          {
            "text": "Amazon Inspector",
            "correct": true,
            "explanation": "Amazon Inspector es un servicio de gestión de vulnerabilidades que escanea continuamente las cargas de trabajo en busca de vulnerabilidades de software y exposiciones de red no intencionadas. Amazon Inspector evalúa la seguridad y el cumplimiento de tus recursos de AWS realizando comprobaciones automatizadas basadas en las mejores prácticas y vulnerabilidades comunes. Amazon Inspector puede evaluar instancias de EC2 y repositorios de Amazon ECR, proporcionando hallazgos detallados y recomendaciones para la remediación. Es la solución ideal para mantener un entorno de AWS seguro y conforme. Opciones incorrectas:"
          }
        ],
        "references": [
          "https://aws.amazon.com/es/inspector/",
          "https://docs.aws.amazon.com/es_es/inspector/latest/user/what-is-inspector.html"
        ]
      },
      {
        "id": 39,
        "text": "Una empresa utiliza Amazon SageMaker para sus modelos de aprendizaje automático (ML). La empresa desea implementar una solución que permita a los propietarios de modelos crear un registro detallado de la información del modelo. Esta información debe incluir los usos previstos, calificaciones de riesgos, detalles de entrenamiento y resultados de evaluación. ¿Qué característica de SageMaker cumplirá con estos requisitos?",
        "cat": "responsible_ai",
        "catLabel": "Directrices para una IA Responsable",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q19-1.jpg"
        ],
        "options": [
          {
            "text": "SageMaker Model Dashboard",
            "correct": false,
            "explanation": "SageMaker Model Dashboard es un lugar central para ver, buscar y explorar todos los modelos en una cuenta de AWS. Proporciona información sobre el despliegue, uso, seguimiento de rendimiento y monitoreo de modelos. Sin embargo, no permite crear un registro detallado de la información del modelo, como calificaciones de riesgos, detalles de entrenamiento y resultados de evaluación."
          },
          {
            "text": "SageMaker Model Monitor",
            "correct": false,
            "explanation": "SageMaker Model Monitor monitorea la calidad de los modelos de ML y los datos en producción. No se puede utilizar para crear un registro de la información esencial del modelo, como calificaciones de riesgos, detalles de entrenamiento y resultados de evaluación."
          },
          {
            "text": "SageMaker Model Cards",
            "correct": true,
            "explanation": "SageMaker Model Cards permite crear registros y documentar detalles sobre los modelos de ML en un solo lugar. Esta característica soporta el desarrollo de modelos de manera transparente y explicable al proporcionar documentación completa e inmutable de la información esencial del modelo, incluyendo los usos previstos, calificaciones de riesgos, detalles de entrenamiento y resultados de evaluación. Opciones incorrectas:"
          },
          {
            "text": "SageMaker Role Manager",
            "correct": false,
            "explanation": "SageMaker Role Manager se utiliza para definir permisos de usuario para actividades de ML. No permite crear un registro de la información esencial del modelo."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html"
        ]
      },
      {
        "id": 40,
        "text": "Una empresa está considerando implementar modelos de IA generativa para mejorar su sistema de soporte al cliente. Sin embargo, el equipo técnico está preocupado por las posibles desventajas y limitaciones de usar tales modelos en producción. Necesitan identificar los desafíos específicos que pueden surgir al trabajar con IA generativa. ¿Cuáles son algunos de los desafíos comunes o inconvenientes asociados con el uso de modelos de IA generativa? (Selecciona dos).",
        "cat": "genai",
        "catLabel": "Fundamentos de IA Generativa",
        "multiSelect": true,
        "selectCount": 2,
        "images": [],
        "options": [
          {
            "text": "Detección de fraudes",
            "correct": false,
            "explanation": "Generalmente se asocia con modelos de clasificación o detección de anomalías, no con IA generativa. La IA generativa se enfoca en crear contenido nuevo en lugar de identificar actividades fraudulentas."
          },
          {
            "text": "Corte de conocimiento",
            "correct": true,
            "explanation": "El corte de conocimiento se refiere a la limitación de los modelos de IA generativa que están entrenados con datos disponibles hasta un momento específico. No tienen acceso a datos en tiempo real ni actualizaciones, lo que puede hacer que proporcionen información desactualizada, particularmente en entornos dinámicos donde la información actualizada es crucial. Opciones incorrectas:"
          },
          {
            "text": "Personalización",
            "correct": false,
            "explanation": "Se refiere a la capacidad de adaptar el contenido o las experiencias basadas en preferencias individuales. Aunque es una funcionalidad de la IA, no es una limitación o inconveniente de la tecnología en sí misma."
          },
          {
            "text": "Bajo Recall",
            "correct": false,
            "explanation": "Es solo una métrica de rendimiento utilizada generalmente en modelos de clasificación, donde el modelo falla al identificar instancias relevantes. Los modelos de IA generativa no se evalúan basándose en el recall, por lo que no es una limitación relevante para la IA generativa."
          },
          {
            "text": "Alucinaciones",
            "correct": true,
            "explanation": "Las alucinaciones son una preocupación importante cuando se usan modelos de IA generativa. Estos modelos pueden generar respuestas que parecen precisas pero que son fácticamente incorrectas o completamente inventadas. Este fenómeno puede llevar a que se proporcione información engañosa o falsa a los clientes."
          }
        ],
        "references": [
          "https://aws.amazon.com/what-is/retrieval-augmented-generation/"
        ]
      },
      {
        "id": 41,
        "text": "Un equipo de ciencia de datos está buscando mejorar el rendimiento de un modelo de machine learning que ha desarrollado. El equipo ha identificado dos áreas clave que podrían contribuir a este objetivo: aumentar la cantidad de variables en el conjunto de datos de entrenamiento y ajustar el comportamiento del algoritmo utilizado. Estas mejoras son cruciales para optimizar la precisión y la eficacia del modelo en su tarea de predicción. ¿Qué combinación de pasos en la pipeline de ML debería seguir el equipo para cumplir con estos requisitos? (Selecciona dos).",
        "cat": "aiml",
        "catLabel": "Fundamentos de IA y ML",
        "multiSelect": true,
        "selectCount": 2,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q10-1.jpg",
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q10-2.jpg"
        ],
        "options": [
          {
            "text": "Monitoreo del modelo",
            "correct": false,
            "explanation": "El monitoreo del modelo es un componente del ciclo de vida de ML que captura y compara datos durante la implementación del modelo. Aunque es importante para detectar problemas de calidad de datos y drift del modelo, no está relacionado con el ajuste de variables ni con la modificación del algoritmo."
          },
          {
            "text": "Evaluación del modelo",
            "correct": false,
            "explanation": "La evaluación del modelo es un paso que se realiza después del entrenamiento para medir el rendimiento del modelo utilizando métricas específicas. Aunque es crucial para entender cómo funciona el modelo, no ayuda a aumentar el número de variables en el conjunto de datos ni a modificar el comportamiento del algoritmo."
          },
          {
            "text": "Recopilación de datos",
            "correct": false,
            "explanation": "La recopilación de datos es un paso donde se etiqueta, ingiere y agrega datos para el entrenamiento del modelo. Aunque es un paso esencial en el desarrollo de un modelo de ML, no directamente aumenta el número de variables ni ajusta el comportamiento del algoritmo."
          },
          {
            "text": "Ajuste de hiperparámetros",
            "correct": true,
            "explanation": "El ajuste de hiperparámetros es una técnica que permite modificar el comportamiento de un algoritmo de machine learning. Ajustando los hiperparámetros, el equipo puede optimizar cómo el modelo aprende y predice, lo que puede mejorar significativamente el rendimiento del modelo. Este paso es esencial para afinar el proceso de entrenamiento y adaptar el modelo a las necesidades específicas del caso de uso."
          },
          {
            "text": "Ingeniería de características",
            "correct": true,
            "explanation": "La ingeniería de características es el proceso de selección y transformación de variables para crear un modelo predictivo más eficaz. Este paso incluye la creación, transformación, extracción y selección de características, lo que aumenta la cantidad y calidad de las variables en el conjunto de datos de entrenamiento. Mejorar las características utilizadas en el modelo es fundamental para incrementar su capacidad predictiva y rendimiento general. Opciones incorrectas:"
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/sagemaker/latest/dg/model-tuning.html"
        ]
      },
      {
        "id": 42,
        "text": "Un científico de datos está evaluando un modelo de machine learning y nota que funciona bien con los datos de entrenamiento, pero mal con los datos de prueba. ¿Qué combinación de sesgo y varianza es la que probablemente está causando este problema?",
        "cat": "aiml",
        "catLabel": "Fundamentos de IA y ML",
        "multiSelect": false,
        "selectCount": 1,
        "images": [],
        "options": [
          {
            "text": "Bajo sesgo pero mayor variabilidad",
            "correct": true,
            "explanation": "En este caso, el científico de datos observa que el modelo funciona bien en los datos de entrenamiento, pero mal en los datos de prueba. Esta combinación de bajo sesgo y alta varianza sugiere que el modelo es demasiado sensible a los patrones únicos de los datos de entrenamiento. Como resultado, no logra generalizarse correctamente con datos nuevos, lo que es un indicador clásico de sobreajuste (overfitting). Opciones incorrectas:"
          },
          {
            "text": "Aumento de sesgo y menor varianza",
            "correct": false,
            "explanation": "Eesta combinación sugiere subajuste (underfitting), donde el modelo no logra capturar la complejidad de los datos, lo que conduce a un mal rendimiento tanto en los datos de entrenamiento como en los de prueba."
          },
          {
            "text": "Bajo sesgo y baja varianza",
            "correct": false,
            "explanation": "La baja varianza no indica necesariamente sobreajuste. Esta combinación generalmente significa que el modelo ajusta bien los datos de entrenamiento y generaliza bien en los datos de prueba. El sobreajuste está más relacionado con una varianza consistentemente alta, lo que provoca una mala generalización en datos nuevos."
          },
          {
            "text": "Aumento de sesgo y mayor variabilidad",
            "correct": false,
            "explanation": "Esta combinación también representa subajuste (underfitting) debido al alto sesgo, lo que genera un mal rendimiento general del modelo."
          }
        ],
        "references": [
          "https://aws.amazon.com/what-is/overfitting/",
          "https://docs.aws.amazon.com/machine-learning/latest/dg/model-fit-underfitting-vs-overfitting.html"
        ]
      },
      {
        "id": 43,
        "text": "Una empresa está llevando a cabo un proceso de fine-tuning basado en instrucciones para mejorar el rendimiento de un modelo base preentrenado en tareas específicas de un dominio. El equipo está buscando el formato de datos más adecuado para este tipo de ajuste fino. ¿Cuál de los siguientes es un formato de datos válido para realizar un fine-tuning basado en instrucciones?",
        "cat": "fm_apps",
        "catLabel": "Aplicaciones de los modelos fundacionales",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q18-1.jpg"
        ],
        "options": [
          {
            "text": "Imágenes etiquetadas con categorías",
            "correct": false,
            "explanation": "Imágenes etiquetadas con categorías no se ajustan al formato necesario de pares de prompt-respuesta que se requiere para el fine-tuning basado en instrucciones. Este tipo de datos es más adecuado para tareas de clasificación de imágenes."
          },
          {
            "text": "Pares de texto de prompt-respuesta",
            "correct": true,
            "explanation": "El fine-tuning basado en instrucciones mejora el rendimiento de un modelo base preentrenado en tareas específicas del dominio al utilizar ejemplos etiquetados que están formateados como pares de prompt-respuesta. Estos pares de texto están diseñados para guiar al modelo en cómo debe responder a instrucciones específicas, lo que permite que el modelo aprenda a generar respuestas alineadas con las expectativas del dominio particular. Opciones incorrectas:"
          },
          {
            "text": "Listas de reproducción curadas con música recomendada",
            "correct": false,
            "explanation": "Las listas de reproducción curadas con música recomendada tampoco cumplen con el formato de pares de prompt-respuesta. Este tipo de datos es más relevante para modelos de recomendación, no para el ajuste fino basado en instrucciones."
          },
          {
            "text": "Archivos de audio con transcripciones",
            "correct": false,
            "explanation": "Los archivos de audio con transcripciones no se ajustan al formato de prompt-respuesta necesario para el fine-tuning basado en instrucciones. Aunque las transcripciones pueden ser útiles en otros contextos de procesamiento de lenguaje natural, no son adecuadas para este tipo de ajuste fino."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/es_es/bedrock/latest/userguide/model-customization-prepare.html",
          "https://aws.amazon.com/es/blogs/aws-spanish/explorando-amazon-bedrock/"
        ]
      },
      {
        "id": 44,
        "text": "Una empresa está desarrollando una aplicación para resumir documentos utilizando un gran modelo de lenguaje (LLM). Utilizarán embeddings para ayudar al modelo a comprender y procesar la información de manera más efectiva. ¿Por qué son importantes los embeddings para que el LLM genere resúmenes precisos?",
        "cat": "genai",
        "catLabel": "Fundamentos de IA Generativa",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q48-1.jpg"
        ],
        "options": [
          {
            "text": "Aseguran que las palabras de salida estén en su forma base o raíz",
            "correct": false,
            "explanation": "La normalización de palabras a sus formas base o raíz es un proceso diferente conocido como stemming o lematización. Los embeddings no se centran en la forma base de las palabras, sino en capturar el significado semántico de las palabras o frases."
          },
          {
            "text": "Dividen el texto en unidades más pequeñas, como palabras o subpalabras, para ayudar en la traducción.",
            "correct": false,
            "explanation": "Esto describe la tokenización, que prepara el texto para su procesamiento posterior. Los embeddings, por otro lado, se enfocan en convertir el texto en vectores numéricos que capturan su significado semántico."
          },
          {
            "text": "Convierten el contenido textual en vectores numéricos que representan el significado semántico",
            "correct": true,
            "explanation": "Los embeddings convierten el contenido textual en representaciones numéricas que capturan el significado semántico. Estas representaciones matemáticas ayudan a los modelos de machine learning y sistemas de inteligencia artificial a comprender relaciones complejas entre palabras y conceptos, lo que es crucial para generar resúmenes precisos y coherentes. Opciones incorrectas:"
          },
          {
            "text": "Comprimen todo el documento en un único archivo de texto",
            "correct": false,
            "explanation": "Los embeddings no comprimen texto, sino que lo convierten en vectores numéricos. La compresión se refiere a reducir el tamaño del archivo sin preservar necesariamente el significado semántico."
          }
        ],
        "references": [
          "https://aws.amazon.com/what-is/embeddings-in-machine-learning/",
          "https://aws.amazon.com/what-is/vector-databases/"
        ]
      },
      {
        "id": 45,
        "text": "Una agencia de viajes necesita ajustar un modelo fundacional (FM) para asistir a los clientes proporcionando consejos detallados sobre la planificación de viajes, manejando conversaciones de múltiples turnos sobre preferencias de viaje y haciendo recomendaciones personalizadas. ¿Qué método satisfará estos requisitos?",
        "cat": "genai",
        "catLabel": "Fundamentos de IA Generativa",
        "multiSelect": false,
        "selectCount": 1,
        "images": [],
        "options": [
          {
            "text": "Domain adaptation fine-tuning",
            "correct": false,
            "explanation": "Este enfoque utiliza un modelo preentrenado para mejorar su rendimiento solo en un dominio específico. Este método se centra más en hacer que el modelo sea más competente en un dominio en particular en lugar de mejorar su capacidad para manejar conversaciones complejas o adaptarse a las preferencias individuales, que son requisitos críticos para la agencia de viajes."
          },
          {
            "text": "Zero-shot learning",
            "correct": false,
            "explanation": "Este enfoque permite que un modelo realice una tarea sin haber sido entrenado específicamente para dicha tarea. Aunque funciona para tareas generales, no es suficiente para tareas que requieren un entendimiento contextual profundo y la interacción, como las conversaciones de múltiples turnos o las recomendaciones personalizadas de viajes."
          },
          {
            "text": "Few-shot learning",
            "correct": false,
            "explanation": "Está diseñado principalmente para entrenar un modelo con datos limitados. Esta opción no aborda las complejidades de las conversaciones de múltiples turnos o recomendaciones personalizadas detalladas."
          },
          {
            "text": "Instruction-based fine-tuning",
            "correct": true,
            "explanation": "Es un proceso en el que un modelo fundacional preentrenado se entrena con instrucciones específicas para realizar tareas particulares. Este enfoque ayuda a que el modelo comprenda y siga directrices detalladas, generando respuestas más precisas y relevantes. Al ajustar el modelo con instrucciones específicas, este se vuelve capaz de manejar tareas complejas, como conversaciones de múltiples turnos o generar recomendaciones personalizadas basadas en las preferencias del usuario. Este método utiliza el conocimiento existente del modelo mientras mejora su capacidad para ejecutar tareas específicas, lo que lo hace ideal para escenarios que requieren respuestas detalladas y orientadas a tareas. Opciones incorrectas:"
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-foundation-models-fine-tuning-instruction-based.html",
          "https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-fine-tune.html"
        ]
      },
      {
        "id": 46,
        "text": "Una empresa está desarrollando una aplicación educativa que presenta a los usuarios problemas de matemáticas que implican operaciones aritméticas básicas. Por ejemplo 'Calcular la multiplicación de los siguientes números: 10, 864, y 21341.' ¿Qué enfoque proporciona la solución más eficiente mientras minimiza la complejidad?",
        "cat": "aiml",
        "catLabel": "Fundamentos de IA y ML",
        "multiSelect": false,
        "selectCount": 1,
        "images": [],
        "options": [
          {
            "text": "Aplicar un modelo de regresión lineal para predecir soluciones a problemas aritméticos",
            "correct": false,
            "explanation": "La regresión lineal es una técnica de aprendizaje automático que se usa típicamente para predecir valores numéricos continuos en función de características de entrada. No es adecuada para resolver problemas aritméticos simples que pueden resolverse directamente utilizando reglas predefinidas."
          },
          {
            "text": "Escribir código que use reglas predefinidas para calcular soluciones basadas en principios aritméticos",
            "correct": true,
            "explanation": "Es el enfoque más eficiente y sencillo para operaciones aritméticas básicas, ya que calcula directamente el resultado basado en principios aritméticos. Este método requiere recursos mínimos de cálculo y evita la complejidad de usar modelos de aprendizaje automático, que no son necesarios para problemas aritméticos simples. Opciones incorrectas:"
          },
          {
            "text": "Construir una red neuronal para aprender operaciones aritméticas a partir de un gran conjunto de datos",
            "correct": false,
            "explanation": "Una red neuronal es un enfoque complejo y que consume muchos recursos, innecesario para resolver problemas aritméticos simples. Las redes neuronales son más adecuadas para aprender patrones complejos en grandes conjuntos de datos, pero son excesivas para operaciones aritméticas simples que pueden resolverse usando reglas predefinidas."
          },
          {
            "text": "Entrenar un modelo de aprendizaje supervisado en un conjunto de datos de problemas aritméticos y soluciones",
            "correct": false,
            "explanation": "Involucra usar un modelo de aprendizaje automático supervisado, que requiere un conjunto de datos etiquetados de problemas y sus soluciones correspondientes. Aunque este enfoque podría funcionar, es mucho más complejo y consume más recursos que simplemente usar reglas predefinidas y principios aritméticos."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/machine-learning/latest/dg/when-to-use-machine-learning.html"
        ]
      },
      {
        "id": 47,
        "text": "Un proyecto involucra la generación de descripciones de productos para un sitio web de comercio electrónico utilizando un conjunto de datos de descripciones de productos existentes en el sitio. ¿Qué enfoque de ajuste fino es más apropiado para adaptar un modelo de lenguaje preentrenado para generar descripciones de productos similares a las del conjunto de datos?",
        "cat": "genai",
        "catLabel": "Fundamentos de IA Generativa",
        "multiSelect": false,
        "selectCount": 1,
        "images": [],
        "options": [
          {
            "text": "Instruction-based fine-tuning",
            "correct": false,
            "explanation": "Está diseñado principalmente para mejorar el rendimiento de un modelo en tareas específicas mediante la provisión de ejemplos etiquetados en forma de pares de solicitud-respuesta. Este enfoque es más adecuado para tareas que requieren instrucciones específicas y respuestas, en lugar de la generación de texto específico del dominio."
          },
          {
            "text": "Unsupervised pre-training",
            "correct": false,
            "explanation": "Implica entrenar un modelo en un conjunto de datos grande y general sin etiquetas específicas o tareas específicas. No se aplica directamente para ajustar un modelo en texto específico del dominio, como descripciones de productos, donde el ajuste fino con adaptación de dominio es más apropiado."
          },
          {
            "text": "Domain adaptation fine-tuning",
            "correct": true,
            "explanation": "Es adecuado para adaptar un modelo de lenguaje preentrenado a tipos específicos de texto, como las descripciones de productos de un sitio de comercio electrónico. Este enfoque ajusta la comprensión del modelo de lenguaje específico del dominio y la terminología utilizando el conjunto de datos de descripciones de productos existentes. Opciones incorrectas:"
          },
          {
            "text": "Transfer learning",
            "correct": false,
            "explanation": "Generalmente se refiere a la aplicación de un modelo preentrenado a una tarea diferente pero relacionada, pero no implica específicamente el ajuste fino con datos específicos del dominio. Mientras que el aprendizaje por transferencia es un concepto general, el ajuste fino con adaptación de dominio es más adecuado para el caso descrito."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-foundation-models-fine-tuning-domain-adaptation.html",
          "https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-foundation-models-fine-tuning.html"
        ]
      },
      {
        "id": 48,
        "text": "Una empresa está probando un modelo para generar resúmenes de texto y necesita una métrica para evaluar qué tan bien coinciden los resúmenes generados con las referencias creadas por humanos. ¿Qué métrica es la más apropiada para esta evaluación?",
        "cat": "fm_apps",
        "catLabel": "Aplicaciones de los modelos fundacionales",
        "multiSelect": false,
        "selectCount": 1,
        "images": [],
        "options": [
          {
            "text": "ROUGE (Recall-Oriented Understudy for Gisting Evaluation)",
            "correct": true,
            "explanation": "ROUGE (Recall-Oriented Understudy for Gisting Evaluation) es la métrica más adecuada para evaluar resúmenes de texto porque está diseñada específicamente para este propósito. Mide el solapamiento de n-gramas, secuencias de palabras y pares de palabras entre los resúmenes generados y los resúmenes de referencia, lo que la hace ideal para determinar la efectividad de un modelo de resumen. Opciones incorrectas:"
          },
          {
            "text": "Cross-Entropy Loss",
            "correct": false,
            "explanation": "Utilizada principalmente durante la fase de entrenamiento para medir la diferencia entre las salidas predichas y las salidas reales. No es una métrica de evaluación para la calidad de los resúmenes generados, sino una herramienta para optimizar el rendimiento del modelo durante el entrenamiento."
          },
          {
            "text": "F1 Score",
            "correct": false,
            "explanation": "Utilizada para evaluar modelos de clasificación, equilibrando precisión y recall. Si bien es útil para muchos modelos de machine learning, no está diseñada específicamente para evaluar la calidad de los resúmenes de texto."
          },
          {
            "text": "BLEU (Bilingual Evaluation Understudy)",
            "correct": false,
            "explanation": "Se usa más comúnmente para evaluar la traducción automática de máquinas que para la tarea de resumen. BLEU mide la precisión comparando los n-gramas del texto generado con la referencia, pero es menos adecuada que ROUGE para tareas centradas en el recall, como el resumen."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-llms-finetuning-metrics.html"
        ]
      },
      {
        "id": 49,
        "text": "Una empresa de viajes desea utilizar un modelo de IA generativa preentrenado para crear imágenes de fondo que se utilizarán en materiales de marketing. La empresa no cuenta con experiencia en aprendizaje automático (ML) y, además, no quiere personalizar ni alojar el modelo de ML por sí misma. ¿Qué servicio de AWS cumplirá con estos requisitos?",
        "cat": "genai",
        "catLabel": "Fundamentos de IA Generativa",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q16-1.jpg",
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q16-2.jpg"
        ],
        "options": [
          {
            "text": "Amazon Personalize",
            "correct": false,
            "explanation": "Amazon Personalize es un servicio de ML totalmente gestionado que se enfoca en recomendaciones, como resultados de búsqueda o segmentos de usuarios basados en datos de interacción. Puedes utilizar Amazon Personalize para orientar una campaña de marketing. Por ejemplo, Amazon Personalize puede recomendar segmentos de usuarios que tienen más probabilidades de responder a una promoción. Sin embargo, Amazon Personalize no es un servicio de generación de imágenes."
          },
          {
            "text": "Amazon Rekognition",
            "correct": false,
            "explanation": "Amazon Rekognition es un servicio de IA totalmente gestionado que utiliza aprendizaje profundo para analizar imágenes y videos. Amazon Rekognition puede realizar tareas de detección de objetos. Sin embargo, Amazon Rekognition no modifica ni genera nuevas imágenes."
          },
          {
            "text": "Amazon SageMaker JumpStart",
            "correct": false,
            "explanation": "Amazon SageMaker JumpStart es una característica de SageMaker que incluye modelos base preentrenados (FMs) para la generación de imágenes. Puedes alojar los modelos en SageMaker sin necesidad de entrenamiento adicional. Sin embargo, esta solución requiere que configures y monitorees el endpoint de producción que aloja el modelo de ML."
          },
          {
            "text": "Amazon Bedrock",
            "correct": true,
            "explanation": "Amazon Bedrock es un servicio totalmente gestionado que proporciona una API unificada para acceder a modelos base populares (FMs). Amazon Bedrock soporta modelos de generación de imágenes de proveedores como Stability AI o AWS. Con Amazon Bedrock, puedes consumir modelos base a través de una API unificada sin necesidad de entrenar, alojar o gestionar modelos de ML. Esta es la solución más adecuada para una empresa que no desea entrenar ni gestionar modelos de ML para la generación de imágenes. Opciones incorrectas:"
          }
        ],
        "references": [
          "https://aws.amazon.com/es/bedrock",
          "https://docs.aws.amazon.com/es_es/bedrock/latest/userguide/what-is-bedrock.html"
        ]
      },
      {
        "id": 50,
        "text": "Una institución financiera debe asegurarse de que los datos transferidos desde Amazon S3 a una instancia de Amazon SageMaker para entrenar modelos de machine learning no salgan de la red de AWS, cumpliendo con estrictos requisitos de conformidad. ¿Qué servicio de AWS cumplirá con este requisito de manera más eficaz?",
        "cat": "security",
        "catLabel": "Seguridad, normativa y gobernanza de las soluciones de IA",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q53-1.jpg"
        ],
        "options": [
          {
            "text": "Amazon S3 Transfer Acceleration",
            "correct": false,
            "explanation": "Amazon S3 Transfer Acceleration es una función que permite transferencias de datos rápidas, seguras y confiables a través de largas distancias entre clientes y buckets de Amazon S3. Sin embargo, no garantiza que los datos permanezcan dentro de la red de AWS durante la transferencia, ya que podrían atravesar la red pública."
          },
          {
            "text": "Amazon CloudFront Distribution",
            "correct": false,
            "explanation": "Amazon CloudFront es una red de entrega de contenido (CDN) que generalmente almacena y distribuye contenido desde Amazon S3 u otros orígenes a ubicaciones en los bordes del mundo. Aunque puede mejorar el rendimiento y reducir la latencia en las transferencias de datos, no garantiza que los datos permanezcan dentro de la red de AWS durante la transferencia, ya que estos pueden atravesar internet para llegar a los puntos de borde."
          },
          {
            "text": "Amazon S3 Access Point",
            "correct": false,
            "explanation": "Amazon S3 Access Point es un punto de acceso de red que proporciona una forma personalizada y segura de acceder a buckets de S3. Aunque puede ayudar a gestionar el control de acceso y la protección de datos, no aborda directamente el requisito de mantener los datos dentro de la red de AWS durante la transferencia."
          },
          {
            "text": "Amazon VPC Gateway Endpoint",
            "correct": true,
            "explanation": "Servicio altamente disponible y escalable de AWS que te permite conectar de manera privada tu Amazon Virtual Private Cloud (VPC) a servicios compatibles de AWS, como Amazon S3 y Amazon SageMaker, sin la necesidad de una puerta de enlace a internet, dispositivo NAT o conexión VPN. Usando un VPC Gateway Endpoint, la transferencia de datos entre Amazon S3 y las instancias de Amazon SageMaker dentro de la misma región de AWS ocurre completamente dentro de la red de AWS, asegurando que los datos no salgan de la red y cumplan con los requisitos de conformidad. Opciones incorrectas:"
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html",
          "https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html"
        ]
      },
      {
        "id": 51,
        "text": "Una empresa tecnológica está desarrollando un asistente virtual basado en un modelo de lenguaje grande (LLM) y busca mejorar la consistencia y precisión de las respuestas generadas por el modelo. Para lograr esto, desean que el modelo pueda acceder a fuentes de conocimiento externas y actualizadas que no forman parte de su conjunto de datos de entrenamiento original. Sin embargo, la empresa cuenta con recursos limitados y necesita implementar una solución que requiera el menor esfuerzo de desarrollo posible. ¿Cuál de las siguientes técnicas permitiría cumplir con estos requisitos de la manera más eficiente?",
        "cat": "fm_apps",
        "catLabel": "Aplicaciones de los modelos fundacionales",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q15-1.jpg"
        ],
        "options": [
          {
            "text": "Fine-tuning",
            "correct": false,
            "explanation": "Fine-tuning es el proceso de ajustar y refinar un LLM preentrenado utilizando un conjunto de datos adicional y específico. Aunque el fine-tuning puede adaptar el modelo para casos de uso más especializados, requiere un esfuerzo significativo de desarrollo, ya que implica un nuevo ciclo de entrenamiento del modelo."
          },
          {
            "text": "In-context learning",
            "correct": false,
            "explanation": "In-context learning consiste en proporcionar ejemplos específicos durante la fase de inferencia para que el LLM genere respuestas alineadas con un formato o resultado deseado. Sin embargo, esta técnica no permite que el modelo acceda a información externa ni mejora la consistencia y precisión de las respuestas mediante el uso de fuentes de conocimiento adicionales."
          },
          {
            "text": "Retrieval augmented generation (RAG)",
            "correct": true,
            "explanation": "La generación aumentada por recuperación (RAG) es una técnica que mejora la calidad y consistencia de las respuestas de un LLM al permitirle acceder y utilizar una base de conocimiento externa que no está incluida en los datos de entrenamiento original. Esta técnica es especialmente útil cuando se necesitan respuestas precisas basadas en información actualizada y externa. La implementación de RAG requiere un esfuerzo de desarrollo mínimo, ya que permite utilizar la base de conocimiento externa sin necesidad de modificar o entrenar nuevamente el modelo. Opciones incorrectas:"
          },
          {
            "text": "Ingeniería de prompts",
            "correct": false,
            "explanation": "La ingeniería de prompts se enfoca en diseñar y optimizar las entradas para el LLM con el fin de obtener respuestas específicas. Aunque es útil para guiar la generación de respuestas, esta técnica no habilita el acceso a información externa y no es la mejor opción para mejorar la consistencia y precisión de las respuestas a través del uso de fuentes de conocimiento externas."
          }
        ],
        "references": [
          "https://aws.amazon.com/es/what-is/retrieval-augmented-generation/"
        ]
      },
      {
        "id": 52,
        "text": "Una empresa está implementando un sistema de inferencia utilizando Amazon SageMaker para sus modelos de machine learning. El equipo de ciencia de datos necesita elegir la opción de inferencia adecuada basada en los requisitos de latencia y procesamiento de su aplicación. La empresa tiene varios casos de uso: uno requiere una respuesta rápida en tiempo real, otro debe procesar grandes volúmenes de datos con tiempos de procesamiento de hasta una hora, y otro involucra procesamiento offline de grandes lotes de datos que pueden tardar varios días en completarse. ¿Cuál es la opción de inferencia más adecuada para los casos de uso de latencia baja y procesamiento rápido?",
        "cat": "aiml",
        "catLabel": "Fundamentos de IA y ML",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q12-1.jpg"
        ],
        "options": [
          {
            "text": "Inferencia asíncrona",
            "correct": false,
            "explanation": "Esta opción es útil para manejar solicitudes que no requieren una respuesta inmediata, permitiendo que el sistema procese los datos en un segundo plano y devuelva los resultados más tarde. Aunque es más rápida que la inferencia por lotes, sigue teniendo más latencia que la inferencia en tiempo real, por lo que no es la opción ideal cuando se necesita latencia extremadamente baja."
          },
          {
            "text": "Inferencia en tiempo real",
            "correct": true,
            "explanation": "Es la opción más adecuada para escenarios que requieren latencia baja y procesamiento rápido. Este tipo de inferencia está diseñada para aplicaciones donde se necesita una respuesta casi instantánea, ofreciendo tiempos de respuesta en menos de un segundo. Los endpoints de inferencia en tiempo real en Amazon SageMaker están optimizados para responder rápidamente a las solicitudes y son ideales para aplicaciones como recomendadores o servicios que interactúan directamente con los usuarios. Opciones incorrectas:"
          },
          {
            "text": "Inferencia serverless",
            "correct": false,
            "explanation": "Está diseñada para casos donde se necesita flexibilidad en la gestión de la infraestructura, eliminando la necesidad de administrar servidores. Aunque es útil para ciertas aplicaciones, no está optimizada para proporcionar respuestas inmediatas en tiempo real como lo hace la inferencia en tiempo real."
          },
          {
            "text": "Inferencia por lotes",
            "correct": false,
            "explanation": "Está diseñada para manejar grandes volúmenes de datos en escenarios offline, donde el tiempo de procesamiento puede extenderse a lo largo de horas o incluso días. Es adecuada cuando la latencia no es una preocupación, pero no es apropiada para aplicaciones que requieren respuestas rápidas en tiempo real."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/es_es/sagemaker/latest/dg/realtime-endpoints.html"
        ]
      },
      {
        "id": 53,
        "text": "Una empresa minorista desea mejorar su sistema de recomendaciones de productos utilizando machine learning. Para hacer recomendaciones más precisas, la empresa planea usar embeddings de vectores de características de productos y preferencias de los usuarios. El sistema también debe admitir consultas en tiempo real para encontrar rápidamente los productos más relevantes. ¿Qué servicios de AWS cumplirían mejor con estos requisitos? (Selecciona dos).",
        "cat": "aiml",
        "catLabel": "Fundamentos de IA y ML",
        "multiSelect": true,
        "selectCount": 2,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q59-1.jpg",
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q59-2.jpg"
        ],
        "options": [
          {
            "text": "Amazon DynamoDB",
            "correct": false,
            "explanation": "Aunque es una base de datos NoSQL altamente escalable, no está diseñada para realizar búsquedas de similitud vectorial, que son clave para este escenario."
          },
          {
            "text": "Amazon OpenSearch Service",
            "correct": true,
            "explanation": "Servicio gestionado que facilita el despliegue, operación y escalado de clústeres OpenSearch en la nube. Proporciona sólidas capacidades de búsqueda y análisis, especialmente para conjuntos de datos grandes como los utilizados en sistemas de recomendación. Una de las características destacadas de OpenSearch es su soporte para búsquedas de vecinos más cercanos (k-NN), lo que permite búsquedas eficientes de similitudes vectoriales."
          },
          {
            "text": "Amazon DocumentDB (con compatibilidad con MongoDB)",
            "correct": true,
            "explanation": "Es una base de datos NoSQL escalable y de alta disponibilidad diseñada para aplicaciones críticas. Es ideal para almacenar documentos JSON, como los que se usarían para gestionar datos complejos estructurados en sistemas de recomendación. DocumentDB también permite realizar consultas sobre documentos con facilidad, permitiendo que el sistema proporcione recomendaciones personalizadas basadas en el comportamiento y atributos de los productos. Opciones incorrectas:"
          },
          {
            "text": "Amazon ElastiCache",
            "correct": false,
            "explanation": "Aunque es efectivo para acelerar la recuperación de datos almacenados en memoria, no ofrece capacidades nativas para búsquedas de vectores ni para almacenar y gestionar datos complejos."
          },
          {
            "text": "AWS Lake Formation",
            "correct": false,
            "explanation": "Está diseñado para simplificar el proceso de creación de lagos de datos, no para consultas en tiempo real o búsquedas vectoriales."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/documentdb/latest/developerguide/vector-search.html",
          "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vector-search.html"
        ]
      },
      {
        "id": 54,
        "text": "Una empresa depende en gran medida de los modelos de machine learning para recomendaciones personalizadas y detección de fraudes. La empresa almacena datos sensibles en buckets de Amazon S3 y necesita una solución que descubra, clasifique y proteja automáticamente estos datos sensibles. ¿Cuál de las siguientes es la más adecuada para este caso de uso?",
        "cat": "security",
        "catLabel": "Seguridad, normativa y gobernanza de las soluciones de IA",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q42-1.jpg"
        ],
        "options": [
          {
            "text": "Amazon GuardDuty",
            "correct": false,
            "explanation": "Analiza registros de eventos (por ejemplo, CloudTrail, registros de VPC Flow) para detectar actividades sospechosas, acceso no autorizado y amenazas potenciales de seguridad. Se centra en identificar comportamientos maliciosos en lugar de la clasificación de datos."
          },
          {
            "text": "Amazon Inspector",
            "correct": false,
            "explanation": "Solo evalúa la postura de seguridad de las instancias EC2, las funciones de Lambda y las imágenes de ECR. Identifica vulnerabilidades, problemas de seguridad y posibles configuraciones incorrectas, pero no clasifica ni protege datos sensibles en S3."
          },
          {
            "text": "Amazon Kinesis",
            "correct": false,
            "explanation": "Se utiliza principalmente para la ingesta, procesamiento y análisis de grandes volúmenes de datos en tiempo real (por ejemplo, registros, datos de clics, datos de sensores). No aborda la clasificación ni protección de datos sensibles."
          },
          {
            "text": "Amazon Macie",
            "correct": true,
            "explanation": "Utiliza machine learning para descubrir automáticamente datos sensibles en tus buckets de S3. Escanea objetos e identifica patrones que coinciden con tipos comunes de información sensible, como información de identificación personal (PII), números de tarjetas de crédito y propiedad intelectual. Macie clasifica los datos descubiertos y asigna etiquetas a los objetos, lo que facilita la gestión de seguridad y el control de acceso. Opciones incorrectas:"
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html",
          "https://docs.aws.amazon.com/macie/latest/user/security_iam_service-with-iam.html"
        ]
      },
      {
        "id": 55,
        "text": "Una organización minorista está construyendo un modelo de machine learning para su chatbot de atención al cliente. Necesitan evaluar qué tan bien las respuestas del chatbot coinciden con las de los expertos en la materia. Además, la organización quiere optimizar la velocidad de respuesta del chatbot. ¿Cuál es la métrica más adecuada para evaluar la similitud de las respuestas del chatbot con las respuestas de los expertos?",
        "cat": "aiml",
        "catLabel": "Fundamentos de IA y ML",
        "multiSelect": false,
        "selectCount": 1,
        "images": [],
        "options": [
          {
            "text": "ROUGE-N",
            "correct": false,
            "explanation": "Solo se enfoca en la superposición de n-gramas (secuencias de palabras) entre el texto generado y el texto de referencia, lo que funciona bien para tareas de resumen, pero no captura el significado semántico más profundo del texto, lo que lo hace menos efectivo para evaluar la similitud de las respuestas de los chatbots."
          },
          {
            "text": "BERTScore",
            "correct": true,
            "explanation": "Herramienta que compara qué tan similar es el texto generado a una referencia mediante el análisis del contexto de las palabras utilizando embeddings de BERT (Bidirectional Encoder Representations from Transformers). Esto lo hace más adecuado para juzgar la calidad del texto, especialmente en tareas como la evaluación de chatbots. Ayuda a determinar qué tan bien coinciden las respuestas del chatbot con lo que un humano podría decir o responder. En este escenario, BERTScore es la métrica más apropiada porque mide directamente la similitud entre las respuestas del chatbot y las respuestas de los expertos, detectando diferencias en el lenguaje que son importantes en las interacciones con los clientes. Opciones incorrectas:"
          },
          {
            "text": "Metric for Evaluation of Translation with Explicit ORdering (METEOR)",
            "correct": false,
            "explanation": "Aunque evalúa la similitud del texto, lo hace basándose en métricas de precisión y recall, que no aprovechan los embeddings de contexto profundo como lo hace BERTScore. Esto hace que METEOR sea menos preciso al capturar las similitudes matizadas en las respuestas del chatbot en comparación con las respuestas de los expertos."
          },
          {
            "text": "Mean squared error (MSE)",
            "correct": false,
            "explanation": "Esta opción se utiliza principalmente en tareas de regresión para medir la diferencia entre valores numéricos predichos y reales. No está diseñada para evaluar la similitud de texto."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-foundation-model-evaluate-overview.html",
          "https://huggingface.co/spaces/evaluate-metric/bertscore"
        ]
      },
      {
        "id": 56,
        "text": "Un ingeniero de machine learning tiene la tarea de predecir los ingresos mensuales de un servicio basado en suscripción. ¿Qué métricas de evaluación deben utilizarse para evaluar el rendimiento del modelo? (Selecciona dos).",
        "cat": "aiml",
        "catLabel": "Fundamentos de IA y ML",
        "multiSelect": true,
        "selectCount": 2,
        "images": [],
        "options": [
          {
            "text": "Inference Latency",
            "correct": false,
            "explanation": "Solo mide el tiempo que tarda un modelo en generar predicciones y no evalúa la precisión o calidad de las predicciones, que es fundamental en escenarios de pronóstico."
          },
          {
            "text": "Mean absolute percentage error (MAPE)",
            "correct": true,
            "explanation": "El error porcentual absoluto medio (Mean Absolute Percentage Error, MAPE) calcula el promedio de las diferencias absolutas entre los valores reales y los proyectados, lo divide por los valores reales y devuelve un porcentaje. Un puntaje MAPE más bajo indica un mejor rendimiento del modelo, ya que las predicciones están más cerca de los valores reales."
          },
          {
            "text": "F1 Score",
            "correct": false,
            "explanation": "Es una métrica diseñada específicamente para problemas de clasificación, equilibrando la precisión y el recall. No se aplica a tareas de regresión como el pronóstico de ingresos, donde se requieren predicciones de valores continuos."
          },
          {
            "text": "Mean absolute error (MAE)",
            "correct": true,
            "explanation": "El error absoluto medio (Mean Absolute Error, MAE) es el promedio de las diferencias absolutas entre los valores esperados y los valores reales para todas las observaciones. Es una métrica ampliamente utilizada en tareas de regresión y predicción numérica, lo que la convierte en una buena opción para evaluar modelos de pronóstico de ingresos mensuales. Opciones incorrectas:"
          },
          {
            "text": "Accuracy",
            "correct": false,
            "explanation": "Esta métrica se utiliza típicamente para tareas de clasificación y no proporciona información significativa para evaluar predicciones de valores continuos como las predicciones de ingresos."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/sagemaker/latest/dg/canvas-metrics.html",
          "https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-metrics-validation.html"
        ]
      },
      {
        "id": 57,
        "text": "Una empresa tiene un sistema de recomendación que genera embeddings a partir de datos de interacción de los clientes. Quieren mejorar la velocidad y la eficiencia en la recuperación de recomendaciones de productos similares. ¿Qué servicios de AWS son los más adecuados para implementar la búsqueda por vectores para optimizar el sistema de recomendación? (Selecciona tres).",
        "cat": "fm_apps",
        "catLabel": "Aplicaciones de los modelos fundacionales",
        "multiSelect": true,
        "selectCount": 3,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q35-1.jpg",
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q35-2.jpg",
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q35-3.jpg"
        ],
        "options": [
          {
            "text": "Amazon S3",
            "correct": false,
            "explanation": "Este servicio está diseñado para el almacenamiento de objetos y no tiene capacidades de búsqueda e indexación de vectores. Aunque almacena grandes volúmenes de datos, no es adecuado para la búsqueda por similitud de vectores."
          },
          {
            "text": "Amazon Neptune ML",
            "correct": true,
            "explanation": "Compatible con redes neuronales gráficas (GNNs), y su técnica de machine learning es adecuada para optimizar la precisión y rapidez en la búsqueda de recomendaciones utilizando datos gráficos, lo que lo hace ideal para tareas de búsqueda por vectores."
          },
          {
            "text": "Amazon Redshift",
            "correct": false,
            "explanation": "Está diseñado para ejecutar consultas complejas en grandes conjuntos de datos, principalmente en almacenes de datos. No está optimizado para la búsqueda por vectores de alta eficiencia."
          },
          {
            "text": "Amazon DocumentDB (con compatibilidad con MongoDB)",
            "correct": true,
            "explanation": "Soporta la búsqueda por vectores, lo que permite almacenar, indexar y buscar millones de vectores con tiempos de respuesta de milisegundos, optimizando los sistemas de recomendación. Opciones incorrectas:"
          },
          {
            "text": "Amazon OpenSearch Service",
            "correct": true,
            "explanation": "Facilita la búsqueda de similitud utilizando k-NN (k-Nearest Neighbor), lo que permite realizar búsquedas de vectores para recuperar productos similares de manera rápida y eficiente en bases de datos vectoriales."
          },
          {
            "text": "Amazon Quicksight",
            "correct": false,
            "explanation": "Es una herramienta de inteligencia de negocios y visualización de datos, no está diseñada para la búsqueda ni la indexación de vectores."
          }
        ],
        "references": [
          "https://aws.amazon.com/what-is/vector-databases/"
        ]
      },
      {
        "id": 58,
        "text": "Una institución financiera global, que opera bajo estrictas regulaciones internacionales, está buscando implementar un modelo fundacional de código abierto (FM) en AWS para revisar y validar automáticamente los contratos de crédito. Este modelo tiene como objetivo evaluar si los contratos cumplen con las normativas y estándares de cumplimiento específicos de cada región en la que la empresa opera. La institución busca automatizar gran parte del proceso de auditoría, que históricamente ha sido manual y propenso a errores, reduciendo así el tiempo y los costos asociados con la conformidad regulatoria. ¿Qué servicio de AWS debería implementar la institución para acceder a modelos preentrenados y de código abierto que puedan ser utilizados para estos fines?",
        "cat": "genai",
        "catLabel": "Fundamentos de IA Generativa",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q2-1.jpg"
        ],
        "options": [
          {
            "text": "Amazon Textract",
            "correct": false,
            "explanation": "Amazon Textract es un servicio especializado en la detección y extracción de texto de documentos, incluyendo texto manuscrito. Sin embargo, no ofrece acceso a modelos fundacionales (FM) ni a funcionalidades avanzadas de análisis necesarias para evaluar la conformidad de contratos de crédito."
          },
          {
            "text": "Amazon SageMaker JumpStart",
            "correct": true,
            "explanation": "Amazon SageMaker JumpStart es la solución adecuada en este contexto, ya que permite a la institución financiera acceder a una variedad de modelos preentrenados y de código abierto que pueden ser utilizados para automatizar la revisión de contratos de crédito. SageMaker JumpStart incluye modelos fundacionales (FM) que son ideales para tareas de auditoría y validación de cumplimiento, proporcionando una manera rápida y eficiente de implementar estos modelos en producción. Opciones incorrectas:"
          },
          {
            "text": "Amazon Kendra",
            "correct": false,
            "explanation": "Amazon Kendra es un servicio de búsqueda inteligente que proporciona respuestas basadas en el contexto y los datos proporcionados, utilizando técnicas semánticas avanzadas. Aunque es útil para mejorar la búsqueda de información, no está diseñado para implementar modelos fundacionales o automatizar la auditoría de contratos."
          },
          {
            "text": "Amazon Q Business",
            "correct": false,
            "explanation": "Amazon Q Business es un asistente virtual de inteligencia artificial que ayuda a responder preguntas y completar tareas. Sin embargo, no proporciona acceso a modelos fundacionales (FM) y no está diseñado para procesos de auditoría o evaluación de conformidad, lo que lo hace inadecuado para este caso de uso."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-jumpstart.html"
        ]
      },
      {
        "id": 59,
        "text": "Una empresa tecnológica está desarrollando una aplicación de inteligencia artificial generativa utilizando un modelo fundacional (FM). Aunque existen modelos preentrenados disponibles, la empresa ha decidido personalizar su propio modelo fundacional utilizando datos propietarios específicos de su sector. Esta personalización tiene como objetivo mejorar la precisión del modelo en tareas específicas y asegurar que la IA esté alineada con las necesidades y características únicas de la empresa. Sin embargo, la personalización del modelo fundacional conlleva ciertos compromisos y desafíos que deben considerarse cuidadosamente. ¿Cuáles son los posibles compromisos al personalizar el modelo fundacional? (Selecciona dos).",
        "cat": "fm_apps",
        "catLabel": "Aplicaciones de los modelos fundacionales",
        "multiSelect": true,
        "selectCount": 2,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q7-1.jpg"
        ],
        "options": [
          {
            "text": "Mayor complejidad de implementación",
            "correct": true,
            "explanation": "La personalización de un modelo fundacional introduce una mayor complejidad en la implementación. Este proceso no solo requiere la preparación cuidadosa de los datos de entrenamiento, sino también la configuración y ejecución del reentrenamiento del modelo, así como la posterior evaluación del rendimiento. Todo esto exige habilidades avanzadas y experiencia en machine learning, lo que incrementa la complejidad y el esfuerzo necesario. Opciones incorrectas:"
          },
          {
            "text": "Mayor riesgo de alucinación",
            "correct": false,
            "explanation": "El riesgo de alucinación, donde el modelo genera respuestas incorrectas o engañosas, generalmente se reduce al personalizar el modelo con datos específicos y relevantes para el caso de uso. El reentrenamiento con datos adecuados ayuda a que el modelo se ajuste mejor a las tareas específicas."
          },
          {
            "text": "Mayor latencia",
            "correct": false,
            "explanation": "La latencia, que es el tiempo que tarda el modelo en generar una respuesta tras recibir una entrada, no necesariamente aumenta como resultado del reentrenamiento. La latencia está más relacionada con la arquitectura del modelo y la infraestructura subyacente, no con el hecho de que se personalice el modelo."
          },
          {
            "text": "Reducción de la precisión",
            "correct": false,
            "explanation": "La precisión del modelo generalmente mejora cuando se reentrena con datos específicos del caso de uso. El objetivo del reentrenamiento es hacer que el modelo sea más eficaz en la tarea para la cual está siendo personalizado, lo que, en la mayoría de los casos, resulta en un aumento de la precisión."
          },
          {
            "text": "Mayor costo",
            "correct": true,
            "explanation": "Personalizar un modelo fundacional requiere un presupuesto más elevado en comparación con utilizar un modelo preentrenado disponible públicamente. Esto se debe a la necesidad de recursos computacionales significativos y la experiencia de ingenieros de machine learning para realizar el reentrenamiento del modelo con datos propietarios. Este proceso puede implicar costos sustanciales en términos de infraestructura y mano de obra."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html"
        ]
      },
      {
        "id": 60,
        "text": "Una empresa de seguros de salud está invirtiendo millones de pesos en la extracción manual de información sensible de formularios de reclamos y archivos adjuntos. Este proceso manual ha generado retrasos significativos para los clientes que solicitan beneficios de salud, lo que ha resultado en comentarios negativos. Para mejorar el servicio al cliente y reducir el trabajo manual involucrado, la empresa desea automatizar el proceso de extracción para agilizar la gestión y el procesamiento de reclamos. ¿Qué servicio de AWS ayudará a la empresa a automatizar la extracción de información sensible de formularios de reclamos y archivos adjuntos, asegurando un procesamiento eficiente y preciso de los datos de los clientes?",
        "cat": "fm_apps",
        "catLabel": "Aplicaciones de los modelos fundacionales",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q28-1.jpg"
        ],
        "options": [
          {
            "text": "Amazon Comprehend",
            "correct": false,
            "explanation": "Este servicio se utiliza principalmente para tareas de procesamiento de lenguaje natural (NLP), como análisis de sentimientos, reconocimiento de entidades y detección de idioma. No está diseñado para extraer datos de formularios y tablas."
          },
          {
            "text": "Amazon Textract",
            "correct": true,
            "explanation": "Amazon Textract es un servicio de aprendizaje automático diseñado para extraer automáticamente texto y datos estructurados de documentos escaneados. A diferencia de las herramientas tradicionales de reconocimiento óptico de caracteres (OCR), Textract va más allá de la simple extracción de texto para comprender el diseño y el contexto de los documentos, incluidos formularios y tablas. Esto lo hace especialmente útil para manejar formularios complejos y archivos adjuntos, como los de reclamos de seguros, donde la precisión y la extracción de datos estructurados son cruciales. Opciones incorrectas:"
          },
          {
            "text": "Amazon Personalize",
            "correct": false,
            "explanation": "Es un servicio que solo proporciona recomendaciones personalizadas y experiencias de usuario analizando el comportamiento y las preferencias del usuario. Se utiliza principalmente para recomendaciones en aplicaciones como comercio electrónico o plataformas de contenido, pero no aborda la necesidad de extraer y procesar texto de formularios o documentos."
          },
          {
            "text": "Amazon Lex",
            "correct": false,
            "explanation": "Se utiliza para crear interfaces conversacionales utilizando voz y texto. Se utiliza para crear chatbots que interactúan con los usuarios a través del lenguaje natural, pero se enfoca en la gestión de diálogos y la comprensión del lenguaje natural, no en la extracción de texto de documentos."
          }
        ],
        "references": [
          "https://aws.amazon.com/textract/features/"
        ]
      },
      {
        "id": 61,
        "text": "Cuando el objetivo es realizar procesamiento offline de grandes lotes de datos, ¿cuál es la opción de inferencia más adecuada?",
        "cat": "fm_apps",
        "catLabel": "Aplicaciones de los modelos fundacionales",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q14-1.jpg"
        ],
        "options": [
          {
            "text": "Inferencia por lotes",
            "correct": true,
            "explanation": "Es ideal para el procesamiento offline de grandes volúmenes de datos. Esta opción permite manejar datos en lotes con tiempos de procesamiento que pueden extenderse a lo largo de horas o días, lo que la convierte en la opción adecuada para escenarios donde la latencia no es una preocupación. Es especialmente útil en situaciones donde los resultados no son necesarios de inmediato y se puede procesar una gran cantidad de datos en una sola operación. Opciones incorrectas:"
          },
          {
            "text": "Inferencia serverless",
            "correct": false,
            "explanation": "Es adecuada para casos donde se requiere un enfoque serverless, pero este modelo está más optimizado para cargas ligeras y flexibles que pueden ser procesadas sin tener que gestionar servidores dedicados, lo que la hace menos eficiente para manejar grandes volúmenes de datos offline."
          },
          {
            "text": "Inferencia en tiempo real",
            "correct": false,
            "explanation": "Está diseñada para escenarios donde se necesita una respuesta inmediata a una solicitud de inferencia, como en aplicaciones de interacción en vivo con usuarios. Sin embargo, debido a la necesidad de baja latencia, no es adecuada para el procesamiento de grandes lotes de datos, donde el tiempo de procesamiento es menos crítico."
          },
          {
            "text": "Inferencia asíncrona",
            "correct": false,
            "explanation": "Esta opción permite manejar solicitudes de inferencia de manera asíncrona, donde los resultados se devuelven más tarde, pero sigue siendo más adecuada para cargas de trabajo con tiempos de procesamiento moderados. Aunque es más flexible que la inferencia en tiempo real, no es la mejor opción para grandes lotes de datos que requieren un procesamiento extenso."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/es_es/sagemaker/latest/dg/batch-transform.html"
        ]
      },
      {
        "id": 62,
        "text": "Una compañía global de comercio electrónico está enfocada en optimizar sus operaciones mediante el análisis de datos provenientes de diversas fuentes y formatos. Estas fuentes incluyen audios de centros de llamadas, retroalimentación textual de clientes, imágenes de productos y documentos escaneados. La empresa está particularmente interesada en mejorar la clasificación de su extenso catálogo de productos, identificando nuevas categorías de productos basadas en imágenes históricas del inventario. Para lograr este objetivo, es necesario entrenar un modelo de aprendizaje automático que pueda analizar y clasificar eficazmente estas imágenes. ¿Qué combinación de pasos debería seguir la empresa para entrenar un modelo capaz de identificar y categorizar nuevos productos basándose en estas imágenes históricas? (Selecciona dos).",
        "cat": "aiml",
        "catLabel": "Fundamentos de IA y ML",
        "multiSelect": true,
        "selectCount": 2,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q4-1.jpg"
        ],
        "options": [
          {
            "text": "Crear un modelo personalizado en Amazon Comprehend",
            "correct": false,
            "explanation": "Amazon Comprehend es un servicio de procesamiento de lenguaje natural que se utiliza para analizar texto, no imágenes. Aunque permite la creación de modelos personalizados para análisis de texto, no es adecuado para identificar nuevas categorías de productos basadas en imágenes."
          },
          {
            "text": "Proporcionar las imágenes históricas no etiquetadas al modelo para el entrenamiento",
            "correct": false,
            "explanation": "Proporcionar imágenes no etiquetadas al modelo no permitirá un entrenamiento efectivo. Las imágenes deben estar etiquetadas previamente para que el modelo pueda aprender correctamente a categorizar nuevos datos."
          },
          {
            "text": "Etiquetar las imágenes históricas por categoría y proporcionar las imágenes etiquetadas al modelo de entrenamiento",
            "correct": true,
            "explanation": "Para entrenar un modelo con precisión, es crucial que las imágenes históricas estén etiquetadas por categoría. Este paso es esencial para que el modelo de Amazon Rekognition aprenda a reconocer patrones y categorías específicas dentro de las imágenes, lo que mejora significativamente la capacidad del modelo para identificar nuevas categorías de productos en el futuro. Opciones incorrectas:"
          },
          {
            "text": "Crear un proyecto de modelo de entrenamiento en Amazon Rekognition",
            "correct": true,
            "explanation": "Amazon Rekognition es un servicio basado en aprendizaje profundo para el análisis de imágenes y videos. Crear un proyecto de modelo de entrenamiento en Amazon Rekognition es fundamental para analizar imágenes y clasificarlas en categorías personalizadas. Esto permite a la empresa desarrollar un modelo que puede identificar automáticamente nuevas categorías de productos en función de las imágenes proporcionadas."
          },
          {
            "text": "Crear un proyecto de modelo de entrenamiento en Amazon Textract",
            "correct": false,
            "explanation": "Amazon Textract es un servicio diseñado para extraer texto y datos de documentos escaneados y PDFs. Aunque es útil para análisis de documentos, no tiene la capacidad de clasificar imágenes o identificar categorías de productos basadas en contenido visual."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/rekognition/latest/dg/what-is.html"
        ]
      },
      {
        "id": 63,
        "text": "Una empresa de comercio electrónico está considerando utilizar inteligencia artificial generativa para crear descripciones de productos en su sitio web. La implementación de esta tecnología tiene el potencial de agilizar el proceso de redacción y mejorar la consistencia del contenido en todo el catálogo de productos. Sin embargo, es importante que la empresa comprenda las limitaciones inherentes a la inteligencia artificial generativa antes de adoptarla completamente. ¿Cuál es una de las principales limitaciones de la inteligencia artificial generativa que la empresa debe tener en cuenta al generar descripciones de productos?",
        "cat": "genai",
        "catLabel": "Fundamentos de IA Generativa",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q8-1.jpg"
        ],
        "options": [
          {
            "text": "Los modelos de IA generativa pueden producir contenido sesgado o inapropiado que requiere revisión y edición humana",
            "correct": true,
            "explanation": "Los modelos de inteligencia artificial generativa son capaces de producir texto de manera autónoma, pero una de las limitaciones más significativas es la posibilidad de generar contenido que sea sesgado o inapropiado. Esto se debe a que los modelos aprenden de los datos con los que fueron entrenados, los cuales pueden contener sesgos inherentes. Por lo tanto, es crucial que el contenido generado sea revisado y editado por humanos para asegurar que cumpla con los estándares de la empresa y no contenga errores o contenido inapropiado. Opciones incorrectas:"
          },
          {
            "text": "Los modelos de IA generativa carecen de la capacidad para entender e incorporar especificaciones y detalles de productos",
            "correct": false,
            "explanation": "Los modelos de IA generativa pueden entender e incorporar especificaciones y detalles de productos si son entrenados adecuadamente con datos relevantes. La falta de capacidad para comprender especificaciones no es una limitación inherente de estos modelos."
          },
          {
            "text": "La IA generativa no puede generar texto en múltiples idiomas, lo cual es necesario para un sitio web de comercio electrónico",
            "correct": false,
            "explanation": "La IA generativa puede ser entrenada en datos multilingües, lo que le permite generar texto en varios idiomas. Por lo tanto, no es una limitación en la creación de descripciones de productos para un sitio web de comercio electrónico que opera en múltiples regiones."
          },
          {
            "text": "La IA generativa no puede manejar los grandes volúmenes de datos necesarios para las descripciones de productos",
            "correct": false,
            "explanation": "Los modelos modernos de IA generativa están diseñados para manejar grandes volúmenes de datos y pueden generar texto a escala. Esta no es una limitación relevante en el contexto de la generación de descripciones de productos."
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html"
        ]
      },
      {
        "id": 64,
        "text": "Una gran consultora de Cloud está utilizando Amazon Bedrock para desarrollar un chatbot impulsado por un LLM para realizar atención al cliente. El equipo de desarrollo está evaluando los límites para integrar los datos de consultas de los clientes en un solo prompt utilizado por el modelo. ¿Qué factor debe considerar la compañía?",
        "cat": "aiml",
        "catLabel": "Fundamentos de IA y ML",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q21-1.jpg"
        ],
        "options": [
          {
            "text": "Arquitectura del modelo",
            "correct": false,
            "explanation": "Aunque puede influir en el rendimiento, la eficiencia y la capacidad del modelo para procesar ciertos tipos de datos, no determina específicamente la cantidad de texto que puede procesarse en una sola interacción. La ventana de contexto es responsable de este aspecto."
          },
          {
            "text": "Context Window",
            "correct": true,
            "explanation": "Determina la cantidad de texto que un modelo de IA puede manejar y responder en un solo proceso; en la mayoría de los LLMs, este texto se mide en tokens. Esta ventana define el límite de cuánta entrada de texto puede considerar el modelo al generar su salida. En la mayoría de los LLMs, como los modelos GPT, la entrada se mide en tokens en lugar de caracteres o palabras. Los tokens pueden representar palabras, partes de palabras o puntuación, y son las unidades básicas que procesa el modelo. Cuanto mayor sea la ventana de contexto, más información podrá manejar el modelo en una sola interacción. Opciones incorrectas:"
          },
          {
            "text": "Latencia de respuesta",
            "correct": false,
            "explanation": "Simplemente está relacionada con el tiempo de demora entre que el modelo recibe un prompt y entrega una respuesta. Aunque es importante para asegurar una buena experiencia de usuario, no afecta el tamaño de la entrada que puede procesarse."
          },
          {
            "text": "Temperatura",
            "correct": false,
            "explanation": "Solo afecta la variabilidad o creatividad de las respuestas del modelo al ajustar la probabilidad de diferentes salidas. No influye en la cantidad de datos que el modelo puede procesar en una sola interacción. La temperatura es importante para generar respuestas más variadas o deterministas, pero no impacta en el volumen de datos que maneja el modelo."
          }
        ],
        "references": [
          "https://aws.amazon.com/blogs/security/context-window-overflow-breaking-the-barrier/"
        ]
      },
      {
        "id": 65,
        "text": "Una empresa necesita etiquetar un gran conjunto de datos de imágenes con alta precisión para entrenar un modelo de machine learning. La empresa requiere una solución que combine el etiquetado manual con el aprendizaje automático para garantizar la calidad de los datos. ¿Qué servicio o función de AWS cumplirá mejor con este requisito?",
        "cat": "fm_apps",
        "catLabel": "Aplicaciones de los modelos fundacionales",
        "multiSelect": false,
        "selectCount": 1,
        "images": [
          "https://blockstellart.com/wp-content/uploads/aws-ai-practitioner-foundational/pt1-q41-1.jpg"
        ],
        "options": [
          {
            "text": "Amazon SageMaker Autopilot",
            "correct": false,
            "explanation": "Es simplemente una solución automatizada de machine learning que puede entrenar y desplegar modelos. No proporciona funciones específicas para combinar el etiquetado manual con el aprendizaje automático."
          },
          {
            "text": "Amazon SageMaker Model Monitor",
            "correct": false,
            "explanation": "Se utiliza principalmente para monitorear el rendimiento de los modelos en producción. No proporciona características específicas para combinar el etiquetado manual con el aprendizaje automático."
          },
          {
            "text": "Amazon SageMaker Debugger",
            "correct": false,
            "explanation": "Es solo una herramienta para monitorear y depurar modelos de machine learning durante el entrenamiento. No está diseñado para el etiquetado de datos."
          },
          {
            "text": "Amazon SageMaker Ground Truth",
            "correct": true,
            "explanation": "Es un servicio proporcionado por AWS que permite el etiquetado de datos para proyectos de machine learning. Te permite crear trabajos de etiquetado y gestionar una fuerza laboral de etiquetadores humanos para anotar tus datos. Ground Truth también admite la integración de modelos de machine learning en el flujo de trabajo de etiquetado, lo que permite una combinación de etiquetado humano y automático. Opciones incorrectas:"
          }
        ],
        "references": [
          "https://docs.aws.amazon.com/sagemaker/latest/dg/sms.html"
        ]
      }
    ],
    "categories": {
      "fm_apps": {
        "label": "Aplicaciones de los modelos fundacionales",
        "color": "#f59e0b"
      },
      "security": {
        "label": "Seguridad, normativa y gobernanza de las soluciones de IA",
        "color": "#ef4444"
      },
      "genai": {
        "label": "Fundamentos de IA Generativa",
        "color": "#8b5cf6"
      },
      "aiml": {
        "label": "Fundamentos de IA y ML",
        "color": "#3b82f6"
      },
      "responsible_ai": {
        "label": "Directrices para una IA Responsable",
        "color": "#ec4899"
      }
    }
  }
];
