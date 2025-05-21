const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (options) => {
    try {
        // Create transporter with Mailtrap configuration
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: parseInt(process.env.MAILTRAP_PORT, 10) || 587, 
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD
            }
        });

        // Define email options
        const emailOptions = {
            from: '"Cineflix Support" <no-reply@cineflix.com>',
            to: options.email,
            subject: options.subject,
            html: options.message

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