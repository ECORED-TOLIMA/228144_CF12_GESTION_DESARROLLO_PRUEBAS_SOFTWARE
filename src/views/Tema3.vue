<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Gestión del conocimiento en el desarrollo de software
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-5.mb-4.mb-md-0
        figure
          img(src="@/assets/curso/Temas/tema3/img1.png", alt="alt")
      .col-lg-8.col-md-7
        .tarjeta.BG03.p-5
          .row.align-items-center
            .col-3.col-sm-2.col-lg-2.mb-3.mb-sm-2
              figure
                img(src="@/assets/curso/Temas/tema3/img2.png", alt="Icono", style="width: 70px")
            .col-12.col-sm-10.col-lg-11
              p.mb-0 La Gestión del Conocimiento (GC) es el conjunto de procesos y prácticas para identificar, capturar, organizar, almacenar, compartir y aplicar el conocimiento generado en una organización. En proyectos de software, es clave para evitar repetir errores, acelerar el aprendizaje y mejorar continuamente la calidad del trabajo del equipo.
    p.mb La gestión del conocimiento se divide principalmente en dos categorías: 
    .row.justify-content-center
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/Temas/tema3/img3.png' alt='AvatarTop')
          .tarjeta.BG033
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Conocimiento tácito]
              p.text-center.mb-0 Es personal, reside en las personas y se manifiesta a través de experiencias e intuiciones difíciles de formalizar.
      .col-10.col-md-6.col-lg-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/Temas/tema3/img4.png' alt='AvatarTop')
          .tarjeta.BG033
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Conocimiento explícito]
              p.text-center.mb-0 Está debidamente documentado en manuales y bases de datos, lo que facilita su almacenamiento y distribución.
    br
    .row.justify-content-center
      .col-lg-10
        .tarjeta-cajon-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              figure
                img(src="@/assets/curso/Temas/tema1/img7.png" alt="Adornos flotantes")
            .col-9.col-md-10
              p.mb-0 Esta distinción es clave para transformar las habilidades individuales en activos organizacionales que puedan ser compartidos y consultados por todo el equipo de trabajo.
    br
    p.mb Para que esta información sea útil, debe seguir un ciclo del conocimiento continuo que comienza con la creación y captura de nuevas experiencias, seguido de una organización estructurada que permita encontrarlas fácilmente. Finalmente, el proceso se completa al compartir, aplicar y evaluar dicho conocimiento, asegurando que se utilice para resolver problemas, tomar mejores decisiones y mejorar constantemente los procesos internos de la organización.
    separador
    .titulo-segundo.color-acento-contenido
      h2 3.1 Modelos de gestión del conocimiento
    br
    p.mb La gestión del conocimiento se ha consolidado como un pilar estratégico para las organizaciones que buscan aprender, innovar y sostener ventajas competitivas en entornos complejos y cambiantes. Para comprender cómo el conocimiento se crea, circula y se aprovecha de manera sistemática, diversos autores han propuesto modelos conceptuales y operativos que orientan su gestión. Es así, como se presentan dos de los enfoques más reconocidos y complementarios:
    br
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5  A.Modelo SECI — Nonaka & Takeuchi (1995)
    br
    .row.justify-content-center.align-items-center.mb-5
      .col-4.col-lg-3.mb-3.mb-lg-0
        figure
          img.mx-auto.d-block(src="@/assets/curso/Temas/tema3/img5.png" alt="Imagen modelo SECI")
      .col-lg-9
        .tarjeta.BG03.p-4
          p.mb-0 El modelo SECI es el marco teórico más influyente en gestión del conocimiento. Describe cómo el conocimiento se crea y transforma en las organizaciones a través de cuatro procesos de conversión. La dinámica no es lineal sino en espiral: cada ciclo genera conocimiento de mayor nivel de complejidad y valor. Cada una de sus fases se detalla de la siguiente manera:
    br
    .row
      .col-1
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span Modelo SCI
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Fase del modelo
                th Descripción
                th Ejemplo en proyectos TI
            tbody
              tr
                td Socialización (T→T)
                td Tácito a Tácito. Transferencia de conocimiento por observación, práctica y convivencia en equipo.
                td Programación en pareja, programación en grupo, mentorías técnicas, revisiones de código presenciales.
              tr
                td Externalización (T→E)
                td Tácito a Explícito. Convertir experiencias y saber-hacer en documentos formales.
                td Redactar lecciones aprendidas, crear wikis técnicas, documentar ADR, grabar tutoriales.
              tr
                td Combinación (E→E)
                td Explícito a Explícito. Integrar y sistematizar conocimiento ya documentado.
                td Construir bases de conocimiento, compilar manuales técnicos, crear plantillas estándar.
              tr
                td Internalización (E→T)
                td Explícito a Tácito. Aprender haciendo a partir de documentación y casos documentados.
                td Seguir un manual hasta desarrollar habilidad práctica, estudiar proyectos anteriores.
    br
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5  B.Modelo de procesos organizacionales — Probst, Raub & Romhardt (2001)
    p.mb Este modelo pragmático identifica siete procesos interconectados de gestión del conocimiento. A diferencia del SECI (más teórico), ofrece una guía operacional de qué hacer en cada etapa para gestionar el conocimiento organizacional de forma efectiva y se explica de a continuación:
     br
    .row
      .col-1
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 4.
          span Modelo de procesos organizacionales
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th #
                th Proceso
                th Descripción y actividades clave
            tbody
              tr
                td 01
                td Identificación
                td ¿Qué conocimiento existe y qué falta? Mapas de conocimiento, inventarios de habilidades, análisis de brechas de competencias en el equipo.
              tr
                td 02
                td Adquisición
                td Obtener conocimiento externo: capacitaciones, consultoría, benchmarking con otras organizaciones, incorporación de expertos.
              tr
                td 03
                td Desarrollo
                td Crear nuevo conocimiento interno: I+D, prototipos, spikes de investigación en Scrum, laboratorios de innovación.
              tr
                td 04
                td Distribución
                td Compartir con quien lo necesita: talleres, comunidades de práctica, tech talks, rotación planificada de roles y proyectos.
              tr
                td 05
                td Utilización
                td Aplicar en el trabajo real: el conocimiento solo tiene valor cuando se usa. Indicador: frecuencia de consulta de la base de conocimiento.
              tr
                td 06
                td Retención
                td Evitar pérdida de conocimiento crítico: documentación, entrevistas de salida, planes de sucesión, mentorías entre expertos y novatos.
              tr
                td 07
                td Medición
                td Evaluar impacto: tiempo de onboarding, tasa de reúso, incidentes repetidos, satisfacción del equipo con los recursos disponibles.
    br
    .row.justify-content-center
      .col-lg-10
        .tarjeta-cajon-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              figure
                img(src="@/assets/curso/Temas/tema1/img7.png" alt="Adornos flotantes")
            .col-9.col-md-10
              p.mb-0 El análisis conjunto de ambos modelos permite obtener una visión integral: comprender cómo emerge el conocimiento y, al mismo tiempo, cómo gestionarlo de forma efectiva dentro de las organizaciones.
    separador
    .titulo-segundo.color-acento-contenido
      h2 3.2 Lecciones aprendidas en proyectos de software

    p.mb-4 Las lecciones aprendidas son el conocimiento adquirido durante la ejecución de un proyecto, tanto de los éxitos como de los errores y dificultades. Su correcta documentación y aplicación en proyectos futuros es uno de los activos más valiosos de una organización de software.

    .tarjeta--BMG06.px-5
      .row.justify-content-center.align-items-center.py-5.position-relative
        .col-lg-4.d-none.d-lg-block
          figure
            img(src="@/assets/curso/Temas/tema3/img6.png" alt="Persona con laptop")
        .col-lg-8.col-11
          SlyderF(columnas="col-md-6 col-lg-6 col-xl-4")
            .tarjeta.tarjeta-blanca.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/Temas/tema3/img7.svg' alt='Icono')
              h4.text-center Título descriptivo
              p.text-center Qué ocurrió, breve y claro.

            .tarjeta.tarjeta-blanca.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/Temas/tema3/img8.svg' alt='Icono')
              h4.text-center Área o categoría
              p.text-center Planificación, código, calidad, equipo, seguridad, etc.

            .tarjeta.tarjeta-blanca.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/Temas/tema3/img9.svg' alt='Icono')
              h4.text-center Descripción del problema
              p.text-center Qué pasó exactamente.
            .tarjeta.tarjeta-blanca.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/Temas/tema3/img10.svg' alt='Icono')
              h4.text-center Causas raíz identificadas
              p.text-center Por qué ocurrió (técnica de los 5 Porqués).
            .tarjeta.tarjeta-blanca.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/Temas/tema3/img11.svg' alt='Icono')
              h4.text-center Impacto en el proyecto
              p.text-center Tiempo, costo, calidad, satisfacción del cliente.
            .tarjeta.tarjeta-blanca.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/Temas/tema3/img12.svg' alt='Icono')
              h4.text-center Solución aplicada
              p.text-center Qué se hizo para resolverlo.
            .tarjeta.tarjeta-blanca.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/Temas/tema3/img13.svg' alt='Icono')
              h4.text-center Recomendación
              p.text-center Qué hacer para evitarlo en proyectos futuros.
            .tarjeta.tarjeta-blanca.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/Temas/tema3/img14.svg' alt='Icono')
              h4.text-center Responsable
              p.text-center Del registro y fecha.
    .BMG1.px-5
      p.mt-5.mb-4 La siguiente tabla presenta un conjunto de lecciones aprendidas obtenidas de experiencias recurrentes en proyectos de desarrollo de software. Su sistematización permite identificar problemas frecuentes y establecer recomendaciones prácticas para mejorar la gestión y ejecución de futuros proyectos:
    
      .row
        .col-1
        .col-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 5.
            span Lecciones aprendidas recurrentes en proyectos de desarrollo de software
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th Lección Identificada
                  th Área
                  th Descripción
                  th Recomendación
              tbody
                tr
                  td Falta de requisitos claros al inicio
                  td Planificación
                  td En el 60 % de proyectos con retrabajos costosos, los requisitos no estaban definidos ni validados con el cliente antes de comenzar el desarrollo.
                  td Invertir tiempo en análisis de requisitos. Usar historias de usuario con criterios de aceptación (Given-When-Then) validadas por el cliente antes de codificar.
                tr
                  td Estimaciones optimistas sin fundamento
                  td Planificación
                  td Las estimaciones basadas solo en la intuición sin datos históricos llevan a compromisos imposibles de cumplir y frustración del equipo y cliente.
                  td Usar Planning Poker, T-shirt sizing o datos de velocidad de sprints anteriores. Aplicar el principio de triplicar la estimación inicial para tareas desconocidas.
                tr
                  td No hacer pruebas durante el desarrollo
                  td Calidad
                  td Posponer pruebas para el final encontró defectos muy costosos. Los errores de integración no detectados a tiempo se multiplican exponencialmente.
                  td Adoptar TDD o escribir pruebas unitarias en paralelo con el desarrollo. Integrar análisis estático en el IDE desde el primer commit.
                tr
                  td Deuda técnica acumulada y no gestionada
                  td Código
                  td Proyectos que priorizaron velocidad sobre calidad sufrieron desaceleración severa en fases posteriores. Cada atajo se pagó con intereses compuestos.
                  td Registrar deuda técnica en el backlog con impacto estimado. Dedicar al menos el 20 % de la capacidad de cada sprint a reducirla.
                tr
                  td Comunicación deficiente en el equipo
                  td Equipo
                  td La falta de comunicación llevó a dos desarrolladores a implementar la misma funcionalidad de formas incompatibles, causando conflictos de integración costosos.
                  td Daily standups reales y eficientes. Canales de comunicación estructurados. Documentar decisiones técnicas importantes en registros ADR.
                tr
                  td Ausencia de control de versiones adecuado
                  td Código
                  td Equipos sin estrategia de ramas definida sufrieron sobreescrituras de código, pérdida de trabajo y conflictos de merge imposibles de resolver.
                  td Adoptar Git Flow o GitHub Flow desde el día uno. Definir política de commits descriptivos y code reviews obligatorios antes de cada merge.
                tr
                  td No documentar mientras se desarrolla
                  td Documentación
                  td La documentación generada al final es incompleta. Los desarrolladores olvidan detalles de implementación y justificaciones de las decisiones tomadas.
                  td Documentar en el mismo momento del desarrollo. Comentarios en código, README actualizado, ADR para decisiones arquitectónicas. Doc-as-Code en el repositorio.
                tr
                  td Ignorar la seguridad durante el desarrollo
                  td Seguridad
                  td Agregar seguridad al final es exponencialmente más costoso. Las vulnerabilidades encontradas tarde requieren cambios arquitectónicos profundos.
                  td Adoptar DevSecOps. Incluir Threat Modeling desde el diseño, validar inputs en cada capa y ejecutar OWASP ZAP en el pipeline CI/CD.
    br
    .row.justify-content-center
      .col-lg-10
        .tarjeta-cajon-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              figure
                img(src="@/assets/curso/Temas/tema1/img7.png" alt="Adornos flotantes")
            .col-9.col-md-10
              p.mb-0 #[b Práctica ágil:] en Scrum, las lecciones aprendidas se capturan en la retrospectiva del Sprint. La dinámica 'Start / Stop / Continue' es una de las más efectivas: ¿Qué se debe empezar a hacer? ¿Qué se debe dejar de hacer? ¿Qué se está haciendo bien y se debe continuar?
    separador
    .titulo-segundo.color-acento-contenido
      h2 3.3 Recomendaciones de buenas prácticas
    br
    p.mb En el siguiente pódcast se abordarán buenas prácticas clave en el desarrollo de software, orientadas a fortalecer la calidad, el aprendizaje continuo y la mejora de los procesos. A partir de ejemplos prácticos, se analizará cómo estas prácticas contribuyen a construir soluciones más confiables, sostenibles y alineadas con las necesidades de los usuarios y de la organización:
    br
    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/Temas/tema3/img15.png', alt='Ilustración de equipo trabajando en desarrollo de software')
        .tarjeta.p-4(style="background-color: #9ECFFF; border-radius: 0 0 20px 20px;")
          .tarjeta.bg-white.p-4.custom-audio-card
            TarjetaAudio.color-acento-botones(
              texto="Pódcast"
              :audio="require('@/assets/curso/Temas/audio/5.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    separador
    .titulo-segundo.color-acento-contenido
      h2 Herramientas para la gestión del conocimiento
    br
    p.mb Existen herramientas especializadas que facilitan la captura, organización y distribución del conocimiento en equipos de software. La mayoría son gratuitas o tienen planes accesibles para estudiantes y equipos pequeños. A continuación, una breve explicación de cada una:
    .row
      .col-1
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 6.
          span Herramientas del conocimiento
        .tabla-a.color-acento-contenido
          .tabla-a.color-acento-botones.mb-5
            table
              thead
                tr
                  th Herramienta
                  th Descripción
                  th Categoría
                  th Licencia
              tbody
                tr
                  td Confluence
                  td Wiki empresarial. Integración nativa con Jira y toda la suite Atlassian.
                  td Bases de conocimiento
                  td Empresarial
                tr
                  td Notion
                  td Wiki flexible y colaborativa, popular en startups. Versión gratuita generosa.
                  td Bases de conocimiento
                  td Freemium
                tr
                  td GitHub Wiki
                  td Wiki integrada en repositorios GitHub. Ideal para proyectos de código abierto.
                  td Doc-as-Code
                  td Open Source
                tr
                  td Obsidian
                  td Gestión de notas con Markdown y enlaces bidireccionales. Ideal para conocimiento personal.
                  td Bases de Conocimiento
                  td Freemium
                tr
                  td Miro
                  td Pizarra colaborativa virtual para retrospectivas y mapas de conocimiento.
                  td Retrospectivas
                  td Freemium
                tr
                  td EasyRetro
                  td Herramienta específica para retrospectivas ágiles de equipo. Simple y efectiva.
                  td Retrospectivas
                  td Freemium
                tr
                  td Slack / Teams
                  td Mensajería con canales temáticos de conocimiento, tips técnicos y recursos.
                  td Comunicación
                  td Freemium
                tr
                  td Loom
                  td Grabación de screencasts y videotutoriales asíncronos. Captura conocimiento visual.
                  td Captura tácito
                  td Freemium
                tr
                  td Moodle
                  td LMS Open Source. Estructura conocimiento en cursos y módulos.
                  td Formación
                  td Open Source
                tr
                  td Markdown + Git
                  td Documentación en texto plano versionada junto al código. Práctica estándar.
                  td Doc-as-Code
                  td Open Source
                tr
                  td MkDocs / Docusaurus
                  td Generadores de sitios de documentación a partir de Markdown con búsqueda integrada.
                  td Doc-as-Code
                  td Open Source
                tr
                  td ADR Tools
                  td Gestión de Architecture Decision Records. Registros de decisiones técnicas versionados.
                  td Decisiones
                  td Open Source
    br
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
