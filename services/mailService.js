const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendMail = async (data) => {

  const {
    name,
    phone,
    email,
    service,
    website,
  } = data;

  let companyName = "Website";

  if (website === "shippzi") {
    companyName = "Shippzi";
  }

  if (website === "nvkar") {
    companyName = "Nvkar";
  }

  const mailOptions = {

    from: `"${companyName} Support" <${process.env.EMAIL_USER}>`,

    to: process.env.RECEIVER_EMAIL,

    subject: `New Inquiry From ${companyName}`,

    html: `
    <!DOCTYPE html>
    <html>

    <body style="
      margin:0;
      padding:0;
      background:#f4f4f4;
      font-family:Arial,sans-serif;
    ">

    <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
    <td align="center">

    <table width="600" cellpadding="0" cellspacing="0"
      style="
        background:#ffffff;
        margin-top:30px;
        border-radius:12px;
        overflow:hidden;
      "
    >

      <tr>
        <td style="
          background:#000000;
          color:#ffffff;
          padding:30px;
          text-align:center;
          font-size:28px;
          font-weight:bold;
        ">
          ${companyName}
        </td>
      </tr>

      <tr>
        <td style="padding:30px;text-align:center;">

          <h2 style="margin:0;color:#222;">
            New Customer Inquiry
          </h2>

          <p style="color:#777;margin-top:10px;">
            A customer submitted the form.
          </p>

        </td>
      </tr>

      <tr>
        <td style="padding:0 30px 30px;">

          <table width="100%" cellpadding="12" cellspacing="0"
            style="
              border:1px solid #eeeeee;
              border-radius:10px;
            "
          >

            <tr>
              <td style="font-weight:bold;">Name</td>
              <td>${name}</td>
            </tr>

            <tr>
              <td style="font-weight:bold;">Phone</td>
              <td>${phone}</td>
            </tr>

            <tr>
              <td style="font-weight:bold;">Email</td>
              <td>${email}</td>
            </tr>

            <tr>
              <td style="font-weight:bold;">Service</td>
              <td>${service}</td>
            </tr>

          </table>

        </td>
      </tr>

      <tr>
        <td style="
          background:#f7f7f7;
          padding:20px;
          text-align:center;
          color:#888;
          font-size:13px;
        ">
          © ${new Date().getFullYear()} ${companyName}
        </td>
      </tr>

    </table>

    </td>
    </tr>
    </table>

    </body>
    </html>
    `,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendMail;