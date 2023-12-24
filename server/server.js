const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
require('dotenv').config();

app.use(express.json()); // For parsing application/json
app.use(cors()); // Cross Origin Resource Sharing for nodemailer

const port = process.env.PORT || 3001;

//nodemailer setup
const transporter = require('./mailer/mailer');

// Contact Me Email
app.post('/send-message', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL, // sender address
    to: process.env.SEND_TO, // list of receivers
    subject: 'Portfolio - Contact Form', // Subject line
    text: `From: ${name}\nEmail: ${email}\nMessage: ${message} `, // plain text body
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});