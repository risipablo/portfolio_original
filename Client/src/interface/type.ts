


export interface IContact{
    name:string,
    cellphone: string,
    email: string,
    text: string
}

export interface Itranslate{

    navbar:{
      a1:string
      a2:string
      a3:string
      a4:string
    },
    header:{
      title: string;
      titleP: string;
      p:string
    },
      about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  },
  skills:{
    title:string
  },
  contact:{
    title: string
    p: string
    name:string
    nameP: string
    cell:string
    email:string
    hconsul:string
    consultation:string
    send:string
  }
}

export type Language = 'es' | 'en'