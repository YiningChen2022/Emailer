const sendgrid = require("sendgrid");
const helper= sendgrid.mail;
const keys = require("../config/keys");
class Mailer extends helper.Mail {
  //sendgrid

  constructor({ subject, recipients }, content) {
    super();
    this.sgApi = sendgrid(keys.sendGridKey);

    this.from_email = new helper.Email("no-reply@eamily.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);
    //addContent already builted in hepler.Mail class
    this.addContent(this.body);
    //we define those two function
    this.addClickTracking();
    this.addRecipients();
  }
  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(eamil);
    });
  }
  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);
    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }
  addRecipients() {
    const personalize = new hepler.Personalization();
    this.recipients.forEach((recipient) => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }
  async send() {
    const request = this.sgApi.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: this.toJSON(),
    });

    const response = this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;
