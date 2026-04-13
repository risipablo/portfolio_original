import image1 from "../../assets/images/img/App_ventas.png" 
import image2 from "../../assets/images/img/billetera.png" 
import image3 from "../../assets/images/img/calendario.png" 
import image4 from "../../assets/images/img/game.jpg" 
import image5 from "../../assets/images/img/sorteo.png" 
import image6 from "../../assets/images/img/1.png" 
import image7 from "../../assets/images/img/logoB.jpg"

export const project = [
  {
    id: 1,
    title: "Billetera Virtual",
    description: "App web para controlar y registrar tus gastos diarios.",
    skill: ['React JS', "Node JS", "Express", "Mongo Db", "Material UI", 'Docker'],
    web: {
      github: "https://github.com/risipablo/Billetera_Virtual.git",
      url: "https://billetera-virtual-nine.vercel.app",
      note: "Aplicación web para gestionar tus finanzas personales de forma integral. Permite registrar ingresos y egresos, categorizar gastos automáticamente, visualizar un resumen detallado de tu situación económica y generar reportes mensuales. La plataforma fue desarrollada de forma independiente para ser utilizada por todo el público en general, sin restricciones ni necesidad de pago. Ideal para personas que desean tomar control de sus finanzas personales de manera simple y eficiente."

    },
    image: image2,
  },
  {
    id: 2,
    title: "App Ventas",
    // description: "Sistema web para gestionar ventas, stock y proveedores.",
    skill: ['React JS', "Node JS", "Express", "Mongo Db", "Material UI", 'Docker'],
    web: {
      github: "https://github.com/risipablo/Ventas_de_negocio.git",
      url: "-",
      note: "Sistema de gestión comercial desarrollado a medida para un cliente específico y vigente. Este fue mi primer proyecto a gran escala con un cliente real, donde implementé soluciones profesionales para administrar ventas de forma eficiente, controlar el stock de productos en tiempo real, gestionar bases de datos de proveedores y clientes, y generar reportes detallados para optimizar las operaciones del negocio. El sistema ha sido una herramienta clave para mejorar la productividad y rentabilidad del negocio del cliente."

    },
    image: image1,
  },
  {
    id: 3,
    title: "Calendario Aplicacion",
    // description: "App web para organizar y planificar tus actividades.",
    skill: ['React', 'TypeScript', "Node JS", "Express", "Mongo Db", "Docker", 'Supabase'],
    web: {
      github: "https://github.com/risipablo/App-calendario.git",
      url: "https://app-calendario-rust.vercel.app",
      note: "Aplicación de productividad desarrollada de forma independiente para gestionar tu agenda diaria de manera intuitiva. Permite crear, editar y eliminar eventos, establecer recordatorios automáticos para no olvidar tareas importantes, y visualizar todas tus actividades en un calendario interactivo. Incluye autenticación de usuarios para proteger tus datos personales. Este proyecto fue construido de forma gratuita para todo el público con todos mis conocimientos en desarrollo full-stack, siendo un proyecto novedoso que demuestra la capacidad de crear aplicaciones completas y robustas."
    },
    image: image3,
  },
  {
    id: 4,
    title: "Game Quiz",
    // description: "Juego web con preguntas de programación.",
    skill: ["Html", "Css", "Javascript"],
    web: {
      github: "https://github.com/risipablo/app_sorteo.git",
      url: "https://juego-de-multiple-opcion.vercel.app/",
      note: "Juego interactivo de preguntas y respuestas orientado específicamente a desarrolladores en formación. Presenta desafíos de múltiple opción sobre distintos temas de programación para poner a prueba y reforzar conocimientos técnicos de forma entretenida. Este fue uno de mis primeros proyectos realizados como práctica estudiantil, desarrollado con tecnologías fundamentales (HTML, CSS, JavaScript) para consolidar los conocimientos básicos del desarrollo web. Ideal para aprender de forma más dinámica y amena."

    },
    image: image4,
  },
  {
    id: 5,
    title: "Sorteo Virtual",
    // description: "App web para realizar sorteos entre participantes.",
    skill: ['Typescript', "Node JS", "Mongo Db", "Css"],
    web: {
      github: "https://github.com/risipablo/app_sorteo.git",
      url: "https://app-sorteo-bgv7.vercel.app/",
      note: "Herramienta web desarrollada de manera estudiantil y práctica para llevar a cabo sorteos de forma rápida, transparente y equitativa. Permite cargar una lista de participantes, definir la cantidad de ganadores deseados y obtener resultados aleatorios al instante. Ideal para rifas, eventos, promociones o cualquier situación donde necesites seleccionar ganadores de forma justa. Fue uno de mis primeros proyectos prácticos y actualmente está disponible de forma gratuita para todo el mundo sin limitaciones de uso."

    },
    image: image5,
  },
  {
    id: 6,
    title: "Casa Vita",
    // description: "Sitio web informativo para un consultorio médico.",
    skill: ['React JS', "Material UI"],
    web: {
      github: "https://github.com/risipablo/proyecto-vita.git",
      url: "https://proyecto-vita.vercel.app/",
      note: "Sitio web institucional profesional diseñado exclusivamente para un consultorio médico específico que en su momento fue una institución de importancia. La plataforma presenta de forma clara y organizada todos los servicios ofrecidos por el consultorio, información detallada del equipo profesional, horarios de atención y datos de contacto completos. Brinda una presencia digital confiable y de calidad que inspira confianza en los pacientes actuales y potenciales, facilitando la comunicación y generando una imagen profesional sólida para la institución."
    },
    image: image6,
  },
  {
    id: 7,
    title: "Portafolio Psicologa",
    // description: "Portafolio personalizado para cliente.",
    skill: ['React', 'TypeScript', "Docker", "Node JS", "Express", "Resend"],
    web: {
      github: "https://github.com/risipablo/portafolio-psicologa.git",
      url: "https://sabrina-ramos-psicologa.vercel.app/",
      note: "Página web profesional desarrollada completamente a medida para una psicóloga con el objetivo de posicionar su práctica profesional en internet. Incluye presentación detallada de los servicios psicológicos ofrecidos, información completa sobre la profesional y su experiencia, así como un formulario de contacto funcional con envío de emails automático integrado mediante la plataforma Resend. Esta solución permite que los pacientes potenciales conozcan los servicios disponibles y se comuniquen directamente, facilitando la generación de nuevos clientes y consolidando su presencia digital como profesional."

    },
    image: image7,
  }
];