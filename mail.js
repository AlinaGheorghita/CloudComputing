// // const sgMail = require("@sendgrid/mail");
// // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// // const dotenv = require("dotenv");
// // dotenv.config();

// // const sendMail = async (sender, subject, msg) => {
// //     const message = `
// //         Email: ${sender}\r\n
// //         Message: ${msg}
// //       `;


// //     const data = {
// //         to: 'alinagheorghita25@gmail.com',
// //         from: 'alinagheorghita25@gmail.com',
// //         subject,
// //         text: message,
// //     };

// //     await sgMail.send(data);
// // };


const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'reina.senger93@ethereal.email',
        pass: 'wSfSn21UnZHaC7hZHn'
    }
});

const sendMail = async (sender, subject, msg) => {
    const message = {
        from: `${sender}`,
        to: "reina.senger93@ethereal.email",
        subject: `${subject}`,
        text: `${msg}`
    }

    transporter.sendMail(message, function(err, info) {
        if (err) {
        console.log(err)
        }
    });
}

module.exports = {
    sendMail,
}