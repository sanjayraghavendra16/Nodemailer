const nodemailer = require("nodemailer")


const sendMail = async(req,res)=>{
    const {subject,EmailBody}=req.body
    console.log(subject,EmailBody)
     let test = await main(subject,EmailBody).catch(console.error);

    res.send(test)
}

async function main(subject,emailBody){

    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'kassandra.mccullough54@ethereal.email',
            pass: 'gGJS8zd1GgMjjD356W'
        }
    });
    


    const info = await transporter.sendMail({
        from: '"Sanjay" <sanjay@gmail.com>',
        to: 'ans@gmail.com',
        subject:subject,
        text: emailBody,
       
    });

    

    console.log("message sent to :%s",info.messageId);
    return info;
}







module.exports = sendMail;
 