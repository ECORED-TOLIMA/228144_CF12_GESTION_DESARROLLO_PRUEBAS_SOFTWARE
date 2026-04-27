<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Verificación de la calidad y mejora continua en proyectos de <em>software</em>.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> fortalecer el dominio técnico sobre la verificación de requisitos, la gestión del conocimiento y la formulación de planes de mejora continua, a partir del análisis de escenarios propios del desarrollo de <em>software</em>.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué pilar de la gestión de calidad se centra en la perspectiva del usuario final respecto a la efectividad y satisfacción en su contexto real de trabajo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Calidad de producto.', esCorrecta: false },
            { id: 'b', texto: 'Calidad de uso.', esCorrecta: true },
            { id: 'c', texto: 'Calidad del proceso.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Control de calidad estático.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Identifica que la calidad de uso se evalúa desde la experiencia, efectividad y satisfacción del usuario en su contexto real de trabajo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la diferencia entre el <em>testing</em> y la evaluación?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El <em>testing</em> es preventivo y la evaluación es detectiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No existe diferencia, son sinónimos técnicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El <em>testing</em> se enfoca en la corrección funcional, mientras la evaluación es más amplia e incluye auditorías y análisis de mantenibilidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El <em>testing</em> solo usa herramientas y la evaluación solo documentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Comprende que la evaluación trasciende las pruebas funcionales al integrar análisis más amplios sobre calidad, sostenibilidad y contexto del <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué técnica permite detectar errores y malas prácticas examinando el código sin ejecutarlo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Análisis dinámico.', esCorrecta: false },
            { id: 'b', texto: 'Análisis estático.', esCorrecta: true },
            { id: 'c', texto: 'Prueba de caja negra.', esCorrecta: false },
            { id: 'd', texto: 'Test de estrés.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce que el análisis estático permite identificar errores y malas prácticas sin ejecutar el código, fortaleciendo la prevención temprana de defectos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Cuál es el objetivo principal de las pruebas funcionales?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evaluar el "cómo" hace las cosas el sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Confirmar que cada función de la solución opere de acuerdo con las especificaciones del cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Medir el tiempo de ejecución de las macros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Proteger la estructura de las hojas y libros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Distingue que las pruebas funcionales validan que el sistema cumpla exactamente con lo que fue especificado por el cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué herramienta funcional actúa como un "<em>test</em> de estrés" para la visualización en el análisis de datos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Listas desplegables.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Tablas dinámicas y segmentadores (<em>slicers</em>).',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Grabadora de macros.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Validación de datos nativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Identifica que las tablas dinámicas y segmentadores permiten evaluar el comportamiento del sistema ante múltiples consultas simultáneas del negocio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cómo se define un "defecto" en la ingeniería de <em>software</em>?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una mejora solicitada por el gerente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cualquier desviación entre el comportamiento esperado y el comportamiento real del sistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una macro que tarda más de 4 horas en ejecutarse.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un archivo que no tiene protección de contraseña.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce que un defecto se define como cualquier desviación entre el comportamiento esperado y el comportamiento real del sistema.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el propósito del proceso de depuración (<em>debugging</em>)?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar el tiempo de ejecución de una tarea.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Encontrar la causa raíz de un fallo mediante la identificación, aislamiento y corrección.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crear dashboards para la gerencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Proteger la propiedad intelectual del código.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Comprende que la depuración se orienta a identificar, aislar y corregir la causa raíz de los fallos del <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué métrica promedia el tiempo invertido en identificar, depurar y corregir un <em>bug</em>?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Densidad de defectos.', esCorrecta: false },
            { id: 'b', texto: 'Tasa de fallos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Ahorro de tiempo operativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tiempo Medio de Reparación (MTTR).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Identifica el MTTR como una métrica clave para evaluar la capacidad de respuesta del equipo ante incidentes técnicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué elemento de un reporte de hallazgo explica la secuencia lógica de acciones que disparan el error?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Identificador único.', esCorrecta: false },
            { id: 'b', texto: 'Severidad y prioridad.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Pasos para la reproducción (algoritmo inverso).',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Diagnóstico inicial.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce que los pasos de reproducción permiten entender y replicar el error de forma precisa y sistemática.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'En la evaluación de requisitos no funcionales, ¿qué atributo garantiza que el sistema sea utilizable por el mayor número de personas?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Seguridad.', esCorrecta: false },
            { id: 'b', texto: 'Usabilidad.', esCorrecta: false },
            { id: 'c', texto: 'Accesibilidad.', esCorrecta: true },
            { id: 'd', texto: 'Adaptabilidad.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Identifica la accesibilidad como el atributo que garantiza el uso del sistema por la mayor diversidad de personas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el requisito para que el <em>software</em> genere siempre el mismo resultado, eliminando la variabilidad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Portabilidad.', esCorrecta: false },
            { id: 'b', texto: 'Confiabilidad / Fiabilidad.', esCorrecta: true },
            { id: 'c', texto: 'Eficiencia de desempeño.', esCorrecta: false },
            { id: 'd', texto: 'Adaptabilidad modular.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce que la confiabilidad asegura resultados consistentes y repetibles en la ejecución del <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'En la gestión del conocimiento, ¿qué es el conocimiento tácito?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Información documentada en manuales y bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Saber personal basado en experiencias e intuiciones que reside en las personas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un código de referencia para el seguimiento de errores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un reporte técnico en formato PDF.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Comprende que el conocimiento tácito reside en la experiencia, habilidades e intuiciones de las personas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué proceso del modelo SECI consiste en convertir experiencias y saber-hacer en documentos formales (tácito a explícito)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Socialización.', esCorrecta: false },
            { id: 'b', texto: 'Externalización.', esCorrecta: true },
            { id: 'c', texto: 'Combinación.', esCorrecta: false },
            { id: 'd', texto: 'Internalización.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Identifica la externalización como el proceso mediante el cual el conocimiento tácito se transforma en documentación formal.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'Según el modelo de Probst, ¿cuál es el proceso que busca evitar la pérdida de conocimiento crítico mediante entrevistas de salida o mentorías?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Adquisición.', esCorrecta: false },
            { id: 'b', texto: 'Distribución.', esCorrecta: false },
            { id: 'c', texto: 'Retención.', esCorrecta: true },
            { id: 'd', texto: 'Medición.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce que la retención del conocimiento busca evitar la pérdida de saber crítico dentro de la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el instrumento de gestión que formaliza acciones, responsables y plazos para cerrar brechas de calidad?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reporte de hallazgos.', esCorrecta: false },
            { id: 'b', texto: 'Plan de mejora.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Guía de <em>onboarding</em>.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Log de auditoría.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Identifica el plan de mejora como el instrumento que traduce los hallazgos en acciones concretas y responsables definidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué tipo de acción en un plan de mejora elimina la causa raíz de un problema ya ocurrido para evitar que se repita?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Acción preventiva.', esCorrecta: false },
            { id: 'b', texto: 'Acción correctiva.', esCorrecta: true },
            { id: 'c', texto: 'Acción de mejoramiento.', esCorrecta: false },
            { id: 'd', texto: 'Corrección puntual.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce que las acciones correctivas eliminan la causa raíz de problemas ya ocurridos para evitar su repetición.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'En la matriz RACI, ¿qué rol identifica a la única persona que responde por el resultado final de una acción?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Responsible (R).', esCorrecta: false },
            { id: 'b', texto: 'Accountable (A).', esCorrecta: true },
            { id: 'c', texto: 'Consulted (C).', esCorrecta: false },
            { id: 'd', texto: 'Informed (I).', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Identifica correctamente al rol <em>Accountable</em> (A) como el responsable final del resultado de una acción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué técnica se utiliza para no actuar sobre síntomas sino sobre causas sistémicas en un plan de mejora?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Técnica de los 5 Porqués.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Cronometrar ejecución de macros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Borrado y ejecución de <em>tests</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Protección de estructura de libros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce que la técnica de los 5 Porqués permite abordar problemas desde su causa raíz y no solo desde los síntomas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es el perfil responsable de definir la estrategia CI/CD y validar que las soluciones sean sostenibles a largo plazo?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Líder de proyecto / Scrum master.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Desarrollador junior.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Arquitecto de <em>software</em>.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'QA / Tester.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Identifica al arquitecto de <em>software</em> como el perfil encargado de decisiones estructurales y sostenibilidad técnica a largo plazo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Según el semáforo de estados de avance, ¿qué significa un estado en color naranja (en riesgo)?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acción ejecutada e indicador cumplido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Acción iniciada y dentro del plazo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Avance menor al 50 % con menos del 30 % del tiempo restante.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Plazo superado sin completar la acción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce que el estado “en riesgo” permite anticipar desviaciones y escalar decisiones antes de incumplir el plan.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
