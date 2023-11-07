<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-sexto.color-adicional-2.mb-3
      h2 Saneamiento y salud ambiental
      i Síntesis: Análisis: Caracterización de peligros y riesgos asociados a factores ambientales

    p.my-5 A continuación, se describe el tema principal del componente formativo Caracterización de condiciones sanitarias de establecimientos según normativas es esencial para garantizar la seguridad y bienestar de las personas. En este proceso se evalúan aspectos como la higiene y limpieza de las instalaciones, el manejo adecuado de los alimentos, el control de plagas y la disposición de residuos. Asimismo, se verifica el cumplimiento de las normas de bioseguridad, el mantenimiento de equipos médicos y la capacitación del personal en medidas de prevención de enfermedades. Esta caracterización permite identificar deficiencias y tomar acciones correctivas, asegurando entornos saludables y protegiendo la salud de los usuarios y trabajadores de dichos establecimientos.
    
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
