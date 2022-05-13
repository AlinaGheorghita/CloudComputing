const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const dotenv = require("dotenv");
dotenv.config();

const sendMail = async (sender, subject, msg) => {
    const message = `
        Email: ${sender}\r\n
        Message: ${msg}
      `;


    const data = {
        to: 'alinagheorghita25@gmail.com',
        from: 'alinagheorghita25@gmail.com',
        subject,
        text: message,
    };
    console.log(data);
    await sgMail.send(data);
};
// const msgToSend = {
//     to: receiver,
//     from: sender,
//     subject: subject,
//     text: msg,
// };

// sgMail
//     .send(msgToSend)
//     .then((response) => {
//         console.log(response[0].statusCode);
//         return response[0].statusCode;
//     })
//     .catch((error) => {
//         console.error(error);
//     });
//};

module.exports = {
    sendMail,
}