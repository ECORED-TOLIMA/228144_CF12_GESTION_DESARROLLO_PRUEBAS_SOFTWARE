<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Evaluación de calidad del #[i software]
    .row.justify-content-center.align-items-center
      .col-lg-3.col-md-5.mb-4.mb-md-0
        figure
          img(src="@/assets/curso/Temas/tema1/img1.png", alt="alt")
      .col-lg-9.col-md-7
        .tarjeta.BG03.p-4
          figure.mb-4
            img(src="@/assets/curso/Temas/tema1/img2.png", alt="Icono", style="width: 70px")
          p La calidad del #[i software] es el grado en que un sistema satisface los requisitos especificados y las necesidades implícitas del usuario. Se evalúa desde múltiples dimensiones usando modelos estandarizados internacionalmente.
    separador
    .titulo-segundo.color-acento-contenido
      h2 1.1 Control de calidad
    .row.justify-content-center.align-items-start.mb-4
      .col-lg-9.order-2.order-lg-1
        p Es el proceso sistemático de verificar que un producto final —ya sea un reporte automatizado, un dashboard o una macro— cumpla con las especificaciones técnicas y las necesidades reales del negocio.
        p.mb-4 La gestión de la calidad del #[i software] se fundamenta en tres pilares esenciales:
        .row
          .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-right")
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/Temas/tema1/img3.svg' alt="Imagen decorativa")
            h5.text-center Calidad de producto
            p.text-center.mb-0 Evalúa atributos internos y externos como funcionalidad, rendimiento y seguridad mediante mediciones estáticas y dinámicas.
          .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-right")
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/Temas/tema1/img4.svg' alt="Imagen decorativa")
            h5.text-center Calidad en uso
            p.text-center.mb-0 Centrada en la experiencia del usuario final, respecto a la efectividad y satisfacción en su contexto real.
          .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-left")
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/Temas/tema1/img5.svg' alt="Imagen decorativa")
            h5.text-center Calidad del proceso
            p.text-center.mb-0 Asegura la madurez del desarrollo, mediante modelos como CMMI o ISO 15504 (SPICE)
          
      .col-lg-3.order-1.order-lg-2
        figure
          img(src='@/assets/curso/Temas/tema1/img6.png', alt='Imagen decorativa lateral')
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta-cajon-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-1
              figure
                img(src="@/assets/curso/Temas/tema1/img7.png" alt="Adornos flotantes")
            .col-11
              p.mb-0 Esta estructura integral garantiza que un proceso bien ejecutado, derive naturalmente en un producto de alto nivel que cumpla con las expectativas operativas y técnicas.
 
    p.mb-0 Para estandarizar estas mediciones, se emplea la serie ISO/IEC 25000 (SQuaRE), que establece los marcos de referencia actuales para métricas y requisitos. Es crucial diferenciar entre el testing, enfocado en la corrección funcional y la evaluación, un concepto más amplio que abarca auditorías y análisis de mantenibilidad. Todo este ecosistema se apoya en estándares clave como la ISO 25010 para modelos de calidad, la ISO 25040 para procesos de evaluación, la IEEE 730 para el aseguramiento y la ISO 9001 para la gestión de calidad global.
    separador
    .titulo-segundo.color-acento-contenido
      h2 1.2 Herramientas de evaluación
    
    .BMG1.px-5
      p.mb-4 Existen distintas perspectivas y momentos para evaluar la calidad. Lo ideal es combinarlos durante todo el ciclo de vida del #[i software]; para ello existen diferentes enfoques y herramientas de evaluación. Po consiguiente, para optimizar la calidad del #[i software], se emplean diversas técnicas complementarias:
      .row.justify-content-center.mb-4
        .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
          .tarjeta-avatar
            img(src='@/assets/curso/Temas/tema1/img8.png' alt='AvatarTop')
            .tarjeta.BG033
              .p-4
                .row.justify-content-center.mb-3
                  .col-auto
                    .py-2.px-3
                      p.mb-0 #[b Análisis estático]
                p.text-center.mb-0 Permite examinar el código sin ejecutarlo para detectar deuda técnica y malas prácticas mediante herramientas como SonarQube o ESLint
        .col-10.col-md-6.col-lg-4(data-aos="fade-left")
          .tarjeta-avatar
            img(src='@/assets/curso/Temas/tema1/img9.png' alt='AvatarTop')
            .tarjeta.BG033
              .p-4
                .row.justify-content-center.mb-3
                  .col-auto
                    .py-2.px-3
                      p.mb-0 #[b Análisis dinámico]
                p.text-center.mb-0 Utiliza casos de prueba (unitarias, integración y sistema) para medir la cobertura de código en ejecución.
    
    p.mb-4 Este proceso se fortalece con la revisión entre pares, una inspección colaborativa sumamente eficaz para la detección temprana de errores y se consolida a través de la integración continua (CI), que automatiza las pruebas y el análisis de calidad en cada commit, utilizando pipelines en plataformas como Jenkins o GitHub Actions.
   
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Herramientas de pruebas funcionales
 
    .row.justify-content-center.mb-4
      .col-lg-9
        p.mb-5 Las pruebas funcionales se centran en verificar "qué" hace el sistema. Su objetivo es confirmar que cada función de la solución de #[i software] opere de acuerdo con las especificaciones del cliente o los resultados de aprendizaje esperados. A partir de este enfoque, las herramientas de pruebas funcionales se organizan en tres ejes fundamentales que permiten evaluar el comportamiento del sistema de manera integral:
        LineaTiempoD.color-primario
          p(numero="1" titulo="Validación de entradas y restricciones") Constituye la primera línea de defensa para garantizar la calidad funcional, utilizando la validación de datos nativa para restringir ingresos erróneos y listas desplegables que aseguran la estandarización de categorías. Complementariamente, las pruebas de integridad en el modelado (caja negra) verifican el flujo de información externa, mediante el cruce de información con funciones como BUSCARV/XLOOKUP y el uso de tablas de Excel (objetos), lo que permite que las referencias sean dinámicas y hereden automáticamente las reglas funcionales.

          p(numero="2" titulo="Procesamiento") En este eje las herramientas de cálculo y lógica automática aseguran que las columnas calculadas y las funciones de texto y fecha devuelvan valores esperados bajo distintos escenarios; por otro lado, las tablas dinámicas y segmentadores (slicers) actúan como un "test de estrés" funcional para la visualización, permitiendo la agrupación y filtrado de datos y una segmentación interactiva que facilita a la gerencia filtrar información en tiempo real, validando así la respuesta del sistema ante las preguntas del negocio.

          p(numero="3" titulo="Grabadora de macros y automatización") Se utiliza para la generación de "scripts" funcionales, donde la prueba definitiva consiste en la ejecución de macros para validar que el informe final coincida con el plan de acción. Para mejorar la interfaz de usuario (botones), estas automatizaciones se vinculan a un "panel de control", garantizando que la funcionalidad sea accesible para usuarios sin conocimientos técnicos y asegurando una experiencia de uso fluida y profesional.
      .col-7.col-lg-3
        figure
          img.l(src="@/assets/curso/Temas/tema1/img10.png", alt="alt")
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta-cajon-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-1
              figure
                img(src="@/assets/curso/Temas/tema1/img7.png" alt="Adornos flotantes")
            .col-11
              p.mb-0 #[b Métrica de éxito]: una prueba funcional es exitosa si el analista logra transformar datasets desorganizados en un #[i dashboard] interactivo que responda con exactitud a los requerimientos gerenciales en el tiempo estipulado.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Herramientas de pruebas no funcionales

    p.mb-4 Mientras que las pruebas funcionales se centran en el "qué" hace el #[i software], las pruebas no funcionales evalúan el "cómo" lo hace. En el contexto de Excel avanzado, estas herramientas miden la robustez, el rendimiento y la experiencia del usuario (UX) frente a grandes volúmenes de datos.

    .row.justify-content-center
      .col-lg-3.col-6
        figure
          img(src="@/assets/curso/Temas/tema1/img11.png", alt="Imagen decorativa")

      .col-lg-9
        .row.justify-content-center
          .col-lg-12
            .tarjeta.BG03.p-3.mb-3
              .row.justify-content-center.align-items-center
                .col-lg-1
                  figure
                    img(src="@/assets/curso/Temas/tema1/img12.png" alt="Icono rendimiento")
                .col-lg-11
                  p.mb-0 Las pruebas de rendimiento e irrupción evalúan la estabilidad de la hoja de cálculo ante el crecimiento de la información. Se enfocan en la gestión de grandes volúmenes de datos y la optimización de fórmulas para evitar lentitud. Además, miden el tiempo de ejecución de macros para validar el ahorro de tiempo real frente a procesos manuales.
            p En cuanto a las pruebas de usabilidad e interfaz de usuario (UX), estas garantizan que herramientas como el diseño de #[i dashboards] y la navegación interactiva con slicers sean fluidas. Es fundamental que el panel de control cuente con botones de la pestaña "programador" que tengan nombres claros para facilitar el trabajo de los destinatarios finales.

        .row.justify-content-center.mb-4
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-3.col-md-3.mb-3.mb-md-0
                figure
                  img(src="@/assets/curso/Temas/tema1/img13.png" alt="Icono fiabilidad")
              .col-12.col-md-9
                p.mb-0 Las pruebas de fiabilidad y consistencia aseguran que el sistema sea resistente a fallos, mediante la validación de la macro, realizando tests de "borrado y ejecución" para obtener resultados constantes. La documentación y planificación previa del algoritmo es una herramienta no funcional clave para reducir drásticamente el riesgo de errores operativos a largo plazo.

    .row.justify-content-center.mb-4
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-12.col-md-9.order-2.order-md-1
            p.mb-3 Para garantizar la integridad en entornos empresariales, las pruebas de seguridad y protección resultan fundamentales para resguardar la propiedad intelectual y el código. Esto incluye la protección de estructura en hojas y libros para evitar que terceros alteren el modelado.
            p.mb-0 A continuación, se sintetizan los principales atributos evaluados en las pruebas no funcionales, junto con las herramientas o técnicas empleadas y su objetivo dentro del programa:
          .col-3.col-md-3.order-1.order-md-2.mb-3.mb-md-0
            figure
              img(src="@/assets/curso/Temas/tema1/img14.png" alt="Icono seguridad")

    .row.justify-content-center.align-items-center.mb-4
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span Atributos y herramientas de evaluación en pruebas no funcionales
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Atributo
                th Herramienta / técnica
                th Objetivo en el programa
            tbody
              tr
                td Eficiencia
                td Cronometrar ejecución de macros.
                td Reducir tiempos de 4 horas a minutos.
              tr
                td Escalabilidad
                td Modelado con tablas oficiales.
                td Soportar crecimiento rápido de transacciones
              tr
                td Usabilidad
                td Dashboard con segmentadores.
                td Facilitar la toma de decisiones gerenciales.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5  Herramientas de seguimiento de defectos

    p.mb-4 En la ingeniería de #[i software], un defecto es cualquier desviación entre el comportamiento esperado y el comportamiento real del sistema; es por ello, que el seguimiento de defectos es el proceso de identificar, registrar y priorizar estos fallos para asegurar la calidad del producto final.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Temas/tema1/img15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Por su parte, el proceso de depuración (debugging) es el conjunto de técnicas fundamentales para encontrar la causa raíz de un fallo, mediante tres etapas clave: la identificación del comportamiento anómalo, el aislamiento del módulo o línea de código origen y la corrección lógica para evitar la regresión. Este ciclo se apoya en el seguimiento de defectos, un enfoque reactivo que permite el registro y la priorización de errores, según su impacto, desde fallos críticos en cálculos hasta detalles cosméticos, garantizando que cada desviación sea validada tras su reparación.

    .row.justify-content-center.mb-4
      .col-lg-9
        .tarjeta.BG03.p-4
          .row.justify-content-center.align-items-center
            .col-2.col-md-2
              figure
                img(src="@/assets/curso/Temas/tema1/img16.svg" alt="Adornos flotantes")
            .col-10.col-md-10
              p.mb-0 Para ejecutar estas tareas, se utilizan herramientas técnicas de depuración como la ejecución paso a paso, los puntos de interrupción (breakpoints) y la inspección de variables (locals/watch), que permiten monitorear el flujo de datos en tiempo real. Además, la robustez del sistema se refuerza con la gestión de excepciones, empleando bloques de manejo de errores (error handling) para capturar fallos antes del colapso, así como el control de eventos, que supervisa acciones inesperadas del sistema para asegurar una respuesta controlada y profesional.
      .col-lg-3
        figure
          img(src="@/assets/curso/Temas/tema1/img17.png" alt="Adornos flotantes")
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Herramientas de análisis y métricas

    p.mb-4 En la ingeniería de #[i software], "lo que no se mide, no se puede mejorar". Las métricas proporcionan datos objetivos para evaluar la eficacia del proceso de desarrollo y la calidad del producto final.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        figure
          img(src="@/assets/curso/Temas/tema1/img18.png", alt="alt")
      .col-lg-8
        p Las métricas de defectos son fundamentales para cuantificar la calidad interna del #[i software], destacando indicadores como la densidad de defectos (errores por módulo o líneas de código) y la tasa de fallos, que mide la frecuencia de errores en un tiempo determinado. Para evaluar la capacidad de respuesta del equipo, se utiliza el tiempo medio de reparación (MTTR), el cual promedia el tiempo invertido en identificar, depurar y corregir cada bug. Estas cifras permiten un control riguroso sobre la estabilidad técnica de la herramienta antes de su despliegue definitivo.
        .row.justify-content-center
          .col-lg-12
            .col-md.cajon.color-primario.p-4
              .row.justify-content-center.align-items-center
                .col-12.col-md-12
                  p.mb-0 Por otro lado, la calidad externa se mide a través de métricas de eficiencia y rendimiento, las cuales reflejan el impacto real en el negocio, mediante el ahorro de tiempo operativo y la notable reducción del error humano tras la estandarización de procesos. Para visualizar estos resultados, se emplean herramientas de análisis de datos como dashboards de control de calidad y tablas dinámicas de seguimiento, complementadas con logs de auditoría que registran eventos y excepciones. Finalmente, la tasa de uso por parte de la gerencia confirma si la solución adoptada cumple con los objetivos de usabilidad y valor estratégico.

    p.mb Basado en lo anterior, la siguiente tabla presenta un conjunto de herramientas ampliamente utilizadas en la ingeniería de #[i software] para el análisis, la medición y el control de la calidad:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span Herramientas de análisis y métricas de calidad del #[i software]
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Herramienta
                th Propósito principal
                th Licencia
            tbody
              tr
                td
                  .text-bold SonarQube
                td Análisis estático de código, deuda técnica, calidad general.
                td Open Source / Comercial
              tr
                td
                  .text-bold JUnit / PyTest
                td Pruebas unitarias para Java y Python respectivamente.
                td Open Source
              tr
                td
                  .text-bold Selenium WebDriver
                td Automatización de pruebas funcionales de UI web.
                td Open Source
              tr
                td
                  .text-bold Apache JMeter
                td Pruebas de rendimiento, carga y estrés.
                td Open Source
              tr
                td
                  .text-bold OWASP ZAP
                td Pruebas de seguridad y detección de vulnerabilidades.
                td Open Source
              tr
                td
                  .text-bold JaCoCo / Coverage.py
                td Medición de cobertura de pruebas en Java y Python.
                td Open Source
              tr
                td
                  .text-bold Postman / Rest Assured
                td Pruebas funcionales de APIs REST.
                td Freemium / Open Source
              tr
                td
                  .text-bold PJenkins / GitHub Actions
                td Integración continua (CI/CD) y automatización de pipelines.
                td Open Source / Incluido
              tr
                td
                  .text-bold Jira
                td Seguimiento de defectos y gestión de proyectos ágiles.
                td Comercial
              tr
                td
                  .text-bold ESLint / Checkstyle
                td Verificación de estilo y convenciones de código.
                td Open Source
              tr
                td
                  .text-bold New Relic / Grafana
                td Monitoreo de rendimiento en producción.
                td Freemium / Open Source
    separador
    .titulo-segundo.color-acento-contenido
      h2 1.3 Documentación de hallazgos
    p.mb-4 Documentar un hallazgo consiste en registrar formalmente cualquier anomalía, vulnerabilidad o área de mejora identificada durante la evaluación de la calidad. Esta práctica es fundamental para mitigar riesgos operativos y financieros.
    .BMG1.px-5
      .titulo.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
        h5 Elementos esenciales de un reporte de hallazgos
    
      p.mb-4 Para que un hallazgo sea útil, debe contener información y técnica precisa que permita a otros desarrolladores o analistas entender el problema, basado en lo siguiente:
      .row.justify-content-center.align-items-center
        .col-lg-8.order-2.order-lg-1
          .tarjeta.BG03.p-4
            ul.lista-ul
              li
                i.fas.fa-computer
                p.mb-0 #[b Identificador único]
                  br
                  | Código de referencia para el seguimiento (ej. ERR-001).
              li
                i.fas.fa-computer
                p.mb-0 #[b Severidad y prioridad]
                  br
                  | Clasificación del impacto del error (crítico, mayor, menor).
              li
                i.fas.fa-computer
                p.mb-0 #[b Descripción del defecto]
                  br
                  | Explicación clara de la desviación entre lo esperado y lo obtenido.
              li
                i.fas.fa-computer
                p.mb-0 #[b Pasos para la reproducción]
                  br
                  | Secuencia lógica de acciones que disparan el error (algoritmo inverso).
              li
                i.fas.fa-computer
                p.mb-0 #[b Evidencia visual]
                  br
                  | Capturas de pantalla o logs que demuestren el estado del error.
            
        .col-lg-3.col-6.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/Temas/tema1/img19.png" alt="Persona con laptop")
   
    .titulo.mt-5.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Clasificación de hallazgos según su origen

    p.mb-4 En el análisis de #[i software] para diversas empresas del área, los hallazgos suelen clasificarse en tres categorías:
    .row.justify-content-center.mb-5
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/Temas/tema1/img21.png' alt='AvatarTop')
          .tarjeta.BG033
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Hallazgos de datos (#[i data quality])]
              p.text-center.mb-0 Inconsistencias en formatos, errores de tipeo o duplicidad de registros que afectan la integridad de la información.
      .col-10.col-md-6.col-lg-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/Temas/tema1/img22.png' alt='AvatarTop')
          .tarjeta.BG033
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Hallazgos de lógica (#[i functional defects])]
              p.text-center.mb-0 Errores en fórmulas o macros que producen resultados incorrectos, como un cálculo de horas extra que excede la realidad.
      .col-10.col-md-6.col-lg-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/Temas/tema1/img23.png' alt='AvatarTop')
          .tarjeta.BG033
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Hallazgos de rendimiento (#[i non-functional])]
              p.text-center.mb-0 Procesos que, aunque funcionan, son ineficientes o insostenibles ante grandes volúmenes de datos.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 El informe de hallazgos como herramienta estratégica
    p.mb El producto final de la evaluación de calidad debe ser un informe técnico (en formato PDF para asegurar su integridad) que detalle el proceso de transformación de datos crudos a formatos óptimos. Este informe debe incluir:
    .row.justify-content-center.align-items-start.mb-4
      .col-lg-9
        .row
          .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-right")
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/Temas/tema1/img26.svg' alt="Imagen decorativa")
            h5.text-center Diagnóstico inicial
            p.text-center.mb-0 Estado de la calidad antes de la intervención (calidad del dataset).
          .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-right")
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/Temas/tema1/img27.svg' alt="Imagen decorativa")
            h5.text-center Estrategia de limpieza
            p.text-center.mb-0 Acciones tomadas para normalizar la información (ej. concatenación, ajuste de formatos).
          .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-left")
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/Temas/tema1/img28.svg' alt="Imagen decorativa")
            h5.text-center Validación de la solución
            p.text-center.mb-0 Explicación de cómo se asegura que la automatización o el modelo funciona correctamente.

      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/Temas/tema1/img24.svg', alt='Imagen decorativa lateral')

    p.mb-4 A continuación, se presenta la secuencia de estados que conforman la gestión de hallazgos, junto con las acciones que debe ejecutar el analista en cada etapa:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-6
        figure
          img(src="@/assets/curso/Temas/tema1/img25.png" alt="Persona con laptop")
      .col-lg-7
        .tarjeta.BG03.p-4
          ul.lista-ul
            li
              i.fas.fa-computer
              p.mb-0 #[b Identificado]
                br
                | Se registra la inconsistencia en los datos o la macro.
            li
              i.fas.fa-computer
              p.mb-0 #[b En análisis]
                br
                | Se utiliza el proceso de depuración para encontrar la causa raíz.
            li
              i.fas.fa-computer
              p.mb-0 #[b Corregido]
                br
                | Se aplica la técnica de normalización o ajuste de código necesaria.
            li
              i.fas.fa-computer
              p.mb-0 #[b Verificado]
                br
                | Se ejecuta la prueba de funcionalidad para validar el cierre.
           
       
    .row.justify-content-center
      .col-lg-10
        .tarjeta-cajon-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              figure
                img(src="@/assets/curso/Temas/tema1/img7.png" alt="Adornos flotantes")
            .col-lg-11
              p.mb-0 Documentar correctamente los hallazgos permite "actuar como si le estuviera presentando su trabajo al gerente del área", demostrando no solo qué hace la solución, sino por qué es fiable y consistente.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
