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
      note: "Aplicación web para gestionar tus finanzas personales. Permite registrar ingresos y egresos, categorizar gastos y visualizar un resumen de tu situación económica de forma clara y sencilla."
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
      note: "Sistema de gestión comercial desarrollado para un cliente específico. Permite administrar ventas, controlar el stock de productos, gestionar proveedores y clientes, y generar reportes para optimizar las operaciones del negocio."
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
      note: "Aplicación de productividad para gestionar tu agenda diaria. Permite crear y editar eventos, establecer recordatorios y visualizar tus actividades en un calendario intuitivo con autenticación de usuarios."
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
      note: "Juego interactivo de preguntas y respuestas orientado a desarrolladores. Presenta desafíos de múltiple opción sobre distintos temas de programación, ideal para poner a prueba y reforzar conocimientos técnicos de forma entretenida."
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
      note: "Herramienta web para llevar a cabo sorteos de forma rápida y transparente. Permite cargar una lista de participantes, definir la cantidad de ganadores y obtener resultados aleatorios al instante, ideal para rifas o eventos."
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
      note: "Sitio web institucional diseñado para un consultorio médico. Presenta los servicios ofrecidos, información del equipo profesional y datos de contacto, brindando una presencia digital clara y confiable para los pacientes."
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
      note: "Página web profesional desarrollada a medida para una psicóloga. Incluye presentación de servicios, información sobre la profesional, y un formulario de contacto con envío de emails integrado mediante Resend."
    },
    image: image7,
  }
];