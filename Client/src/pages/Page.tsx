
import { Navbar } from "../components/Navbar"
import { Header } from "../components/Header"
import { AboutMe } from "../components/AboutMe"
import { SliderProjects } from "../components/SliderProject"
import { Skills } from "../components/Skills"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
import { LanguageProvider } from "../context/languageContext"
import { ScrollTop } from "../components/ScrollTop"

export const Page = () => {

    return(
        <LanguageProvider>
            <Navbar/>
            
            <section id="#"> <Header/> </section> 
            <section id="about"><AboutMe /></section>
            <section id="projects"><SliderProjects /></section>
            <section id="skills"><Skills /></section>
            <section id="contact"><Contact /></section>
            <ScrollTop/>
            <Footer/>
        </LanguageProvider>
    )
}