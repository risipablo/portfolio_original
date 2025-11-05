import { useRef, useState } from "react"
import type { IContact } from "../interface/type"
import {type ChangeEvent, type FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send } from 'lucide-react';
import "../style/contac.css"
import { toast, Toaster } from "react-hot-toast";
import { useLanguage } from "../hook/UseLanguage";
import { enTranslations, esTranslations } from "./translation/translate.ts";
import axios from 'axios';

const serverFront = "https://portafolio-original.onrender.com"; 
// const serverFront = "http://localhost:3001";


const api = axios.create({
  baseURL: serverFront,
  timeout: 60000, 
  headers: {
    'Content-Type': 'application/json',
  },
});


export const Contact = () => {
    const [formData,setFormData]= useState<IContact>({
        name: "",
        cellphone: "",
        email: "",
        text: ""
    })
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    
    
    const {language} = useLanguage()
    const translation = language === 'en' ? esTranslations : enTranslations


     
     
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = translation.contact.name || "Please enter your name";
        if (!formData.cellphone.trim()) newErrors.cellphone = translation.contact.cell || "Please enter your phone number";
        if (!formData.email.trim()) newErrors.email = translation.contact.email || "Please enter your email";
        if (!formData.text.trim()) newErrors.text = translation.contact.hconsul || "Please enter your message";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsLoading(false);
            return;
        }

        try {
            await toast.promise(
                api.post('/send-email', {
                    name: formData.name,
                    email: formData.email,
                    message: formData.text,
                    cellphone: formData.cellphone
                }),
                {
                    loading: "Sending...",
                    success: "Message sent successfully!",
                    error: (err) => {
                        if (err.response?.data?.error) {
                            return err.response.data.error;
                        }
                        return err.message || "Error sending message.";
                    }
                }
            );

            // Reset form
            setFormData({
                name: "",
                cellphone: "",
                email: "",
                text: ""
            });
            setErrors({});

        } catch (error) {
            
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };
    

    return(
        <motion.div 
            className="container-contact"
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
            <h2>{translation.contact.title}</h2>
        </motion.div>

        <motion.p 
            className="description-contact"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
        {translation.contact.p}
        </motion.p>

        <motion.form 
        className="contact-form" 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        >
        {/* COLUMNA IZQUIERDA */}
        <div className="form-left">
            <div className="form-group">
            <label htmlFor="nombre">{translation.contact.name} *</label>
            <input
                type="text"
                id="nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={translation.contact.name}
            />
            </div>

            <div className="form-group">
            <label htmlFor="celular">{translation.contact.cell}*</label>
            <input
                type="tel"
                id="celular"
                name="cellphone"
                value={formData.cellphone}
                onChange={handleChange}
                required
                placeholder="+54 9 11 1234-5678"
            />
            </div>

            <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={translation.contact.email}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}

            </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="form-right">
            <div className="form-group">
            <label htmlFor="consulta">{translation.contact.consultation} *</label>
            <textarea
                id="consulta"
                name="text"
                value={formData.text}
                onChange={handleChange}
                required
                placeholder={translation.contact.consultation}
                rows={8}
            ></textarea>
            {errors.text && <span className="error-text">{errors.text}</span>}
            </div>

            <button type="submit" className="submit-button" disabled={isLoading}>
            <Send size={20} />
            <span>{translation.contact.send}</span>
            </button>
        </div>
        </motion.form>
        <Toaster/>
        </motion.div>
    )
}