const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    try {
        // Validate input options
        if (!options?.email || !options?.subject || !options?.message) {
            throw new Error('Missing required email options: email, subject, and message are required');
        }

        // Create transporter with Mailtrap configuration
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST || 'smtp.mailtrap.io',
            port: parseInt(process.env.MAILTRAP_PORT, 10) || 587, // Mailtrap supports 587, 2525, or 465
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD
            },
            connectionTimeout: 10000,
            tls: {
                rejectUnauthorized: process.env.NODE_ENV === 'production'
            }
        });

        // Define email options
        const emailOptions = {
            from: '"Cineflix Support" <support@cineflix.com>',
            to: options.email,
            subject: options.subject,
            text: options.message,
            html: options.html || `<p>${options.message}</p>`
        };

        // Send email
        const info = await transporter.sendMail(emailOptions);
        console.log('Email sent successfully:', info.messageId);
        return info;

    } catch (error) {
        console.error('Email sending failed:', error);
        throw new Error(`Failed to send email: ${error.message}`);
    }
};

module.exports = sendEmail;