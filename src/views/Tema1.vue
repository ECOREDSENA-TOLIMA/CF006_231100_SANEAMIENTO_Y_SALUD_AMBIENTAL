<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Recopilación y descripción de peligros y riesgos
    
    p La recopilación y descripción de peligros y riesgos es esencial en la gestión ambiental y de salud pública. Para comprender estos conceptos, es importante tener en cuenta las siguientes definiciones:

    .row.align-items-center.my-0.col-lg-12.m-0(style="border-radius: 30px;")     
      .row.justify-content-center.my-5
        .col-lg-8.my-5
          LineaTiempoD.color-primario
            p(numero="✔" titulo=" Peligro")  Se refiere a una fuente con el potencial de causar lesiones o daños a la salud. Es importante identificar y comprender las características de estos peligros.

            p(numero="✔" titulo="Riesgo")  El riesgo es el resultado de la incertidumbre y representa la posibilidad de que ocurran eventos adversos. Evaluar el riesgo implica considerar la probabilidad de que ocurra un evento y las posibles consecuencias.

            p(numero="✔" titulo="Identificación de peligros")  Este proceso consiste en reconocer si existe un peligro y definir sus características. Identificar peligros es fundamental para implementar medidas de prevención y mitigación.

            p(numero="✔" titulo="Nivel de riesgo")  El nivel de riesgo se calcula como la magnitud resultante de multiplicar la probabilidad de que ocurra un evento por la magnitud de las consecuencias. Cuanto mayor sea el nivel de riesgo, mayor será la preocupación y la necesidad de tomar medidas para reducirlo.

   
        .col-8.col-lg-4
          figure
            img(src='@/assets/curso/temas/1/1.svg').m-auto(data-aos="fade-right") 
      
      p.my-5 Estos conceptos son fundamentales para evaluar y gestionar los riesgos ambientales y de salud pública de manera efectiva. La identificación y comprensión de los peligros es el primer paso para desarrollar estrategias de prevención y control que protejan a la población y al medio ambiente.
    
    Separador

    .cont_1_1(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_1_1 1.1 Fuentes de información  
      p.mb-5 Los riesgos ambientales, que amenazan la salud y la estabilidad de nuestros ecosistemas, pueden agruparse en dos categorías principales: causas naturales y antrópicas. A continuación, se muestran las principales características.

    .row
      .col-sm-6.col-xl-6.mb-6.mb-xl-6
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h1 Causas naturales
              p.mb-0 Estos riesgos se originan sin la intervención directa de la actividad humana y son parte inherente de la dinámica de la Tierra.
              p.mb-0 Ejemplos de riesgos naturales incluyen terremotos, erupciones volcánicas, inundaciones, huracanes, sequías y tsunamis.
              p.mb-0 A menudo, estos eventos son impredecibles y pueden causar daños significativos en regiones vulnerables.

            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/1/6.png')})`}")
            .indicador--click(v-if="mostrarIndicador")

      .col-sm-6.col-xl-6.mb-6.mb-xl-6
        .tarjeta.tarjeta-slide.abajo.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/1/7.png')})`}")
            .indicador--click(v-if="mostrarIndicador")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h1 Causas antrópicas
              p.mb-0 Estos riesgos son el resultado directo de las actividades humanas y su impacto en el entorno.
              p.mb-0 Incluyen la contaminación del aire, del agua y del suelo, la deforestación, la sobreexplotación de recursos naturales, el cambio climático inducido por el hombre y la pérdida de biodiversidad.
              p.mb-0 A diferencia de los riesgos naturales, los riesgos antrópicos son en gran medida prevenibles y pueden mitigarse mediante prácticas sostenibles y políticas ambientales adecuadas.


      p.my-5 La vigilancia y evaluación de los factores de riesgo ambiental implican un seguimiento constante de diversas situaciones a través de múltiples fuentes de información, como los medios de comunicación. Esto permite a las autoridades coordinar y orientar respuestas oportunas ante posibles amenazas ambientales, garantizando una acción inmediata cuando sea necesario para proteger el medio ambiente y la salud pública.
      p A continuación, se expondrán algunas de las fuentes de información utilizadas para un análisis descriptivo de situaciones de alerta y emergencia:

    .row.justify-content-center.my-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-0.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 1.] 
            i Fuentes de información 

    .row 
      figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
        img.mb-1(src='@/assets/curso/temas/1/8.svg' alt='En la figura 1 se muestran los aspectos que son de revisión en los procedimientos sanitarios.').m-auto(data-aos="fade-right")
      figure.movil.mt-0
        .row.justify-content-center.d-lg-none.d-md-none        
          img(src="@/assets/curso/temas/1/8.svg" data-aos="zoom-in-up") 

    Separador

    .cont_1_1(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_1_2 1.2 Instrumentos y métodos de trabajo  
      p.mb-5 El proceso de identificación y evaluación de riesgos ambientales es esencial para que las empresas implementen estrategias medioambientales efectivas y reduzcan su impacto ambiental. Es fundamental considerar las fuentes, su identificación y las posibles consecuencias. A continuación, se describen estos aspectos clave:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5(style="background-color: #C1E29A;")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/1/9.svg', alt='Texto que describa la imagen')
          
        h2.text-center Fuentes de riesgo presentes
        p La identificación y evaluación de riesgos ambientales es esencial para las empresas que buscan implementar estrategias medioambientales efectivas y reducir su impacto ambiental. Esto implica identificar fuentes de riesgo, como las emisiones de dióxido de carbono (CO2), a través de estudios realizados por consultorías especializadas. En el ejemplo mencionado, las emisiones de CO2 se consideran un riesgo significativo debido a su contribución al cambio climático y al calentamiento global. Para abordar este riesgo, se realizan análisis exhaustivos de las emisiones de CO2, teniendo en cuenta factores como las fuentes de emisión, las cantidades emitidas, las regulaciones y las tendencias futuras. Una vez identificado el riesgo, las empresas pueden tomar medidas para mitigarlo, como la adopción de prácticas más sostenibles y la inversión en tecnologías de baja emisión de carbono, lo que puede mejorar su reputación y compromiso con la responsabilidad social corporativa.

      .col-md.tarjeta.color-acento-contenido.p-5(style="background-color: #D5FFF5;")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/1/10.svg', alt='Texto que describa la imagen')
          
        h2.text-center Identificadores del riesgo
        p Son herramientas que ayudan a señalar la ubicación de las fuentes de riesgo dentro de una empresa y a comprender cómo estas fuentes operan. Estos identificadores son útiles para identificar de manera precisa dónde se encuentran las potenciales amenazas ambientales dentro de una organización y cómo estas amenazas pueden afectar al medio ambiente y la salud pública. Tener una comprensión clara de estos identificadores es fundamental para tomar medidas preventivas y correctivas efectivas para reducir o eliminar los riesgos ambientales en una empresa.

      .col-md.tarjeta.color-acento-contenido.p-5(style="background-color: #F1D8FF;")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/1/11.svg', alt='Texto que describa la imagen')
          
        h2.text-center(style="color-text: black;") Consecuencias del riesgo
        p El análisis de las consecuencias del riesgo es un proceso fundamental en la gestión ambiental de una empresa. Consiste en examinar en detalle el impacto ambiental de las actividades empresariales y describir las posibles consecuencias negativas que podrían surgir como resultado de estas actividades. Esto incluye la evaluación de cómo las operaciones de la empresa pueden afectar la calidad del aire, del agua, del suelo y la biodiversidad, así como la salud pública y el bienestar de la comunidad circundante. El análisis de consecuencias del riesgo permite a la empresa comprender mejor los posibles daños ambientales y tomar medidas proactivas para prevenirlos o mitigarlos, lo que es esencial para una gestión responsable y sostenible de sus operaciones.
    
    p Para identificar y desarrollar estrategias de vigilancia que tienen que ver con situaciones y factores de riesgo ambiental existen diferentes herramientas que ayudan a evaluar los diferentes riesgos en salud pública y de igual manera a orientar en la toma de decisiones de estas. 

    TabsC.color-primario
      .py-3.py-md-4(titulo="SATAES")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Sistema de Alerta Temprana Ambiental para Efectos en Salud (SATAES)
            p Monitoreo de las situaciones y amenazas ambientales, con el fin de generar alertas, optimizar los procesos de vigilancia en salud pública y enriquecer la inteligencia epidemiológica sobre el tipo de acciones a desarrollar cuando se presentan riesgos ambientales que pueden afectar potencialmente la salud. (Instituto Nacional de Salud, 2022).
          .col-md-6
            figure
              img(src='@/assets/curso/temas/1/12.svg', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="MASSAES")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/1/13.svg', alt='Texto que describa la imagen')
          .col-md-6
            h4 Matriz de Alertas, Seguimiento de Situaciones Ambientales y Efectos en Salud (MASSAES)
            p Es una herramienta que se utiliza para generar alertas predictivas relacionadas con eventos ambientales y sus posibles efectos en la salud pública. Esta matriz opera a nivel nacional y desglosa la información hasta el nivel municipal, teniendo en cuenta factores como aspectos epidemiológicos, ambientales, sociales, zoonóticos y capacidad de respuesta. Su objetivo principal es proporcionar información anticipada sobre situaciones ambientales que puedan afectar la salud de la población, permitiendo a las autoridades tomar medidas preventivas y de respuesta de manera oportuna. 
        
      .py-3.py-md-4(titulo="SIVIGILA")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Geo visor SIVIGILA
            p Es una herramienta diseñada para facilitar análisis geográficos y espaciales de eventos relacionados con la salud pública en todo el territorio nacional. Su función principal es permitir la visualización de la distribución y comportamiento de los casos georreferenciados, así como otras variables de interés. Esto ayuda a las Entidades Territoriales a implementar acciones de vigilancia, control, mitigación y proporcionar información crucial para la toma de decisiones en materia de salud pública
          .col-md-6
            figure
              img(src='@/assets/curso/temas/1/14.svg', alt='Texto que describa la imagen')


    Separador

    .cont_1_3(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_1_3 1.3 Diagrama de procesos 
      p.mb-5 El diagrama de procesos se centra en la determinación de la matriz de evaluación de riesgos e impactos en tres fases clave. En la primera fase, se identifican los peligros ambientales relacionados con la empresa o proyecto. Luego, en la fase de análisis de riesgo, se evalúan la probabilidad y el impacto de estos riesgos, junto con la definición de medidas de control. Finalmente, en la tercera fase, se emite una matriz que resume las medidas necesarias para erradicar o mitigar los riesgos identificados, con el propósito de minimizar los impactos ambientales y prevenir incidentes. Este enfoque sistemático busca mejorar el desempeño ambiental y reducir el impacto negativo en el medio ambiente.

   
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10 
        .titulo-sexto.mb-0.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 2.] 
            i Diagrama de procesos

        .row
          figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
            img.mb-1(src='@/assets/curso/temas/1/15.svg' alt='En la figura 2 se muestran las tres fases de procesos: Identificación, Análisis y solución.').m-auto(data-aos="fade-right")
          figure.movil.mt-0
            .row.justify-content-center.d-lg-none.d-md-none        
              img(src="@/assets/curso/temas/1/16.svg" data-aos="zoom-in-up")
          
    p.my-5 Un diagrama de procesos es una herramienta fundamental para la gestión ambiental responsable, ya que ayuda a identificar, evaluar y controlar los riesgos ambientales, lo que a su vez contribuye a la protección del medio ambiente y al cumplimiento de las normativas aplicables.

    Separador

    .cont_1_3(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_1_3 1.4 Gestión por procesos

    .row.align-items-center.my-3.col-lg-12.mb-4 
      .col-sm-5
        figure
          img(src='@/assets/curso/temas/1/17.png').m-auto(data-aos="fade-right")            
      .col-sm-7.p-2(style="background:#E8FEFF")
        p.mb-5(style="overflow-x: hidden !important") La gestión por procesos es un enfoque esencial en la gestión de riesgos medioambientales, ya que busca optimizar la capacidad de una organización para alcanzar sus objetivos, incluyendo la gestión de amenazas y situaciones adversas relacionadas con el medio ambiente. Este enfoque implica identificar y aprovechar oportunidades incluso en situaciones adversas, considerando diversos aspectos medioambientales.

        p.mb-5(style="overflow-x: hidden !important") La gestión del riesgo medioambiental implica una serie de actividades destinadas a controlar y minimizar los riesgos relacionados con el medio ambiente. Se basa en la evaluación de la probabilidad de que ocurran eventos negativos en un escenario dado y las posibles consecuencias negativas asociadas a esos eventos.

        p.mb-5(style="overflow-x: hidden !important") En este contexto, la gestión por procesos se convierte en una herramienta valiosa, ya que permite abordar los riesgos ambientales de manera sistemática y eficiente. Al identificar y mapear los procesos relacionados con la gestión ambiental, una organización puede evaluar los posibles riesgos y desarrollar estrategias para mitigarlos o aprovechar oportunidades. formular y calcular el riesgo es un paso fundamental en la gestión de riesgos medioambientales. 

        p.mb-5(style="overflow-x: hidden !important") En este punto es importante realizar el cálculo del riesgo, el cual implica evaluar la probabilidad de que ocurra un evento adverso relacionado con el medio ambiente y las posibles consecuencias negativas asociadas a ese evento. Esto se hace típicamente mediante un análisis cuantitativo y cualitativo.
 
    p.my-5 La fórmula básica para calcular el riesgo es:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10 
        .titulo-sexto.mb-0.color-acento-contenido.mb-4
          p.mb-0 #[b  Figura 3.] 
            i . Fórmula para calcular el riesgo

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10 
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img.mb-1(src='@/assets/curso/temas/1/18.svg' alt='En la figura 3 se muestra la fórmula para calcular el riesgo, establecida por la probabilidad y consecuencia.').m-auto(data-aos="fade-right")
        figure.movil.mt-0
          .row.justify-content-center.d-lg-none.d-md-none        
            img(src="@/assets/curso/temas/1/18.svg" data-aos="zoom-in-up")  


    .row.align-items-center.my-3.col-lg-12.mb-4           
      .col-12.p-3(style="background:#E7FFD1")
        .col-sm.mb-5.mb-sm-0.px-5
          ul.lista-ul--color
            li 
              i.fas.fa-check
              b Probabilidad: 
              | esta parte del cálculo se refiere a la evaluación de la probabilidad de que ocurra un evento adverso. Esto implica considerar factores como la frecuencia histórica de eventos similares, condiciones ambientales, medidas de control existentes y otros factores que puedan influir en la probabilidad.

            li 
              i.fas.fa-check
              b Consecuencias: 
              | esta parte se refiere a la evaluación de las posibles consecuencias negativas en caso de que ocurra el evento. Esto puede incluir daños ambientales, impacto en la salud pública, costos económicos y otros efectos adversos.
           
    p.mb-4(style="overflow-x: hidden !important") El cálculo del riesgo permite a las organizaciones priorizar y tomar decisiones informadas sobre cómo abordar y gestionar los riesgos ambientales. Dependiendo de los resultados del cálculo, se pueden implementar medidas de control, estrategias de mitigación o planes de contingencia para reducir el riesgo a niveles aceptables.

    p.mb-5(style="overflow-x: hidden !important") Otra herramienta muy útil para gestionar los procesos de una empresa, es la implementación del Sistema de Gestión Ambiental (SGA) ISO 14001. La implementación del Sistema de Gestión Ambiental (SGA) ISO 14001 es, de hecho, una herramienta valiosa para las organizaciones que desean gestionar y mejorar su desempeño ambiental de manera estructurada y efectiva. Este sistema se basa en la norma internacional ISO 14001, que establece los requisitos para un SGA eficaz. Aquí hay una descripción general de los pasos comunes involucrados en la implementación de ISO 14001:

    .tarjeta.tarjeta--gris.p-4(style="background:#E7FFD1")
      PasosB.color-acento-contenido

        .row(titulo="Paso 1")
          .col-md-6.mb-4.mb-md-0
            p Definir las responsabilidades relativas a la gestión ambiental.        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/1/19.png', alt='Texto que describa la imagen')

        .row(titulo="Paso 2")
          .col-md-6.mb-4.mb-md-0
            p Establecer y comunicar la política ambiental, o sea declarar formalmente el compromiso de la organización respecto de su desempeño ambiental. Esta política debe ser coherente y consistente con la estrategia general de la organización.        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/1/20.png', alt='Texto que describa la imagen')

        .row(titulo="Paso 3")
          .col-md-6.mb-4.mb-md-0
            p Identificar todos los aspectos ambientales de sus actividades, productos y servicios.        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/1/21.png', alt='Texto que describa la imagen')  

        .row(titulo="Paso 4")
          .col-md-6.mb-4.mb-md-0
            p Relevar el marco legal y reglamentario, así como el modo en que aplica de manera precisa.      
          .col-md-6
            figure
              img(src='@/assets/curso/temas/1/22.png', alt='Texto que describa la imagen')

        .row(titulo="Paso 5")
          .col-md-6.mb-4.mb-md-0
            p Evaluar los impactos ambientales correspondientes a las actividades y reconocer los que son significativos basados en la política ambiental adoptada.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/1/23.png', alt='Texto que describa la imagen')

        .row(titulo="Paso 6")
          .col-md-6.mb-4.mb-md-0
            p Definir e implementar los procedimientos generales propios del sistema de gestión ambiental (comunes a todas las organizaciones) y específicos (propios de la actividad desarrollada).       
          .col-md-6
            figure
              img(src='@/assets/curso/temas/1/24.png', alt='Texto que describa la imagen')    

        .row(titulo="Paso 7")
          .col-md-6.mb-4.mb-md-0
            p Seleccionar los indicadores clave de desempeño de los procesos, así como la metodología de medición de estos.     
          .col-md-6
            figure
              img(src='@/assets/curso/temas/1/25.png', alt='Texto que describa la imagen')

        .row(titulo="Paso 8")
          .col-md-6.mb-4.mb-md-0
            p Implementar efectivamente todos los procesos definidos.      
          .col-md-6
            figure
              img(src='@/assets/curso/temas/1/26.png', alt='Texto que describa la imagen')

        .row(titulo="Paso 9")
          .col-md-6.mb-4.mb-md-0
            p Monitorear la eficacia del sistema de gestión a través de los indicadores clave seleccionados y la aplicación de técnicas estadísticas.       
          .col-md-6
            figure
              img(src='@/assets/curso/temas/1/27.png', alt='Texto que describa la imagen')        

        .row(titulo="Paso 10")
          .col-md-6.mb-4.mb-md-0
            p Aplicar acciones correctivas basados en el análisis de los resultados y acciones preventivas basadas en la política ambiental.        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/1/28.png', alt='Texto que describa la imagen')        

    p.my-5(style="overflow-x: hidden !important") La certificación ISO 14001 demuestra el compromiso de una organización con la gestión ambiental y puede proporcionar beneficios como la mejora de la imagen de la empresa, el cumplimiento de regulaciones ambientales y la reducción de costos a través de la eficiencia operativa. Sin embargo, la implementación exitosa del SGA requiere un compromiso continuo y la participación de todos los niveles de la organización.


       
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
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
