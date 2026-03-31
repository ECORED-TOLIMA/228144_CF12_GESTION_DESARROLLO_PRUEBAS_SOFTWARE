<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Evaluación de requisitos no funcionales
    br
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Temas/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Definen el "cómo" opera el sistema, a diferencia de los requisitos funcionales que dictan el "qué" hace. En el desarrollo de soluciones de software para la gestión estratégica de información, la calidad no es solo el resultado, sino la robustez de la arquitectura que lo soporta.
    br
    p.mb A continuación, se detallan los criterios técnicos para evaluar estos requisitos:
    br
    TabsA.color-acento-botones.mb-4
      .tarjeta.color-acento-botones--borde.p-4(titulo="Seguridad")
        .row.align-items-center
          .col-lg-4.col-10.mx-auto.mb-4.mb-lg-0.order-1.order-lg-2
            figure
                img(src="@/assets/curso/Temas/tema2/img2.png" alt="Adornos flotantes")
          .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
            p La seguridad garantiza la protección de los datos contra accesos no autorizados o alteraciones accidentales. La gestión de la seguridad en el manejo de datos se fundamenta en garantizar la integridad y cifrado de los archivos fuente para evitar alteraciones durante la importación, junto con un estricto control de acceso que proteja la estructura de las soluciones y el código frente a manipulaciones de terceros. Estas medidas son pilares de una gestión de riesgos proactiva, orientada a identificar y mitigar posibles fallos de procesamiento o fugas de información que comprometan la operatividad y la reputación institucional.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Usabilidad")
        .row.align-items-center
          .col-lg-3.col-10.mx-auto.mb-4.mb-lg-0.order-1.order-lg-2
            figure
                img(src="@/assets/curso/Temas/tema2/img3.png" alt="Adornos flotantes")
          .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
            p Evalúa qué tan fácil es para el usuario final (como un gerente de operaciones) interactuar con la solución. La interfaz de usuario (UX) se optimiza mediante un panel de control con botones descriptivos y una visualización clara que utiliza gráficos adecuados y segmentadores (slicers) para filtrar datos intuitivamente. El objetivo principal es la simplicidad, permitiendo que el usuario final obtenga respuestas clave del negocio de forma directa y sin necesidad de conocimientos técnicos profundos.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Accesibilidad")
        .row.align-items-center
          .col-lg-3.col-10.mx-auto.mb-4.mb-lg-0.order-1.order-lg-2
            figure
                img(src="@/assets/curso/Temas/tema2/img4.png" alt="Adornos flotantes")
          .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
            p Asegura que la solución sea utilizable por el mayor número de personas, independientemente de sus capacidades técnicas. La estandarización mediante formatos consistentes y etiquetas claras en gráficos es fundamental para garantizar una lectura ágil de los indicadores en cualquier dashboard. Además, el diseño debe considerar el soporte multi-dispositivo, asegurando que las soluciones sean adaptables y funcionales tanto en herramientas de escritorio como en plataformas LMS y entornos virtuales de aprendizaje.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Portabilidad")
        .row.align-items-center
          .col-lg-3.col-10.mx-auto.mb-4.mb-lg-0.order-1.order-lg-2
            figure
                img(src="@/assets/curso/Temas/tema2/img5.png" alt="Adornos flotantes")
          .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
            p Se refiere a la capacidad de una solución de software para ejecutarse y mantenerse funcional en distintos entornos tecnológicos sin requerir modificaciones significativas. En el contexto de soluciones basadas en hojas de cálculo y automatización, este criterio implica garantizar la compatibilidad entre diferentes versiones del software, sistemas operativos y configuraciones de hardware. Para ello, se prioriza el uso de funciones estándar, la correcta gestión de rutas relativas, la eliminación de dependencias locales y la validación de macros en entornos controlados. Una solución portable reduce los riesgos asociados a la migración, facilita el despliegue en distintos equipos o sedes y asegura la continuidad operativa, incluso cuando la herramienta es transferida entre usuarios, áreas o plataformas institucionales.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Tiempos de respuesta")
        .row.align-items-center
          .col-lg-3.col-10.mx-auto.mb-4.mb-lg-0.order-1.order-lg-2
            figure
                img(src="@/assets/curso/Temas/tema2/img6.png" alt="Adornos flotantes")
          .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
            p Mide la eficiencia del sistema bajo condiciones de operación normal y picos de carga. La optimización de procesos busca una reducción drástica en los tiempos de ejecución, logrando transformar tareas manuales de varias horas en procesos de pocos segundos, mediante la automatización. Esta eficiencia debe acompañarse de un alto rendimiento con grandes volúmenes de datos, asegurando la escalabilidad y velocidad de respuesta de las macros y modelos a medida que la información crece.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Adaptabilidad")
        .row.align-items-center
          .col-lg-3.col-10.mx-auto.mb-4.mb-lg-0.order-1.order-lg-2
            figure
                img(src="@/assets/curso/Temas/tema2/img7.png" alt="Adornos flotantes")
          .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
            p La adaptabilidad en el diseño de software es la capacidad de un sistema para evolucionar y ajustarse de manera eficiente a cambios en el entorno, los requisitos del usuario o las innovaciones tecnológicas sin comprometer su integridad. Un diseño adaptable se fundamenta en una arquitectura modular y el uso de patrones de diseño que reducen el acoplamiento, permitiendo que nuevas funcionalidades se integren con facilidad y que el software sea escalable ante el crecimiento de la demanda. Esta cualidad no solo extiende el ciclo de vida del producto, sino que también optimiza el mantenimiento y garantiza que la solución siga siendo funcional y competitiva en un mercado digital en constante transformación.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Confiabilidad")
        .row.align-items-center
          .col-lg-3.col-10.mx-auto.mb-4.mb-lg-0.order-1.order-lg-2
            figure
                img(src="@/assets/curso/Temas/tema2/img8.png" alt="Adornos flotantes")
          .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
            p La fiabilidad del sistema garantiza que la automatización realice sus funciones bajo condiciones específicas con una consistencia total, eliminando la variabilidad y los errores de copiado manual. Este nivel de precisión se alcanza mediante una rigurosa planificación y documentación de los pasos lógicos (algoritmos), lo que asegura resultados idénticos en cada ejecución y una estructura mucho más robusta que cualquier proceso basado en la improvisación
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5  Evaluación de hallazgos en RNF

    p.mb-4 Al documentar hallazgos en estas áreas, el analista debe registrar no solo el error funcional, sino también la deficiencia en el rendimiento o la usabilidad. Por ejemplo, un reporte que genera datos correctos, pero tarda 20 minutos en procesarse tiene un hallazgo crítico de tiempo de respuesta.
   
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5  Verificación de calidad

    p.mb-4 Marca cada criterio cumplido (□) durante la evaluación o revisión del sistema y se representa de la siguiente manera:
    .row.justify-content-center.align-items-center
      .col-10
        .titulo-sexto.color-primario.mb-3
          h5 Figura 1.
          span Listado de verificación de calidad
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.desktop
        figure
          img(src="@/assets/curso/Temas/tema2/img9.png" alt="Figura 1 que relaciona un listado de verificación de calidad en los procesos de la planificación de la calidad, el análisis de código, la usabilidad y el rendimiento, los procesos de prueba y verificación, así como los mecanismos de seguridad y fiabilidad del software.")

      .col-lg-10.movil
        figure
          img(src="@/assets/curso/Temas/tema2/img9_1.png" alt="Figura 1 que relaciona un listado de verificación de calidad en los procesos de la planificación de la calidad, el análisis de código, la usabilidad y el rendimiento, los procesos de prueba y verificación, así como los mecanismos de seguridad y fiabilidad del software.")
    br
    .row.justify-content-center
      .col-lg-10
        .tarjeta-cajon-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              figure
                img(src="@/assets/curso/Temas/tema2/img10.png" alt="Adornos flotantes")
            .col-lg-11
              p.mb-0 #[b Interpretación:]
              p.mb-0 90-100 % = Excelente calidad.
              p.mb-0 70-89 % = Buena calidad (revisar ítems pendientes).
              p.mb-0 50-69 % = Calidad aceptable (plan de mejora requerido).
              p.mb-0 < 50% = Calidad insuficiente (requiere trabajo significativo).
</template>

<script>
export default {
  name: 'Tema2',
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
