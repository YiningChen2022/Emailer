const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const serveyTemplate=require("../services/emailTemplates/surveyTemplate")


const Survey = mongoose.model("surveys");

module.exports = (app) => {
  //first find out that they are logged in then see if they have enough credit and then do the business
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(",")
        .map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    //send our email;
    const mailer = new Mailer(survey,surveyTemplate(survey));
    mailer.send();
  });
};
