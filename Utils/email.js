const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (options) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.GMAIL_HOST,
            port: parseInt(process.env.GMAIL_PORT, 10),
            secure: true, // Use true for port 465
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASS
            }
        });

        const emailOptions = {
            from: '"Cineflix Support" <no-reply@cineflix.com>',
            to: options.email,
            subject: options.subject,
            html: options.message
        };

        const info = await transporter.sendMail(emailOptions);
        console.log('Email sent successfully:', info.messageId);
        return info;

    } catch (error) {
        console.error('Email sending failed:', error);
        throw new Error(`Failed to send email: ${error.message}`);
    }
};

module.exports = sendEmail;
