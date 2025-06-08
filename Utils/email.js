const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (options) => {
    try {
        // Create transporter for Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,       // your Gmail address
                pass: process.env.GMAIL_APP_PASS    // your Gmail app password (not regular password)
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
