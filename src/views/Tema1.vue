<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Recopilación y descripción de peligros y riesgos

    .row.align-items-center.my-3.col-lg-12.m-0(style="border-radius: 30px;")     
      .row.justify-content-center.my-5
        .col-lg-8.my-5
          LineaTiempoD.color-primario
            p(numero="✔" titulo=" Peligro:")  Se refiere a una fuente con el potencial de causar lesiones o daños a la salud. Es importante identificar y comprender las características de estos peligros.

            p(numero="✔" titulo="Riesgo:")  El riesgo es el resultado de la incertidumbre y representa la posibilidad de que ocurran eventos adversos. Evaluar el riesgo implica considerar la probabilidad de que ocurra un evento y las posibles consecuencias.

            p(numero="✔" titulo="Identificación de peligros:")  Este proceso consiste en reconocer si existe un peligro y definir sus características. Identificar peligros es fundamental para implementar medidas de prevención y mitigación.

            p(numero="✔" titulo="Nivel de riesgo:")  El nivel de riesgo se calcula como la magnitud resultante de multiplicar la probabilidad de que ocurra un evento por la magnitud de las consecuencias. Cuanto mayor sea el nivel de riesgo, mayor será la preocupación y la necesidad de tomar medidas para reducirlo.

   
        .col-8.col-lg-4
          figure
            img(src='@/assets/curso/temas/1/1.svg').m-auto(data-aos="fade-right") 
      
      p.my-5 Estos conceptos son fundamentales para evaluar y gestionar los riesgos ambientales y de salud pública de manera efectiva. La identificación y comprensión de los peligros es el primer paso para desarrollar estrategias de prevención y control que protejan a la población y al medio ambiente.
     
    .tarjeta.tarjeta--azul.p-4.mb-4(data-aos="fade-right" style="background-color:#E7FFD1")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Medidas y protocolos <br>
            p El buen manejo de residuos especiales.
            p El almacenamiento de sustancias peligrosas o radioactivas.
            p El uso de barreras protectoras
            p que aseguren el bienestar y la seguridad de todos.
            p Conocimiento y aplicación de normas.
            p Conocimiento y aplicación de normas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/1/2.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Riesgo biológico
            p Son agentes y materiales que tienen el potencial de ser transmitidos a cualquier forma de vida, lo que incluye bacterias, virus, hongos y parásitos, y que pueden causar enfermedades en consecuencia. Estos riesgos biológicos representan una amenaza para la salud y la seguridad de las personas y requieren medidas de prevención y control adecuadas para evitar la propagación de enfermedades.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/1/3.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Biocontención
            p Es un conjunto de medidas implementadas con el fin de prevenir la liberación o escape de enfermedades infecciosas desde centros de investigación, laboratorios u otros lugares donde puedan originarse este tipo de infecciones. Estas medidas son fundamentales para garantizar la seguridad tanto de las personas que trabajan en estos lugares como del público en general, evitando la propagación de enfermedades peligrosas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/1/4.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            h2 Bioprotección
            p Es el conjunto de medidas o protocolos destinados a reducir en lo más posible la pérdida, robo, uso inadecuado e incluso liberación de patógenos y toxinas que están contenidas en algunas instalaciones, almacenamientos, bodegas, materiales, entre otros.
          .col-md-5            
            figure
              img(src='@/assets/curso/temas/1/5.png', alt='En la  imagen se muestra un ejemplo de flujo de energía para el sistema de refrigeración de lácteos y carnes frías para un supermercado de tamaño mediano. Las flechas azules corresponden al flujo de electricidad y las flechas de color verde corresponde al flujo del proceso de refrigeración. También se aprecia que la salida del sistema es obtener una temperatura constante de 3°C durante las 24 horas del día con el fin de que el producto se conserve, y que la organización cuenta con dos medidores de electricidad que facilita y se deben tener en cuenta para la recopilación de datos para el cálculo del IDEn.', @click="modal1=true")
                
    Separador

    .cont_1_1(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_1_1 1.1 Fuentes de información  
      p.mb-5 Los riesgos ambientales, que amenazan la salud y la estabilidad de nuestros ecosistemas, pueden agruparse en dos categorías principales: causas naturales y antrópicas. A continuación, se muestran las principales características.

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/1/6.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Causas naturales
            p.mb-0 Estos riesgos se originan sin la intervención directa de la actividad humana y son parte inherente de la dinámica de la Tierra.
            p.mb-0 Ejemplos de riesgos naturales incluyen terremotos, erupciones volcánicas, inundaciones, huracanes, sequías y tsunamis.
            p.mb-0 A menudo, estos eventos son impredecibles y pueden causar daños significativos en regiones vulnerables.


      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/1/7.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Causas antrópicas
            p.mb-0 Estos riesgos son el resultado directo de las actividades humanas y su impacto en el entorno.
            p.mb-0 Incluyen la contaminación del aire, del agua y del suelo, la deforestación, la sobreexplotación de recursos naturales, el cambio climático inducido por el hombre y la pérdida de biodiversidad.
            p.mb-0 A diferencia de los riesgos naturales, los riesgos antrópicos son en gran medida prevenibles y pueden mitigarse mediante prácticas sostenibles y políticas ambientales adecuadas.


    


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
