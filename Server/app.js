const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const nodeMailer = require('nodemailer');
const config = require('./config.js');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('port',process.env.PORT || 8081);
app.use(express.static(__dirname + '/build'));


app.post('/send-email',function(req,res){
    const output = `
    <p>Tiene una nueva consulta</p>
    <h3>Detalles de contacto</h3>
    <ul>
        <li>Nombre: ${req.body.name}</li>
        <li>Telefono: ${req.body.phone}</li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Mensaje</h3>
    <p>${req.body.message}</p>
    `;
    let transporter = nodeMailer.createTransport({
        service:'hotmail',
        auth: {
            user: 'podologia-sc@hotmail.com',
            pass: config.EMAIL_PASSWORD
        }
    });

    let mailOptions = {
        from: 'podologia-sc@hotmail.com',
        to:'slc@live.com.ar',
        subject:'Nueva consulta',
        html:output
    }

    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Send message');
        }
    });
    res.status(200).end();
});

const server = app.listen(app.get('port'), () => {
    console.log('Escuchando en el puerto 8081');
});
