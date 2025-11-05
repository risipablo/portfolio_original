const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Validar variables de entorno requeridas
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Error: Faltan variables de entorno EMAIL_USER o EMAIL_PASS');
    process.exit(1);
}

const corsOptions = {
    origin: ['http://localhost:5173', 'https://portfolio-original-pearl.vercel.app', 'https://portafolio-original.onrender.com'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}

// ✅ CORS debe ir ANTES de cualquier otra cosa
app.use(cors(corsOptions));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    },
    connectionTimeout: 30000, 
    greetingTimeout: 30000,
    socketTimeout: 30000
});

// Verificar configuración del transporter
transporter.verify(function (error, success) {
    if (error) {
        console.log('❌ Error configurando nodemailer:', error);
    } else {
        console.log('✅ Servidor de correo listo');
    }
});

app.post('/send-email', async (req, res) => {
    try {
        const { name, email, message, cellphone } = req.body;

        // Validar campos requeridos
        if (!name || !email || !message) {
            return res.status(400).json({ 
                error: 'Todos los campos son requeridos: name, email, message' 
            });
        }

        const mailOptions = {
            from: `"Notificaciones Portafolio" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Nuevo contacto: ${name} - Portafolio`,
            text: `
                NUEVO MENSAJE DESDE TU PORTFOLIO
                ───────────────────────────────
                📋 Información del contacto:
                • Nombre: ${name}
                • Email: ${email}
                • Celular: ${cellphone || 'No proporcionado'}
                • Fecha: ${new Date().toLocaleString()}

                ✉️ Mensaje:
                ${message}
                ───────────────────────────────
            `,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; color: white; text-align: center;">
                        <h1 style="margin: 0;">Nuevo Mensaje - Portafolio</h1>
                    </div>
                    
                    <div style="padding: 20px; background: #f8f9fa;">
                        <h3 style="color: #333;">📋 Información del contacto</h3>
                        <table style="width: 100%; background: white; padding: 15px; border-radius: 5px;">
                            <tr>
                                <td style="padding: 8px; font-weight: bold;">👤 Nombre:</td>
                                <td style="padding: 8px;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; font-weight: bold;">📧 Email:</td>
                                <td style="padding: 8px;">${email}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; font-weight: bold;">📱 Celular:</td>
                                <td style="padding: 8px;">${cellphone || 'No proporcionado'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; font-weight: bold;">📅 Fecha:</td>
                                <td style="padding: 8px;">${new Date().toLocaleString()}</td>
                            </tr>
                        </table>
                    </div>
                    
                    <div style="padding: 20px;">
                        <h3 style="color: #333;">💬 Mensaje</h3>
                        <div style="background: white; padding: 15px; border-left: 4px solid #667eea; border-radius: 3px;">
                            <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
                        </div>
                    </div>
                    
                    <div style="text-align: center; padding: 20px; background: #f1f3f4; font-size: 12px; color: #666;">
                        <p>Este mensaje fue enviado desde el formulario de contacto de tu portafolio web.</p>
                    </div>
                </div>
            `
        };

        // Enviar el email usando async/await
        const info = await transporter.sendMail(mailOptions);
        
        console.log('✅ Email enviado exitosamente:', info.response);
        
        res.status(200).json({ 
            message: 'Correo enviado con éxito',
            messageId: info.messageId 
        });

    } catch (error) {
        console.error('❌ Error en /send-email:', error);
        res.status(500).json({ 
            error: 'Error al enviar el correo',
            details: error.message 
        });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});