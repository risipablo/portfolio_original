import perfil from "../assets/images/img/logo.png" 
import "../style/header.css"
import { motion } from "framer-motion"
import { Github, Linkedin, Download } from "lucide-react"
import Tooltip from '@mui/material/Tooltip'
import cv from "../assets/others/cv.pdf"
import { useLanguage } from '../hook/UseLanguage';
import { enTranslations, esTranslations } from "./translation/translate"


export const Header = () => {
    const {language} = useLanguage()

    const translations = language === 'en' ? esTranslations : enTranslations

    return(
        <div className="container-header">
            <motion.div 
                className="header-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 0.8,  
                    ease: "easeOut"
                }}
            >
                <motion.div 
                    className="container-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                        duration: 0.6,
                        delay: 0.2,
                        ease: "easeOut"
                    }}
                >
                    <motion.img 
                        src={perfil} 
                        alt="foto-perfil"
                        whileHover={{ 
                            scale: 1.05,
                            rotate: 5,
                            transition: { duration: 0.3 }
                        }}
                    />
                </motion.div>
                
                <motion.div 
                    className="info-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.6,
                        delay: 0.4,
                        ease: "easeOut"
                    }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.5,
                            delay: 0.6
                        }}
                    >
                        Pablo Matías Risi
                    </motion.h2>
                    
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.5,
                            delay: 0.7
                        }}
                    >
                        {translations.header.title}
                    </motion.h3>

                    <motion.div 
                        className="iconos-header"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.5,
                            delay: 0.8
                        }}
                    >
                        <motion.a 
                            href="https://github.com/tu-usuario" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-icon"
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="GitHub"
                        >
                            <Tooltip title="GitHub" placement="top">
                                <span>
                                    <Github size={28} />
                                </span>
                            </Tooltip>
                        </motion.a>

                        <motion.a 
                            href="https://linkedin.com/in/tu-usuario" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-icon"
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="LinkedIn"
                        >
                            <Tooltip title="LinkedIn" placement="top">
                                <span>
                                    <Linkedin size={28} />
                                </span>
                            </Tooltip>
                        </motion.a>

                        <motion.a 
                            href={cv}
                            download
                            className="social-icon cv-icon"
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Descargar CV"
                        >
                            <Tooltip title="Descargar CV" placement="top">
                                <span>
                                    <Download size={28} />
                                </span>
                            </Tooltip>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

