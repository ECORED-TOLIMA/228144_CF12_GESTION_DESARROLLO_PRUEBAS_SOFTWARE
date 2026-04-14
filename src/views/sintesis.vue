<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente presenta una guía técnica integral sobre la calidad del #[i software], estructurada desde la evaluación sistemática y el control de procesos, hasta la consolidación de una cultura de mejora continua. A través de estándares como la serie ISO/IEC 25000, se profundiza en el uso de herramientas para pruebas funcionales y no funcionales (seguridad, usabilidad y desempeño), la documentación rigurosa de hallazgos y el seguimiento de defectos, mediante procesos de depuración. Finalmente, integra la gestión del conocimiento por medio de modelos como el SECI para capitalizar lecciones aprendidas y establece la metodología para elaborar planes de mejora efectivos basados en acciones correctivas y preventivas, asegurando la sostenibilidad y excelencia del servicio de #[i software].
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual titulado Construcción e implementación de indicadores de gestión presenta el tema central organizado en dos ejes temáticos. El primero corresponde al Cuadro de Mando Integral (CMI), que comprende el concepto y origen, el mapa estratégico, la relación causa-efecto y su implementación. El segundo eje aborda el análisis, el seguimiento y la toma de decisiones, e incluye el análisis de resultados, los tableros de control, los semáforos de desempeño y los planes de acción, como apoyo a la toma de decisiones estratégicas de la organización. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
