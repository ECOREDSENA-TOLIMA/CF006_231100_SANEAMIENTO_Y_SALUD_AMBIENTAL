<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-sexto.color-adicional-2.mb-3
      h2 Saneamiento y salud ambiental
      i Síntesis: Análisis: Caracterización de peligros y riesgos asociados a factores ambientales

    p.my-5 A continuación, se describe el tema principal del componente formativo Caracterización de peligros y riesgos asociados a factores ambientales, teniendo en cuenta que son una preocupación creciente en el mundo moderno. La caracterización de estos riesgos es esencial para comprender y abordar los desafíos que enfrentamos. Los desastres naturales, como terremotos, inundaciones y huracanes, pueden tener consecuencias devastadoras en la vida humana y la infraestructura. Además, la contaminación del aire y del agua representa un peligro para la salud pública, aumentando el riesgo de enfermedades respiratorias y problemas de salud crónicos. El cambio climático, resultado de la actividad humana, también conlleva peligros significativos, como el aumento del nivel del mar y eventos climáticos extremos. Es crucial tomar medidas preventivas y adaptativas para minimizar estos riesgos y proteger nuestro entorno y bienestar futuros.
    
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
