const nodemailer = require('nodemailer');
const { createTransport } = require("nodemailer");
const http = require('http');

const PORT = 8000;

const server = http.createServer((req,res) => {
    let transporter = createTransport({
        service: 'gmail',
        secure : true,
        PORT : 465,
        auth: {
            user : 'projectdev2405@gmail.com',
            pass : 'drkhghjfqnhdloyi'
        }
    });
    
    // mail option means kisko bhejna hai mail with subject and body of mail. We are also add attachments as well.
    let mailOptions = {
        from: 'projectdev2405@gmail.com',
        to: 'abhinavaggarwal1724@outlook.com',
        subject: 'Test Email from Node.js',
        text: 'This is a test email sent from a Node.js app!',
        html: '<b>Hello from Node.js!</b>'
    }
    
    // Now we use sendMail of transporter.
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

server.listen(PORT , () =>{
    console.log(`Server listen on ${PORT}`);
});

