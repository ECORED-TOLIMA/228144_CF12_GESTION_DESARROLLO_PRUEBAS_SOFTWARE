export default {
  global: {
    Name:
      'Calidad de <em>software</em>: evaluación, aprendizaje y mejora continua',
    Description:
      'Este componente desarrolla la evaluación de la calidad del <em>software</em>, mediante control de calidad, herramientas de pruebas y documentación de hallazgos. Incluye la verificación de requisitos no funcionales como seguridad, desempeño y confiabilidad, así como la gestión de lecciones aprendidas y la formulación de planes de mejora con acciones correctivas, preventivas y seguimiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        titulo: 'Evaluación de calidad del <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Control de calidad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Herramientas de evaluación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Documentación de hallazgos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Evaluación de requisitos no funcionales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Gestión del conocimiento en el desarrollo de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Modelos de gestión del conocimiento',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Lecciones aprendidas en proyectos de <em>software</em>',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Recomendaciones de buenas prácticas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Herramientas para la gestión del conocimiento',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Planes de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Elaboración del plan de mejora',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Acciones correctivas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Acciones preventivas',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Responsables del plan de mejora',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Verificación y seguimiento',
            hash: 't_4_5',
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
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'secuencia lógica y finita de pasos bien definidos que resuelven un problema o realizan una tarea específica.',
    },
    {
      termino: 'Aseguramiento de la calidad (QA)',
      significado:
        'proceso proactivo y preventivo orientado a los procesos de desarrollo para evitar la aparición de defectos mediante estándares.',
    },
    {
      termino: 'Calidad del software',
      significado:
        'grado en que un sistema satisface los requisitos especificados y las necesidades implícitas del usuario.',
    },
    {
      termino: 'Caso de prueba',
      significado:
        'conjunto de condiciones o variables documentadas con resultados esperados para determinar si el software funciona correctamente.',
    },
    {
      termino: 'Causa raíz',
      significado:
        'origen sistémico de un problema identificado mediante técnicas como los "5 Porqués", cuya eliminación evita la repetición del error.',
    },
    {
      termino: 'Conocimiento explícito',
      significado:
        'saber formalizado y documentado en manuales, procedimientos o lecciones aprendidas, fácil de compartir y almacenar.',
    },
    {
      termino: 'Conocimiento tácito',
      significado:
        'saber personal y difícil de formalizar, basado en experiencias, intuiciones y habilidades prácticas de los individuos.',
    },
    {
      termino: 'Control de calidad (SQC)',
      significado:
        'proceso sistemático de verificar que el producto final (reporte, dashboard o macro) cumpla con las especificaciones técnicas.',
    },
    {
      termino: 'Depuración (Debugging)',
      significado:
        'conjunto de técnicas para identificar, analizar y corregir errores o bugs en el código de un programa.',
    },
    {
      termino: 'Hallazgo',
      significado:
        'registro formal de cualquier anomalía, vulnerabilidad o área de mejora identificada durante una evaluación de calidad.',
    },
    {
      termino: 'Lecciones aprendidas',
      significado:
        'conocimiento adquirido de éxitos y errores durante un proyecto, sistematizado para mejorar trabajos futuros.',
    },
    {
      termino: 'Métrica',
      significado:
        'dato objetivo y cuantificable utilizado para evaluar la eficacia del desarrollo y la calidad del producto final.',
    },
    {
      termino: 'No conformidad',
      significado:
        'incumplimiento de un requisito preestablecido que activa la necesidad de acciones correctivas en un plan de mejora.',
    },
    {
      termino: 'Plan de mejora',
      significado:
        'instrumento de gestión que formaliza acciones, responsables y plazos para superar brechas de calidad.',
    },
    {
      termino: 'Usabilidad',
      significado:
        'atributo que evalúa la facilidad con la que el usuario final interactúa con la solución de software.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alexander, M. & Kusleika, D. (2019). Excel 2019 power programming with VBA. John Wiley & Sons.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2015). Quality management systems — Requirements (ISO 9001:2015).',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2023). Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models (ISO/IEC 25010:2023).',
      link: '',
    },
    {
      referencia:
        'Jelen, B. (2020). Excel Dynamic Arrays Straight to the Point (2nd ed.). Tickling Keys, Inc.',
      link: '',
    },
    {
      referencia:
        'Jelen, B. & Syrstad, T. (2022). Microsoft Excel VBA and Macros (Office 2021 and Microsoft 365). Microsoft Press.',
      link: '',
    },
    {
      referencia:
        'McFedries, P. (2019). Microsoft Excel 2019 formulas and functions. Microsoft Press.',
      link: '',
    },
    {
      referencia:
        'Nonaka, I. & Takeuchi, H. (1995). The knowledge-creating company: How Japanese companies create the dynamics of innovation. Oxford University Press.',
      link: '',
    },
    {
      referencia:
        'Probst, G., Raub, S. & Romhardt, K. (2001). Gestión del conocimiento: los componentes del éxito. Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Winston, W. (2016). Microsoft Excel data analysis and business modeling. Microsoft Press.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Solanlly Sánchez Melo',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
          cargo: 'Desarrollador <em>full stack</em>',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
          cargo: 'Desarrollador <em>full stack</em>',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
          cargo: 'Desarrollador <em>full stack</em>',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
}
