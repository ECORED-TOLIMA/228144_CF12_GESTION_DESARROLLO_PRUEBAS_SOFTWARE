<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p.mb La evaluación de la calidad del #[i software] constituye una etapa fundamental dentro del ciclo de vida del desarrollo, ya que permite verificar que el producto entregado cumple con los requisitos establecidos y responde adecuadamente a las necesidades del usuario y del entorno operativo. En un contexto donde los sistemas informáticos soportan procesos críticos de negocio, la calidad no puede limitarse únicamente a la funcionalidad; debe abarcar atributos como seguridad, desempeño, confiabilidad y adaptabilidad. Por ello, este componente formativo aborda el control de calidad como un proceso técnico estructurado que integra herramientas especializadas, análisis de métricas y documentación rigurosa de hallazgos, garantizando trazabilidad y soporte para la toma de decisiones.
      .col-lg-3.col-6.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/Temas/intro/img1.png", alt="alt")
          
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-6
        figure
          img(src="@/assets/curso/Temas/intro/img2.png", alt="alt")
      .col-lg-9
        .BG02.p-4
          p.mb-4 Asimismo, el profundiza en la evaluación de requisitos no funcionales —seguridad, usabilidad, accesibilidad, portabilidad, tiempos de respuesta, adaptabilidad y confiabilidad— entendidos como factores determinantes para la estabilidad y sostenibilidad del #[i software] en producción. Complementariamente, se incorpora la gestión del conocimiento mediante la sistematización de lecciones aprendidas y recomendaciones técnicas y se establecen lineamientos para la formulación de planes de mejora que incluyan acciones correctivas, preventivas y de optimización, con responsables definidos y mecanismos de verificación y seguimiento. De esta manera, se consolida una visión integral de la calidad orientada no solo a detectar fallas, sino a fortalecer continuamente los procesos y el servicio de #[i software].

    p.mb-4 Para entender de mejor manera estas acciones iniciales, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo:

    .row.justify-content-center.align-items-center
      .col-lg-12
        figure(data-aos="zoom-in")
          .video
            iframe(width="1346" height="757" src="https://www.youtube.com/embed/BPEm300HKyk" title="#[i Frontend] con #[i HTML]5, #[i CSS] y #[i JSS]: introducción" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
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
