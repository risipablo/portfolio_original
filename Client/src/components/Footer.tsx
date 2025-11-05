import { Download, Github, Linkedin, MapPin,  } from 'lucide-react';
import "../style/footer.css"
import { Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import cv from "../assets/others/cv.pdf"
import { useLanguage } from '../hook/UseLanguage';
import { enTranslations, esTranslations } from './translation/translate';

export const Footer = () => {

  const{language} = useLanguage()

  const translation = language === 'en' ? esTranslations : enTranslations


  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Pablo Risi</h3>
          <p>{translation.header.title}</p>
        </div>

        <div className="footer-social">
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
                    <Github size={22} />
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
                        <Linkedin size={22} />
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

        </div>

        <div className="footer-location">
          <MapPin size={18} />
          <span>Neuquén, Argentina</span>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p className="footer-rights">
          © {new Date().getFullYear()} {translation.header.p}
        </p>
      </div>
    </footer>
  );
};