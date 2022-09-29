require('dotenv').config()
const sgMail=require('@sendgrid/mail')
const fromAccount=process.env.SENDER_EMAIL_ACCOUNT
const toAccount=process.env.RECEIVER_EMAIL_ACCOUNT

sgMail.setApiKey(process.env.SEND_MAIL_API_KEY)

const message={
    to:toAccount,
    from:fromAccount,
    subject:'Welcome',
    text:'Thank you for joining our community. Be sure to get the best experience'
}

const sendMail=async ()=>{
    await sgMail.send(message)
    console.log('email sent')
}

sendMail().catch(err=>{
    console.log(err)
})