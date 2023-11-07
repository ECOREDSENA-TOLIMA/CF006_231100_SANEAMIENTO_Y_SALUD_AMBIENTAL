<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row.align-items-center.my-3.col-lg-12.m-0        
      p.mb-2.py-1(style="overflow-x: hidden !important") Este componente formativo aborda diversas temáticas, comenzando desde aspectos generales hasta los más específicos relacionados con la gestión ambiental. En resumen, se realiza una descripción de los peligros y riesgos asociados a factores ambientales. Se identifican fuentes de información relevantes que son útiles en la planificación y se utilizan diferentes tipos de procesos para la identificación de riesgos ambientales. Estos procesos incluyen la creación de diagramas que facilitan la comprensión y la detección temprana de amenazas.

      p.mb-2.py-1(style="overflow-x: hidden !important") Por otro lado, se exploran metodologías que permiten evaluar si una empresa es ambientalmente sostenible, destacando la importancia de cumplir con regulaciones legales relacionadas con la preservación del medio ambiente. Además, se mencionan sistemas de salud pública que orientan políticas y planificación en este ámbito, contribuyendo a la salud de la población colombiana.

      p.mb-2.py-1(style="overflow-x: hidden !important") Finalmente, se analizan los diferentes factores ambientales, que se dividen en bióticos y abióticos, detallando sus características y su contribución a la protección y conservación del medio ambiente. Este enfoque integral abarca diversos aspectos relacionados con la gestión ambiental y la importancia de mantener un equilibrio entre el desarrollo económico y la preservación del entorno natural.
        
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com//embed/" title="Video Huella Hidrica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    




    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
