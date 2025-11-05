const { Resend } = require('resend');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Validar variables de entorno requeridas
if (!process.env.RESEND_API_KEY || !process.env.EMAIL_USER) {
    console.error('Error: Faltan variables de entorno RESEND_API_KEY o EMAIL_USER');
    process.exit(1);
}

const resend = new Resend(process.env.RESEND_API_KEY);

const corsOptions = {
    origin: ['http://localhost:5173', 'https://portfolio-original-pearl.vercel.app', 'https://portafolio-original.onrender.com'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Health check
app.get('/', (req, res) => {
    res.json({ status: 'ok', message: 'Servidor funcionando correctamente' });
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.post('/send-email', async (req, res) => {
    console.log('📨 Petición recibida en /send-email');
    console.log('📦 Body:', req.body);
    
    try {
        const { name, email, message, cellphone } = req.body;

        // Validar campos requeridos
        if (!name || !email || !message) {
            console.log('❌ Faltan campos requeridos');
            return res.status(400).json({ 
                error: 'Todos los campos son requeridos: name, email, message' 
            });
        }

        console.log('📧 Enviando email con Resend...');

        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Nuevo contacto: ${name} - Portafolio`,
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
                                <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; font-weight: bold;">📱 Celular:</td>
                                <td style="padding: 8px;">${cellphone || 'No proporcionado'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; font-weight: bold;">📅 Fecha:</td>
                                <td style="padding: 8px;">${new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })}</td>
                            </tr>
                        </table>
                    </div>
                    
                    <div style="padding: 20px;">
                        <h3 style="color: #333;">💬 Mensaje</h3>
                        <div style="background: white; padding: 15px; border-left: 4px solid #667eea; border-radius: 3px;">
                            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                        </div>
                    </div>
                    
                    <div style="text-align: center; padding: 20px; background: #f1f3f4; font-size: 12px; color: #666;">
                        <p>Este mensaje fue enviado desde el formulario de contacto de tu portafolio web.</p>
                        <p style="margin-top: 10px;">
                            <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">Responder a ${name}</a>
                        </p>
                    </div>
                </div>
            `
        });

        if (error) {
            console.error('❌ Error de Resend:', error);
            return res.status(400).json({ 
                error: 'Error al enviar el correo',
                details: error.message 
            });
        }

        console.log('✅ Email enviado exitosamente:', data);
        
        res.status(200).json({ 
            message: 'Correo enviado con éxito',
            messageId: data.id 
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
    console.log(`📧 Emails se enviarán a: ${process.env.EMAIL_USER}`);
});