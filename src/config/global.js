export default {
  global: {
    componenteFormativo:
      'Caracterización de peligros y riesgos asociados a factores ambientales',
    descripcionCurso:
      'El siguiente componente formativo busca conocer sobre los peligros y riesgos que existen en las diferentes condiciones ambientales, apoyándose de igual manera en la normatividad existente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Recopilación y descripción de peligros y riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Fuentes de información',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Instrumentos y métodos de trabajo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Diagrama de procesos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Gestión por procesos',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Identificación de peligros y riesgos en factores ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conceptos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Metodologías de identificación y valoración',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Interpretación de normatividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto saneamiento',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Sistemas de vigilancia y salud pública',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Factores ambientales',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar pdf',
        download: 'downloads/CFA_06_231100.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.2 Instrumentos y métodos de trabajo',
      referencia:
        'Instituto Nacional de Salud. (2022). Comportamiento de situaciones ambientales con posibles repercusiones en la salud.',
      tipo: 'PDF',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/infografia-i-trimestre-gfra-2022.pdf',
    },
    {
      tema: '2. Identificación de peligros y riesgos en factores ambientales',
      referencia:
        'Ministerio de Salud y Protección Social. (2021). Guía para la identificación de peligros, valoración de riesgos y determinación de controles.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHG01.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ambiente',
      significado:
        'el entorno, incluyendo el agua, el aire y el suelo, y su interrelación, así como las relaciones entre estos elementos y cualesquiera organismos vivos (CAR, 2020).',
    },
    {
      termino: 'Amenaza',
      significado:
        'peligro latente asociado con un fenómeno físico de origen natural, de origen tecnológico o provocado por el hombre, que puede manifestarse en un sitio específico y en un tiempo determinado, produciendo efectos adversos en las personas, los bienes, servicios y el medio ambiente. Técnicamente se refiere a la probabilidad de ocurrencia de un evento con una cierta intensidad, en un sitio específico y en un periodo de tiempo determinado (CAR, 2020).',
    },
    {
      termino: 'Gestión ambiental',
      significado:
        'conjunto de acciones que conducen al logro de objetivos ambientales de una organización, mediante el ejercicio amplio de fases de planificación, ejecución, verificación y control.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'cualquier alteración en el medio físico, químico, biológico, cultural y socioeconómico que pueda ser atribuido a actividades humanas relacionadas con las necesidades del proyecto (CAR, 2020).',
    },
    {
      termino: 'Riesgo',
      significado:
        'potencial de pérdidas que pueden ocurrirle al sistema o al sujeto expuesto y es el resultado de la convocatoria de la amenaza y la vulnerabilidad. El riesgo se puede expresar de forma matemática como la probabilidad de exceder un cierto nivel de consecuencias económicas, sociales o ambientales para un cierto lugar en un período de tiempo definido (Secretaría Distrital de Ambiente, 2018).',
    },
  ],
  referencias: [
    {
      referencia: 'CAR. (2020). Glosario de Términos Ambientales. Obtenido de',
      link: 'https://www.car.gov.co/vercontenido/2215#',
    },
    {
      referencia:
        'Dirección de Sanidad Ejército Nacional. (2017). GRUPO GESTIÓN DE RIESGO EN SALUD.',
      link:
        'https://www.sanidadfuerzasmilitares.mil.co/entidad/dependencias/grupo-gestion-del-riesgo-salud',
    },
    {
      referencia:
        'Health Safety & Environment. (2022). Riesgos Ambientales. Metodologías más Utilizadas para su Identificación y Gestión.',
      link:
        'https://hse.software/2022/03/17/riesgos-ambientales-metodologias-mas-utilizadas-para-su-identificacion-y-gestion/',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2022). Comportamiento de situaciones ambientales con posibles repercusiones en salud',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/infografia-i-trimestre-gfra-2022.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2022). Factores de Riesgo Ambiental',
      link:
        'https://www.ins.gov.co/Direcciones/Vigilancia/Paginas/Factores-de-Riesgo-Ambiental.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2021). GUÍA PARA LA IDENTIFICACIÓN DE PELIGROS, VALORACIÓN DE RIESGOS Y DETERMINACIÓN DE CONTROLES.',
      link:
        'https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHG01.pdf',
    },
    {
      referencia:
        'Nueva iso 14001. (2016). Riesgo ambiental y análisis de los riesgos según la ISO 14001 2015',
      link:
        'https://www.nueva-iso-14001.com/2018/04/riesgo-ambiental-segun-la-iso-14001-2015/',
    },
    {
      referencia:
        'Rodriguez, D. (2020). Factores Ambientales: Características y Clasificación',
      link: 'https://www.lifeder.com/factores-ambientales/ ',
    },
    {
      referencia: 'Plan institucional de gestión ambiental',
      link:
        'http://gaia.gobiernobogota.gov.co/sites/default/files/sig/guias/ple-pinpl019_v1.pdf  ',
    },
    {
      referencia:
        'Universitat Carlemany. (2022). ¿Qué son los riesgos ambientales? Principales ejemplos.',
      link:
        'https://www.universitatcarlemany.com/actualidad/que-son-los-riesgos-ambientales-principales-ejemplos',
    },
    {
      referencia:
        'Vigilancia en Salud Publica. (2012). Vigilancia En Salud Pública Y Gestión Del Conocimiento.',
      link:
        'http://www.saludcapital.gov.co/sitios/VigilanciaSaludPublica/Paginas/default.aspx',
    },
    {
      referencia:
        'Secretaria Distrital de Ambiente. (2019). Plan Institucional De Gestión Ambiental. Alcaldía Local de Bosa. ',
      link:
        'http://gaia.gobiernobogota.gov.co/sites/default/files/sig/guias/ple-pin-pl019_v1.pdf ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lizeth Daniela Reinoso Diaz ',
          cargo: 'Experto temático ',
          centro: '"Regional Tolima - Centro Agropecuario La Granja "',
        },
        {
          nombre: 'Gloria Alexandra Orejarena Barrios ',
          cargo: 'Diseñadora Instruccional',
          centro: '"Regional Distrito Capital - Centro de Gestión Industrial "',
        },
        {
          nombre: 'Carolina Coca Salazar ',
          cargo: 'Asesora Metodológica  ',
          centro:
            '"Regional Distrito Capital - Centro de Diseño y Metrología  "',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Responsable del equipo de desarrollo curricular ',
          centro:
            '"Regional Santander - Centro Industrial de Diseño y la manufactura. "',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda ',
          cargo: 'Corrección de estilo ',
          centro:
            '"Regional Distrito Capital - Centro de Diseño y Metrología "',
        },
        {
          nombre: 'Jaslyth Juliana Eraso Casanova ',
          cargo: 'Experta Temática ',
          centro:
            '"Regional Putumayo - Centro Agroforestal y Acuícola Arapaima. "',
        },
        {
          nombre: 'Sergio Augusto Ardila Ortiz',
          cargo: 'Diseñador instruccional ',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Cristian Mauricio Otálora Clavijo',
          cargo: 'Desarrollador Fullstack',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Maria Alejandra Briceño Vera',
          cargo: 'Producción',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Cristian Mauricio Otálora Clavijo',
          cargo: 'Actividad Didáctica',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
