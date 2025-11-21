import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, Globe, NotepadText } from "lucide-react";
import { Tooltip } from "@mui/material";
import { project } from "./Data/project"; 
import "../style/projects.css";
import { useLanguage } from '../hook/UseLanguage';
import { enTranslations, esTranslations } from "./translation/translate";

export const SliderProjects = () => {

  const{language} = useLanguage()

  const translation = language === 'en' ? esTranslations : enTranslations

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Calcular el máximo índice
  const maxIndex = Math.max(0, project.length - itemsPerView);

  // Navegación
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calcular qué proyectos mostrar en el abanico
  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % project.length;
      visible.push({ ...project[index], originalIndex: index });
    }
    return visible;
  };

  const getTranslatedDescription = (projectIndex: number) => {
    const projectKey = `p${projectIndex + 1}` as keyof typeof translation.projectP
    return translation.projectP[projectKey] || project[projectIndex]?.description || ''

  }

  const visibleProjects = getVisibleProjects();

  return (
    <motion.div
      className="container-projects"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="title-projects"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2>{translation.header.titleP}</h2>
      </motion.div>

      <motion.div
        className="carousel-wrapper"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <button
          onClick={prevSlide}
          className="carousel-nav-button carousel-nav-left"
          aria-label="Anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="carousel-container">
          <div className="carousel-fan">
            {visibleProjects.map((proj, index) => (
              <motion.div
                key={`${proj.originalIndex}-${index}`}
                className={`fan-item fan-item-${index}`}
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotateY: 0,
                  x: 0 
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <div className="project-card">
                  <div className="project-image-container">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="project-image"
                      draggable={false}
                    />
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{proj.title}</h3>
                    <p className="project-description">{getTranslatedDescription(proj.originalIndex)}</p>
                    
                    {proj.skill && proj.skill.length > 0 && (
                      <div className="project-tags">
                        {proj.skill.map((skill, idx) => (
                          <span key={idx} className="project-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* ICONOS DEBAJO DE LAS SKILLS */}
                    <div className="project-icons">
                      {proj.web?.github && (
                        <Tooltip title="GitHub" placement="bottom">
                          <button
                            className="project-icon-button"
                            onClick={() => window.open(proj.web.github, '_blank')}
                            aria-label="Ver repositorio en GitHub"
                          >
                            <Github size={20} />
                          </button>
                        </Tooltip>
                      )}
                      {proj.web?.url && (
                        <Tooltip title="Web Site" placement="bottom">
                          <button
                            className="project-icon-button"
                            onClick={() => window.open(proj.web.url, '_blank')}
                            aria-label="Visitar sitio web"
                          >
                            <Globe size={20} />
                          </button>
                        </Tooltip>
                      )}
                      {proj.web?.note && (
                        <Tooltip title="Ver descripción" placement="bottom">
                          <button
                            className="project-icon-button"
                            onClick={() => alert(proj.web.note)}
                            aria-label="Ver descripción del proyecto"
                          >
                            <NotepadText size={20} />
                          </button>
                        </Tooltip>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="carousel-nav-button carousel-nav-right"
          aria-label="Siguiente"
        >
          <ChevronRight size={24} />
        </button>
      </motion.div>

      <div className="carousel-indicators">
        {project.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`indicator-dot ${index === currentIndex ? "active" : ""}`}
            aria-label={`Ir a proyecto ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
};