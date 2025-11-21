


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

  projectTitles: {
    p1: string
    p2: string
    p3: string
    p4: string
    p5: string
    p6: string
  },


  projectP: {
    p1: string
    p2: string
    p3: string
    p4: string
    p5: string
    p6: string
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
  },


}

export type Language = 'es' | 'en'