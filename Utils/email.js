const nodemailer = require('nodemailer');

const sendEmail = async (option)=>{
    try{
    const transporter = nodemailer.createTransport({

        host: process.env.HOST,
        port: parent(process.env.MAIL_PORT, 10),
        secure :process.env.MAIL_PORT === 465,
        auth:{
            user: process.env.USERNAME,
            pass: process.env.PASSWORD

        }
    })
    const emailOptions ={
        from: 'Cineflix support<support@cineflix.com>',
        to:option.email,
        subject:option.subject,
        text:option.message
    }
   await transporter.sendMail(emailOptions);
}catch(err){
    console.log('failed' ,err);
    throw new Error("erorrrrrrrr");
}

}
module.exports =sendEmail;

