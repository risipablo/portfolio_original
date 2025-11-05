/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, type ReactNode } from "react";
import type { Language } from "../interface/type";




interface LanguageContextType{
    language: Language
    toggleLanguage: () => void
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps{
    children:ReactNode
}



export const LanguageProvider: React.FC<LanguageProviderProps> = ({children}) => {
    const [language,setLanguage] = useState<Language>('es')

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es')
    }

    return(
        <LanguageContext.Provider value={{ language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}


