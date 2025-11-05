import "../style/aboutMe.css"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"


import { useRef } from "react"
import { useLanguage } from '../hook/UseLanguage';
import { esTranslations } from "../components/translation/translate"
import { enTranslations } from "../components/translation/translate"

export const AboutMe = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const { language } = useLanguage()
    
    // Seleccionar las traducciones según el idioma actual
    const translations = language === 'en' ? esTranslations : enTranslations

    return(
        <motion.div 
            className="container-about"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            
            <motion.div 
                className="title-about"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2>{translations.about.title}</h2>
            </motion.div>

            <div className="text-about">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {translations.about.paragraph1}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                >
                    {translations.about.paragraph2}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    {translations.about.paragraph3}
                </motion.p>

            </div>
        </motion.div>
    )
}