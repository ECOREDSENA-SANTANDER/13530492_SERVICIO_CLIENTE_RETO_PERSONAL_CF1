export default {
  global: {
    componenteFormativo: 'El servicio, sus principios y el cliente',
    descripcionCurso:
      'El excelente servicio al cliente es una característica que muchas empresas quisieran tener, ya que es un valor agregado para sus productos o servicios. Por esta razón es importante comprender en qué consiste el servicio al cliente, los principios, las características, los retos y las expectativas. Este componente se centra en definir cada una de las cualidades que debe cumplir el personal para prestar un servicio al cliente de calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
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
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Actitud de servicio',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Cualidades de servicio al cliente',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Principios básicos de atención al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Consejos prácticos para brindar a los clientes un servicio excelente',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'El cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipología de clientes',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'El ciclo del servicio',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              '¿Cómo realizar el abordaje de los diferentes clientes de forma asertiva?',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'Accesible. (Del lat. accesibĭlis). La accesibilidad es el grado en el que todas las personas pueden utilizar un objeto, visitar un lugar o acceder a un servicio, independientemente de sus capacidades.',
    },
    {
      termino: 'Brevedad',
      significado: 'Centrarse en el tema.',
    },
    {
      termino: 'Claridad',
      significado:
        'Evitar palabras ostentosas o expresiones técnicas y emplear párrafos y frases cortas.',
    },
    {
      termino: 'Comprensión',
      significado:
        'Acción de comprender. Facultad, capacidad o perspicacia para entender y penetrar las cosas. Actitud comprensiva o tolerante. Conjunto de cualidades que integran una idea.',
    },
    {
      termino: 'Cortesía',
      significado:
        'Demostración o acto con que se manifiesta la atención, respeto o afecto que tiene alguien a otra persona.',
    },
    {
      termino: 'Empatía',
      significado:
        'Carisma que tiene una persona en sus relaciones consigo misma, con los demás y con su entorno',
    },
    {
      termino: 'Expectativa',
      significado: 'Esperanza de realizar o conseguir algo.',
    },
    {
      termino: 'Percepción',
      significado:
        'Organizar e interpretar los estímulos que fueron recibidos por los sentidos que ayudan a identificar los objetos y acontecimientos.',
    },
    {
      termino: 'Provisión',
      significado: 'Acción y efecto de proveer',
    },
    {
      termino: 'Servicio',
      significado:
        'Prestación humana que satisface alguna necesidad social y que no consiste en la producción de bienes materiales',
    },
    {
      termino: 'Tangibles',
      significado:
        'Que se puede percibir de manera precisa. Resultados tangibles.',
    },
  ],
  referencias: [
    {
      referencia:
        'Baró, T. (2012). La gran guía del lenguaje no verbal. España: Editorial Paidós.',
    },
    {
      referencia:
        'Camargo, D. (2007). Servicio al cliente un compromiso. Bogotá, Colombia: Autor.',
    },
    {
      referencia:
        'De Mello, A. (1982). El canto del pájaro. Colombia: Sal Terrae.',
    },
    {
      referencia:
        'Escuela para el Desarrollo Comercial para Tecnólogos. (2008). Manual de técnicas comerciales. España: Autor.',
    },
    {
      referencia:
        'Jimenez, J. (2011). Arte Supremo. 50 prácticas de buena atención al cliente. (2a ed.). Caracas, Venezuela: Cograf.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección general',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: ' Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'José Luis Aguilar Camacho',
          cargo: 'Experto temática',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Marina Jaramillo Portillo',
          cargo: 'Experta temática',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Lucy Yaneth Rache Pérez',
          cargo: 'Experta temática',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Elsa Vargas Báez',
          cargo: 'Experta temática',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luz Clarena Arias González',
          cargo: 'Guionista - Línea de Producción',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Carolina Jiménez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora web',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>full-stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrolladora <i>full-stack</i> junior',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
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
