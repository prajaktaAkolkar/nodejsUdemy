const sgMail = require('@sendgrid/mail');
const sendGridAPIKey ='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';

sgMail.setApiKey(sendGridAPIKey);


const sendWelcomeEmail = (email,name)=>{
sgMail.send({
    to :email,
    from:'prajakta.akolkar@mangoitsolutions.in',
    subject :'Thanks for Joining',
    text:`Welcome to the app,${name}. Letme Know about you app`
})
}
module.exports = {
    sendWelcomeEmail
}