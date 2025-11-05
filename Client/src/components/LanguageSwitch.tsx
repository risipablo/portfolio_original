import type React from "react";
import { useLanguage } from "../hook/UseLanguage";
import { motion } from "framer-motion";
import "../style/language.css"

export const LanguageSwitch: React.FC = () => {
    const {language, toggleLanguage} = useLanguage();

     return (
    <motion.div 
      className="language-switch"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <button 
        onClick={toggleLanguage}
        className={`switch-button ${language === 'en' ? 'en-active' : 'es-active'}`}
        aria-label={`Cambiar idioma a ${language === 'es' ? 'inglés' : 'español'}`}
      >
        <motion.div 
          className="switch-slider"
          animate={{ 
            x: language === 'en' ? '100%' : '0%'
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
        <span className={language === 'en' ? 'active' : ''}>EN</span>
        <span className={language === 'es' ? 'active' : ''}>ES</span>
      </button>
    </motion.div>
  );
}