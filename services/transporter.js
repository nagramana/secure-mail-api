const nodemailer =
  require("nodemailer");

const createTransporter = (
  smtpConfig
) => {

  return nodemailer.createTransport({

    service:
      smtpConfig.service,

    auth: {

      user:
        smtpConfig.auth.user,

      pass:
        smtpConfig.auth.pass,

    },

  });

};

module.exports =
  createTransporter;