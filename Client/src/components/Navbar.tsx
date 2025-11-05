import { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/images/img/logo.png';
import '../style/navbar.css';
import { LanguageSwitch } from './LanguageSwitch';
import { enTranslations, esTranslations } from './translation/translate';
import { useLanguage } from '../hook/UseLanguage';

export const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false)

    const {language} = useLanguage()

    const translation = language === 'en' ? esTranslations : enTranslations
    
    const toggleMenu = () => {
        setIsMenu(!isMenu)
    }

    const closeMenu = () => {
        setIsMenu(false)
    }

    return(
        <div className="container-navbar">
            <div className="navbar">

                <div className="logo-container">
                    <Link 
                        to="#"
                        smooth={true}
                        duration={500}>
                            <img src={logo} alt="logo" />
                    </Link>
                    
                </div>

                <div className={`menu ${isMenu ? 'open' : ''}`}>
                      <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        onClick={closeMenu}
                        className="nav-link"
                    >
                    {translation.navbar.a1}
                    </Link>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        onClick={closeMenu}
                        className="nav-link"
                    >
                        {translation.navbar.a2}
                    </Link>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                        onClick={closeMenu}
                        className="nav-link"
                    >
                        {translation.navbar.a3}
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        onClick={closeMenu}
                        className="nav-link"
                    >
                        {translation.navbar.a4}
                    </Link>

                    <div className="user-mobile">
                        <LanguageSwitch/>
                    </div>
                </div>

                <div className="user-container">
                     <LanguageSwitch/>
                </div>

                <div className={`menu-icon ${isMenu ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
        </div>
    )
}