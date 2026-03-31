<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Planes de mejora
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Temas/tema4/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El plan de mejora es un instrumento de gestión que formaliza acciones, responsables y plazos para cerrar brechas de calidad, permitiendo que los hallazgos de las evaluaciones se traduzcan en respuestas operativas reales. Basado en normativas como la ISO 9001:2015 y el Ciclo PHVA de Deming (Planear, Hacer, Verificar, Actuar), este proceso es fundamental para la mejora continua y el alto desempeño en ingeniería de software, alineándose con marcos de trabajo como CMMI v2.0 e ISO/IEC 15504 (SPICE) para elevar la madurez de los procesos y productos del equipo.
    br
    p.mb Los siguientes son los tipos de acciones en un plan de mejora:
    br
    .row
      .col-lg-4.col-10.mx-auto.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/Temas/tema4/img2.png', alt='')        
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Correctivas")
            .col-12
              p Se orientan a eliminar la causa raíz de problemas que ya se han presentado. Buscan evitar que las no conformidades, fallos o desviaciones se repitan, mediante el análisis sistemático de lo ocurrido y la implementación de soluciones sostenibles.
          .row(titulo="Preventivas")
            .col-12
              p Están dirigidas a identificar y eliminar las causas de problemas potenciales antes de que ocurran. Se basan en la anticipación de riesgos, el análisis de escenarios y la aplicación de controles que reduzcan la probabilidad de fallos futuros.
          .row(titulo="De mejoramiento")
            .col-12
              p Tienen como objetivo incrementar el desempeño de procesos, productos o servicios más allá de los requisitos mínimos establecidos. Aprovechan oportunidades de optimización, innovación y aprendizaje continuo para generar mayor valor organizacional.
    br
    .row.justify-content-center
          .col-lg-10
            .tarjeta-cajon-secundario.p-4
              .row.justify-content-center.align-items-center
                .col-lg-1.d-none.d-lg-block
                  figure
                    img(src="@/assets/curso/Temas/tema1/img7.png" alt="Adornos flotantes")
                .col-lg-11
                  p.mb-0 #[b Clave:] un plan de mejora sin indicadores de verificación y sin responsables nominados, es solo una lista de buenos deseos. La diferencia entre un plan efectivo y uno inútil está en la concreción, el seguimiento y el compromiso real de los involucrados.
    separador
    .titulo-segundo.color-acento-contenido
      h2 4.1 Elaboración del plan de mejora

    p.mb-4 La elaboración es la fase de diseño del plan. Comprende identificar las brechas, analizar sus causas raíz y estructurar las acciones de respuesta con todos sus atributos. Un plan bien elaborado hace que la ejecución y el seguimiento sean viables y efectivos.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Pasos para elaborar el plan

    p.mb-4 A continuación, se describen los pasos para elaborar un plan de mejora de forma estructurada y sistemática. Estos pasos permiten transformar hallazgos y brechas identificadas en acciones concretas, medibles y asignables, facilitando su ejecución, seguimiento y evaluación de resultados:
    .tarjeta--BMG05
      .row.justify-content-center
        .col-lg-10
          LineaTiempoE.color-primario
            //- PASO 1
            .row(titulo="Paso 1")
              .col-lg-2
                figure
                  img(src='@/assets/curso/Temas/tema4/img3.svg', alt='Identificar brecha')
              .col-lg-10.mb-4.mb-lg-0
                h3 Identificar la brecha o no conformidad
                p Partir de los resultados de una evaluación: auditoría, retrospectiva, revisión de métricas o queja del cliente. Describir el hallazgo con precisión y evidencia objetiva.

            //- PASO 2
            .row(titulo="Paso 2")
              .col-lg-2.mb-.mb-lg-0
                figure
                  img(src='@/assets/curso/Temas/tema4/img4.svg', alt='Causa raíz')
              .col-lg-10
                h3 Analizar la causa raíz
                p Aplicar técnicas de análisis causal: 5 Porqués, diagrama de Ishikawa, FMEA o árbol de fallas. No actuar sobre síntomas sino sobre causas sistémicas.

            //- PASO 3
            .row(titulo="Paso 3")
              .col-lg-2
                figure
                  img(src='@/assets/curso/Temas/tema4/img5.svg', alt='Objetivo SMART')
              .col-lg-10.mb-4.mb-lg-0
                h3 Definir el objetivo de mejora SMART
                p Específico, medible, alcanzable, relevante y con Tiempo definido. Ejemplo: "Reducir densidad de defectos de 3 a 0.8 bugs/KLOC en 3 meses".

            //- PASO 4
            .row(titulo="Paso 4")
              .col-lg-2.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/Temas/tema4/img6.svg', alt='Acciones concretas')
              .col-lg-10
                h3 Proponer acciones concretas
                p Para cada causa raíz, definir al menos una acción. Usar verbos en infinitivo: implementar, capacitar, automatizar, establecer.

            //- PASO 5
            .row(titulo="Paso 5")
              .col-lg-2
                figure
                  img(src='@/assets/curso/Temas/tema4/img7.svg', alt='Responsables')
              .col-lg-10.mb-4.mb-lg-0
                h3 Asignar responsables y recursos
                p Nominar un Accountable (A) y un Responsible (R) para cada acción. Estimar recursos: tiempo, herramientas, capacitación, presupuesto.

            //- PASO 6
            .row(titulo="Paso 6")
              .col-lg-2.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/Temas/tema4/img8.svg', alt='Indicadores')
              .col-lg-10
                h3 Establecer indicadores y fechas
                p Definir el KPI que medirá el éxito y la fecha límite de cumplimiento. El indicador debe ser verificable con datos objetivos.

            //- PASO 7
            .row(titulo="Paso 7")
              .col-lg-2
                figure
                  img(src='@/assets/curso/Temas/tema4/img9.svg', alt='Socializar')
              .col-lg-10.mb-4.mb-lg-0
                h3 Documentar y socializar
                p El plan debe ser aprobado por el Accountable (A), socializado con todos los involucrados y almacenado en un lugar accesible. Un plan que nadie conoce no se ejecuta.
    br
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-1.order-lg-2
        .cajon.color-primario.p-4
          .row
            .col-lg-10.mb-4.mb-lg-0.order-1.order-lg-2
                p.mb-0 La siguiente tabla presenta una plantilla estándar para la elaboración y gestión del plan de mejora. Su estructura permite registrar de forma ordenada cada acción, asegurar la trazabilidad entre hallazgos, causas y soluciones, y facilitar el seguimiento, control y evaluación de resultados mediante responsables, indicadores y evidencias objetivas:
            .col-lg-2.col-10.mx-auto.mb-4.mb-lg-0.order-2.order-lg-1
              figure
                img(src='@/assets/curso/Temas/tema4/img11.png', alt='')        
      .col-4.col-lg-3.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img.mx-auto.d-block(src="@/assets/curso/Temas/tema4/img10.png" alt="Imagen modelo SECI")
    br
    .row
      .col-1
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 7.
          span Plantilla estándar del plan de mejora
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Campo
                th Descripción
                th Ejemplo
            tbody
              tr
                td ID de la acción
                td Identificador único.
                td AC-001, AP-003, AM-007.
              tr
                td Hallazgo / Brecha
                td No conformidad o brecha identificada.
                td Cobertura de pruebas en 35 % (meta: 70 %).
              tr
                td Causa raíz
                td Resultado del análisis causal (5 porqués).
                td Sin política de pruebas en el proceso.
              tr
                td Tipo de acción
                td Correctiva / Preventiva / Mejoramiento.
                td Correctiva.
              tr
                td Acción propuesta
                td Qué se va a hacer, en concreto.
                td Implementar TDD como práctica obligatoria.
              tr
                td Responsible (R)
                td Quién ejecuta la acción.
                td Desarrollador líder del módulo.
              tr
                td Accountable (A)
                td Quién responde por el resultado.
                td Líder de proyecto.
              tr
                td Consulted (C)
                td A quién se consulta.
                td Arquitecto de software.
              tr
                td Informed (I)
                td A quién se informa.
                td Cliente, dirección del proyecto.
              tr
                td Fecha de inicio
                td Fecha programada de inicio.
                td 2025-03-01.
              tr
                td Fecha límite
                td Fecha máxima de cierre.
                td 2025-04-30.
              tr
                td Recursos
                td Recursos necesarios para ejecutar.
                td 8 horas de capacitación, SonarQube.
              tr
                td Indicador de éxito
                td KPI que confirma el cumplimiento.
                td Cobertura ≥ 70 % en sprint review.
              tr
                td Estado
                td Semáforo de avance actual.
                td En progreso.
              tr
                td Evidencia de cierre
                td Dato que demuestra cumplimiento.
                td Reporte JaCoCo con cobertura 74 %.
    br
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Técnica de los 5 Porqués — Ejemplo aplicado
    br
    p A continuación, se presenta un ejemplo aplicado de la Técnica de los 5 Porqués, con el fin de ilustrar su uso práctico en la identificación de la causa raíz de un problema recurrente en proyectos de software y la definición de una acción correctiva concreta y accionable:
    br
    .row.justify-content-center.mb-5
      .col-lg-8
        LineaTiempoD.color-primario
          div(numero="1" titulo="Problema")
            p Alta tasa de defectos en producción.
              p.mb-1 ° ¿Por qué hay defectos en producción? Porque el código no fue probado suficientemente antes del despliegue.
              p.mb-1 ° ¿Por qué no fue probado? Porque no había tiempo, los sprints se comprimieron.
              p.mb-1 ° ¿Por qué se comprimieron? Porque las estimaciones iniciales fueron muy optimistas.
              p.mb-1 ° ¿Por qué fueron optimistas? Porque no se usaron datos históricos de velocidad del equipo.
              p.mb-1 ° ¿Por qué no se usaron datos históricos? Porque no existía un registro sistemático de métricas de velocidad. ← Causa raíz
          div(numero="2" titulo="Acción correctiva resultante")
            p Implementar tablero de métricas de velocidad en Jira y usarlo obligatoriamente en la planificación de cada sprint.
              p.mb-1 ° Responsable: Scrum master. 
              p.mb-1 ° Fecha límite: próxima planificación de sprint.

          div(numero="3" titulo="Error frecuente")
            p Confundir síntomas con causas raíz.
              p.mb-1 ° “El sistema tiene errores” es un síntoma. 
              p.mb-1 ° “No hay proceso formal de revisión de código antes del merge” es una causa raíz accionable. 
              p.mb-1 ° El plan debe atacar siempre la causa raíz.
            
      .col-7.col-lg-4
        figure
          img(src="@/assets/curso/Temas/tema4/img12.png", alt="Imagen decorativa sobre automatización")
    separador
    .titulo-segundo.color-acento-contenido
      h2 4.2 Acciones correctivas
    br
    .row.justify-content-center.align-items-center.mb-5
      .col-4.col-lg-3.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img.mx-auto.d-block(src="@/assets/curso/Temas/tema4/img13.png" alt="Imagen modelo SECI")
      .col-lg-9.order-1.order-lg-2
        .cajon.color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-10.mb-4.mb-lg-0.order-2.order-lg-1
                p.mb-0 Las acciones correctivas son medidas esenciales que se aplican tras la detección de un defecto o falla, exigiendo un análisis de causa raíz (ACR) obligatorio para evitar soluciones superficiales. A diferencia de una simple corrección puntual, estas acciones buscan eliminar el origen del problema y requieren una verificación de eficacia posterior para confirmar que la incidencia no se repita. Su implementación garantiza que se modifiquen los procesos necesarios para impedir que fallos similares vuelvan a afectar la producción en el futuro.
            .col-lg-2.col-10.mx-auto.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/Temas/tema4/img14.png', alt='')        
    br
    p Basado en lo anterior, la siguiente tabla contiene acciones aplicadas a ejemplos reales:
    br
    .row
      .col-1
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 8.
          span Ejemplos de acciones correctivas en proyectos de software
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th ID
                th Problema
                th Causa raíz
                th Acción correctiva
                th Impacto
                th Plazo
            tbody
              tr
                td AC-001
                td Alta tasa de defectos en producción (5 bugs/KLOC).
                td Sin proceso formal de revisión de código ni pruebas automatizadas.
                td Implementar code review obligatorio (mínimo 1 revisor) y pipeline CI con pruebas unitarias antes de cada merge a rama principal.
                td Alta
                td 30 días
              tr
                td AC-002
                td Retrasos recurrentes en entregas de sprint.
                td Estimaciones sin base histórica — no se usaban datos de velocidad real del equipo.
                td Implementar tablero de métricas de velocidad en Jira y usar Planning Poker con datos históricos en cada planificación de sprint.
                td Alta
                td Próximo sprint
              tr
                td AC-003
                td Vulnerabilidades de seguridad críticas en producción.
                td Sin análisis de seguridad integrado en el pipeline de desarrollo.
                td Integrar OWASP ZAP y análisis estático de seguridad (SonarQube) en el CI/CD. Sin green en seguridad, no hay deploy a producción.
                td Crítica
                td 15 días
              tr
                td AC-004
                td Pérdida de código en conflictos de merge.
                td Sin estrategia de ramas definida ni política de commits del equipo.
                td Adoptar GitHub Flow: main protegido + feature branches + pull requests obligatorios. Capacitar al equipo en sesión de 2 horas.
                td Media
                td 1 semana
              tr
                td AC-005
                td Documentación técnica inexistente al cierre.
                td La documentación no era parte del proceso ni del Definition of Done.
                td Actualizar Definition of Done: ninguna historia se cierra sin README actualizado y ADR si hubo decisión arquitectónica.
                td Media
                td Próximo sprint
    br
    p Se detalla una diferencia clave:  
    br
    .row.justify-content-center.align-items-center.py-5
      .col-lg-7
        .cajon.color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-12
              .d-flex.align-items-start.mb-4
                img.me-3.mt-1(src='@/assets/curso/Temas/tema4/img15.svg' alt='Icono' style="width: 25px;")
                div
                  h4 Corrección
                  p Resolves the problem. Example: "se arregló el #[i bug]".
              .d-flex.align-items-start
                img.me-3.mt-1(src='@/assets/curso/Temas/tema4/img15.svg' alt='Icono' style="width: 25px;")
                div
                  h4 Acción correctiva
                  p Elimina lo que causó el #[i bug] sistemáticamente. #[i Example: "se implementó revisión de código obligatoria y pruebas de regresión automatizadas para evitar que este tipo de error vuelva a llegar a producción"].
      .col-lg-3
          figure
            img.mx-auto.d-block(src='@/assets/curso/Temas/tema4/img16.png', alt='Ilustración de persona trabajando con engranajes y computadoras')
    separador
    .titulo-segundo.color-acento-contenido
      h2 4.3 Acciones preventivas
    br
    p Las acciones preventivas eliminan causas de no conformidades potenciales, antes de que ocurran. Se basan en análisis de riesgo, lecciones aprendidas de proyectos anteriores y tendencias de indicadores que aún no son críticos, pero muestran deterioro.
    br
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Acciones de mejoramiento
    br
    .row.justify-content-center.align-items-center.mb-5
      .col-4.col-lg-3.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img.mx-auto.d-block(src="@/assets/curso/Temas/tema4/img17.png" alt="Imagen modelo SECI")
      .col-lg-9.order-1.order-lg-2
        p.mb-2 Las acciones de mejoramiento van más allá del cumplimiento mínimo, ya que buscan innovar, automatizar, optimizar y elevar el estándar de desempeño; además, no responden a un problema sino a una oportunidad identificada para ser más eficientes o eficaces.
        .cajon.color-primario.p-4
          p.mb-0 Con el fin de clarificar el rol de las acciones de mejoramiento dentro de un plan de mejora, a continuación, se presentan dos tablas de apoyo. La primera compara las acciones correctivas, preventivas y de mejoramiento, según distintas dimensiones clave; mientras que la segunda ilustra ejemplos concretos de acciones preventivas y de mejoramiento aplicadas en contextos reales de proyectos de software:
                 
    br
    .row
      .col-1
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 9.
          span Comparativo acciones correctivas, preventiva y de mejoramiento
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Dimensión
                th Correctiva
                th Preventiva
                th Mejoramiento
            tbody
              tr
                td #[b Momento de aplicación]
                td Después del problema ocurrido.
                td Antes de que el riesgo ocurra.
                td Sin problema identificado.
              tr
                td #[b Disparador]
                td No conformidad o defecto real.
                td Riesgo o tendencia negativa detectada.
                td Oportunidad de optimización.
              tr
                td #[b Base de análisis]
                td Causa raíz del problema ocurrido.
                td Análisis de riesgos y lecciones aprendidas.
                td Benchmarking y mejores prácticas.
              tr
                td #[b Objetivo]
                td Eliminar causa para que no se repita.
                td Evitar que el riesgo se materialice.
                td Elevar el nivel de desempeño.
              tr
                td #[b Urgencia]
                td Alta (ya hay impacto real).
                td Media (riesgo latente).
                td Baja-media (inversión en mejora).
              tr
                td #[b Ejemplo concreto]
                td Automatizar pruebas tras fallo en producción.
                td Checklist de seguridad pre-lanzamiento.
                td Implementar DevOps para acelerar CI/CD.
    br
    .row
      .col-1
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 10.
          span  Ejemplos de acciones preventivas y de mejoramiento
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Tipo
                th ID
                th Situación
                th Acción propuesta
                th Beneficio esperado
            tbody
              tr
                td Preventiva
                td AP-001
                td El líder técnico único concentra todo el conocimiento del sistema.
                td Programa de rotación de roles y #[i pair programming] semanal para distribuir conocimiento entre al menos 3 integrantes del equipo.
                td Elimina el #[i bus factor] — el equipo no se paraliza si alguien sale.
              tr
                td Preventiva
                td AP-002
                td Complejidad ciclomática, subió de 6 a 9 en 2 #[i sprints] (tendencia negativa).
                td Regla en SonarQube: #[i build failed] si función supera CC=10. Refactorizar funciones actuales con CC ≥ 10.
                td Previene código imposible de mantener antes de que sea deuda crítica.
              tr
                td Preventiva
                td AP-003
                td Sin plan de continuidad ante falla del servidor de producción.
                td Implementar #[i backup] automático diario y proceso de recuperación ante desastres (RTO < 4 horas). Documentar y probar el plan.
                td Garantiza disponibilidad ante incidentes graves.
              tr
                td Mejoramiento
                td AM-001
                td El despliegue manual toma 3 horas y genera errores humanos frecuentes.
                td #[i Pipeline] CI/CD completo con GitHub Actions: despliegue automático a #[i staging] en cada #[i merge] + producción con aprobación manual.
                td Reduce despliegue de 3 horas a 8 minutos, elimina errores manuales.
              tr
                td Mejoramiento
                td AM-002
                td El equipo no tiene visibilidad del estado de calidad del proyecto en tiempo real.
                td #[i Dashboard] de métricas en SonarQube + tablero Kanban público en Jira visible para equipo y #[i stakeholders].
                td Aumenta transparencia, agiliza decisiones técnicas.
              tr
                td Mejoramiento
                td AM-003
                td Las retrospectivas no generan mejoras por falta de seguimiento de compromisos.
                td Tablero de “Compromisos de Retrospectiva” en Notion: cada ítem con responsable, fecha y evidencia. Revisión en el siguiente #[i sprint review].
                td Convierte retrospectivas en motor real de mejora continua.
    br
    .row.justify-content-center
          .col-lg-10
            .tarjeta-cajon-secundario.p-4
              .row.justify-content-center.align-items-center
                .col-lg-1.d-none.d-lg-block
                  figure
                    img(src="@/assets/curso/Temas/tema1/img7.png" alt="Adornos flotantes")
                .col-lg-11
                  p.mb-0 #[b Fuentes para identificar preventivas y mejoramiento:] análisis de riesgos (FMEA, matriz de riesgos), benchmarking con la industria, sugerencias del equipo en retrospectivas, auditorías internas proactivas y revisión de tendencias de métricas de calidad.
    separador
    .titulo-segundo.color-acento-contenido
      h2 4.4 Responsables del plan de mejora
    br
    p Asignar responsables con claridad es uno de los factores más críticos para el éxito de un plan de mejora. Toda acción sin un responsable nominado tiene probabilidad cercana a cero de ejecutarse. La matriz RACI define con precisión quién hace qué (roles) de la siguiente manera:
    .row.justify-content-center
      .col-lg-10
        .d-none.d-lg-block
          ImagenInfografica.color-primario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/Temas/tema4/img18.png', alt='Infografía de matriz RACI')
                

            .tarjeta.color-acento-botones.p-3(x="16%" y="23%" numero="+")
              .h5.mb-2 R — Responsible
              p Quien ejecuta la acción directamente. Puede haber más de uno. Debe tener las competencias técnicas y el tiempo disponible.

            .tarjeta.color-acento-botones.p-3(x="84%" y="23%" numero="+")
              .h5.mb-2 A — Accountable
              p Quien responde por el resultado final. Solo puede haber uno por acción. Aprueba el trabajo del Responsible y rinde cuentas ante la dirección.

            .tarjeta.color-acento-botones.p-3(x="16%" y="71%" numero="+")
              .h5.mb-2 C — Consulted
              p A quien se consulta antes o durante la ejecución. Provee criterios especializados. Comunicación bidireccional.
            
            .tarjeta.color-acento-botones.p-3(x="84%" y="71%" numero="+")
              .h5.mb-2 I — Informed
              p A quien se informa del avance y resultados. Comunicación unidireccional. No participa en la ejecución.
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/Temas/tema4/img18_1.png', alt='Matriz RACI para dispositivos móviles')
    br
    .row.justify-content-center.align-items-center.py-5
      .col-lg-9
        .cajon.color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-10.mb-4.mb-lg-0.order-1.order-lg-2
                p.mb-0 Con base en la definición de roles establecida por la matriz RACI, la siguiente tabla muestra la asignación de responsabilidades para las principales actividades del plan de mejora de software. Esta matriz permite visualizar de manera explícita quién ejecuta, quién responde, a quién se consulta y a quién se informa en cada acción, reduciendo ambigüedades y fortaleciendo la gobernanza del plan:
            .col-lg-2.col-10.mx-auto.mb-4.mb-lg-0.order-2.order-lg-1
              figure
                img(src='@/assets/curso/Temas/tema4/img19.png', alt='')  
      .col-lg-3
          figure
            img.mx-auto.d-block(src='@/assets/curso/Temas/tema4/img20.png', alt='Ilustración de persona trabajando con engranajes y computadoras')        
    br
    .row
      .col-1
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 11.
          span Matriz RACI — Plan de mejora de software
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Actividad / Acción
                th Líder proyecto
                th Desarrollador senior
                th Desarrollador junior
                th QA / Tester
                th Arquitecto de software
                th Cliente
            tbody
              tr
                td Elaborar plan de mejora.
                td A
                td R
                td C
                td C
                td C
                td I
              tr
                td Análisis de causa raíz.
                td A
                td R
                td C
                td R
                td C
                td I
              tr
                td Ejecutar acción correctiva.
                td A
                td R
                td R
                td C
                td C
                td I
              tr
                td Implementar pruebas automatizadas.
                td C
                td A
                td R
                td R
                td C
                td I
              tr
                td Revisar código (#[i code review]).
                td I
                td A
                td R
                td C
                td C
                td —
              tr
                td Ejecutar pruebas de regresión.
                td C
                td C
                td R
                td A
                td I
                td I
              tr
                td Configurar #[i pipeline] CI/CD.
                td C
                td A
                td R
                td C
                td R
                td I
              tr
                td Verificar eficacia de acciones.
                td A
                td R
                td C
                td R
                td I
                td C
              tr
                td Generar informe de avance.
                td A
                td R
                td I
                td I
                td I
                td C
              tr
                td Aprobar cierre del plan.
                td A
                td C
                td I
                td I
                td C
                td R
    br
    p Con el fin de profundizar en las responsabilidades asociadas a cada rol del plan de mejora, la siguiente imagen describe de manera sintética las funciones clave de cada uno. Esta descripción permite comprender cómo cada rol contribuye de forma específica a la planificación, ejecución, seguimiento y validación de las acciones de mejora definidas:
    br
    .row.justify-content-center.align-items-center
      .col-10
        .titulo-sexto.color-primario.mb-3
          h5 Figura 2.
          span Perfiles de responsables en proyectos desarrollo de software
        figure
          picture
            source(media="(min-width: 992px)" srcset="@/assets/curso/Temas/tema4/img21.svg")
            img(src="@/assets/curso/Temas/tema4/img21_1.svg" alt="Adornos flotantes")
    br
    .row.justify-content-center
      .col-lg-10
        .tarjeta-cajon-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              figure
                img(src="@/assets/curso/Temas/tema1/img7.png" alt="Adornos flotantes")
            .col-lg-11
              p.mb-0 #[b Regla de oro RACI:]  una acción debe tener exactamente un Accountable (A). Si hay más de uno, la responsabilidad se diluye y en la práctica nadie se siente verdaderamente responsable del resultado final.
    separador
    .titulo-segundo.color-acento-contenido
      h2 4.5 Verificación y seguimiento
    br
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-5.mb-4.mb-md-0
        figure
          img(src="@/assets/curso/Temas/tema4/img22.png", alt="alt")
      .col-lg-9.col-md-7
        .cajon.color-primario.p-3
          .row.justify-content-center.align-items-center
            .col-lg-10.mb-4.mb-lg-0.order-1.order-lg-2
                p.mb-0 La verificación comprueba que las acciones se ejecutaron y que produjeron el resultado esperado. El seguimiento es el proceso continuo de monitoreo del avance. Sin esta fase, el plan de mejora es solo papel: los resultados reales solo existen si se miden y documentan con evidencia objetiva.
            .col-lg-2.col-10.mx-auto.mb-4.mb-lg-0.order-2.order-lg-1
              figure
                img(src='@/assets/curso/Temas/tema4/img19.png', alt='')  
        p.mb-2 Los indicadores clave de seguimiento (KPIs) del plan establecen metas rigurosas para garantizar la calidad, exigiendo que al menos el 90 % de las acciones se completen a tiempo y que la densidad de fallos sea inferior a 1 defecto/KLOC. La eficacia técnica se mide mediante una cobertura de pruebas unitarias ≥ 70 % con JaCoCo, una duplicación de código < 5 % en SonarQube y la erradicación total de la recurrencia en no conformidades críticas. Finalmente, el cumplimiento administrativo requiere que el 100 % de las acciones cuente con su respectiva evidencia de cierre documentada, asegurando un proceso de mejora totalmente trazable y exitoso.
    p Estados de avance o escala de semáforo, se presenta la siguiente imagen que detalla el estado de cada acción, junto a su criterio y la acción requerida en cada uno:
    .row.justify-content-center
      .col-lg-10
        .d-none.d-lg-block
          ImagenInfografica.color-primario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/Temas/tema4/img23.svg', alt='Infografía de matriz RACI')
                

            .tarjeta.color-acento-botones.p-3(x="64%" y="16%" numero="+")
              .h5.mb-2 Ejecutada, evidencia disponible, indicador cumplido.
              p Documentar y cerrar. Estandarizar si aplica.

            .tarjeta.color-acento-botones.p-3(x="64%" y="31%" numero="+")
              .h5.mb-2 niciada, dentro del plazo, avance ≥ 50 %
              p Continuar. Verificar recursos disponibles.

            .tarjeta.color-acento-botones.p-3(x="64%" y="46%" numero="+")
              .h5.mb-2 Avance < 50 % con menos del 30 % del tiempo restante.
              p Escalar al Accountable (A). Revisar plan y recursos.
            
            .tarjeta.color-acento-botones.p-3(x="64%" y="62%" numero="+")
              .h5.mb-2 Plazo superado sin completar la acción
              p Análisis inmediato. Reprogramar con justificación.
            
            .tarjeta.color-acento-botones.p-3(x="64%" y="77%" numero="+")
              .h5.mb-2 No viable o el contexto cambió significativamente.
              p Documentar motivo. Evaluar acción alternativa.
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/Temas/tema4/img23_1.png', alt='Matriz RACI para dispositivos móviles')
    br
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Tipos de evidencias de verificación
    br
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Temas/tema4/img24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Para garantizar la trazabilidad de un plan de mejora, es fundamental recopilar evidencias técnicas y administrativas sólidas. Estas incluyen los reportes de herramientas como SonarQube para deuda técnica o JaCoCo para cobertura, junto con capturas de pantalla de los dashboards CI/CD en verde y dashboards de métricas que demuestren un impacto medible. Asimismo, se deben adjuntar actas de reuniones, checklists de verificación firmados por el líder de QA y los enlaces a los Pull Requests en GitHub o GitLab, los cuales sirven como prueba directa de la implementación técnica y su respectiva revisión de código.
    br
    .row.justify-content-center.align-items-center.py-5
      .col-lg-9
        p.mb-0 El éxito de estas acciones depende de una frecuencia de seguimiento rigurosa: las tareas críticas requieren un control semanal, mientras que las de impacto medio se revisan de forma quincenal. Mensualmente, se debe realizar una revisión formal del plan completo con un informe escrito dirigido a la dirección, culminando con una verificación de eficacia final al cierre de cada actividad. Este proceso asegura que cada mejora no solo se ejecute, sino que cumpla con el indicador de éxito establecido y esté debidamente documentada en plataformas como Jira o Confluence.
      .col-lg-3
          figure
            img.mx-auto.d-block(src='@/assets/curso/Temas/tema4/img25.png', alt='Ilustración de persona trabajando con engranajes y computadoras')        
    br
    .row.justify-content-center
      .col-lg-10
        .tarjeta-cajon-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              figure
                img(src="@/assets/curso/Temas/tema1/img7.png" alt="Adornos flotantes")
            .col-lg-11
              p.mb-0 #[b Buena práctica:] el seguimiento tardío convierte problemas solucionables en incumplimientos definitivos. Detectar que una acción está “En riesgo” con 3 semanas de anticipación, permite tomar medidas correctivas. Detectarlo el día del vencimiento no permite ninguna acción.
</template>

<script>
export default {
  name: 'Tema4',
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
