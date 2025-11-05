// import { motion } from "framer-motion"
import { Skill } from "./Data/skill"
import { motion } from "framer-motion"
import "../style/skills.css"
import { useLanguage } from "../hook/UseLanguage.ts"
import { enTranslations, esTranslations } from "./translation/translate"

export function Skills(){

    const {language} = useLanguage()

    const translation = language === 'en' ? esTranslations : enTranslations

    return(
        <div className="container-skills">

            <motion.div 
                className="title-skill"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2> {translation.skills.title} </h2>
            </motion.div>

            <div className="skills-grid">
                {Skill.map((skill, index) => (
                    <motion.div 
                        key={skill.id} 
                        className="skill-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                        <img src={skill.image} alt={skill.title} className="skill-image"/>
                        <p className="skill-title">{skill.title}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}