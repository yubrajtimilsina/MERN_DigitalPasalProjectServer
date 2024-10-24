import nodemailer from 'nodemailer'

const sendMail = ()=>{
    nodemailer.createTransport({
        service : 'gmail'
    })

}


export default sendMail