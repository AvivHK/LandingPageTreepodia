const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '***',
    pass: '***'
  }
});


app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  
  var mailOptions1 = {
    from: 'avivhh@gmail.com',
    to: 'tal@treepodia.com',
    subject: "A new contact detail arrived!",
    text: `contact name: ${user.firstName} contact last name: ${user.familyName} company: ${user.company}, website: ${user.website}, industry: ${user.industry} ${user.industryOther ? "-" + user.industryOther : ""}, email: ${user.email}, phone: ${user.phone}`
  };

  var mailOptions2 = {
    from: 'avivhh@gmail.com',
    to: 'ronr@treepodia.com',
    subject: "A new contact detail arrived!",
    text: `contact name: ${user.firstName} contact last name: ${user.familyName} company: ${user.company}, website: ${user.website}, industry: ${user.industry} ${user.industryOther ? "-" + user.industryOther : ""}, email: ${user.email}, phone: ${user.phone}`
  };

  var mailOptions3 = {
    from: 'avivhh@gmail.com',
    to: 'avivhkn@gmail.com',
    subject: "A new contact detail arrived!",
    text: `contact name: ${user.firstName} contact last name: ${user.familyName} company: ${user.company}, website: ${user.website}, industry: ${user.industry} ${user.industryOther ? "-" + user.industryOther : ""}, email: ${user.email}, phone: ${user.phone}`
  };

  transporter.sendMail(mailOptions2, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response + user);
    }
  });

  transporter.sendMail(mailOptions1, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response + user);
    }
  });

  transporter.sendMail(mailOptions3, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
  next();
});

// //////////////////////////////////////////////////////////////////////////
// app.use(express.static(path.join(__dirname, 'build')));
// //////////////////////////////////////////////////////////////////////////



// //////////////////////////////////////////////////////////////////////////
// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
// //////////////////////////////////////////////////////////////////////////

const port = 4200;
app.listen(process.env.PORT || port, function () {
  console.log(`Server running on ${port}`);
});


