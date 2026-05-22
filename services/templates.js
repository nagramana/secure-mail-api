const getCompanyDetails = (website) => {

  let companyName = "Website";

  let supportEmail =
    "support@example.com";

  let websiteLink =
    "https://example.com";

  let logo =
    "https://yourdomain.com/logos/default.png";

  /* ============================================================
     SHIPPZI
  ============================================================ */

  if (website === "shippzi") {

    companyName =
      "Shippzi";

    supportEmail =
      "partnerships@shippzi.com";

    websiteLink =
      "https://shippzi.in";

    logo =
      "https://res.cloudinary.com/dzosvvlib/image/upload/v1778587420/logo_white_icvrqm.png";

  }

  /* ============================================================
     NVKAR
  ============================================================ */

  if (website === "nvkar") {

    companyName =
      "NVKAR";

    supportEmail =
      "support@nvkar.in";

    websiteLink =
      "https://nvkar.in";

    logo =
      "https://res.cloudinary.com/dzosvvlib/image/upload/v1778587420/logo_white_icvrqm.png";

  }

  return {

    companyName,

    supportEmail,

    websiteLink,

    logo,

  };

};

/* ============================================================
   ADMIN TEMPLATE
============================================================ */

const adminTemplate = ({
  name,
  phone,
  email,
  service,
  website,
}) => {

  const {

    companyName,

    logo,

  } = getCompanyDetails(
    website
  );

  return `

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

<table width="650"
cellpadding="0"
cellspacing="0"

style="
  background:#ffffff;
  margin-top:40px;
  border-radius:16px;
  overflow:hidden;
  box-shadow:0 4px 18px rgba(0,0,0,0.08);
">

<!-- HEADER -->

<tr>

<td style="
  background:#111111;
  padding:35px;
  text-align:center;
">

<img
  src="${logo}"
  alt="${companyName}"
  width="220"
  style="
    display:block;
    margin:0 auto;
  "
/>

<p style="
  color:#00d084;
  margin-top:15px;
  font-size:16px;
  font-weight:bold;
">
  🚀 New Form Submission
</p>

</td>

</tr>

<!-- BODY -->

<tr>

<td style="
  padding:40px;
">

<h2 style="
  margin-top:0;
  color:#222;
">
  New Customer Details
</h2>

<table width="100%"
cellpadding="14"
cellspacing="0"

style="
  margin-top:25px;
  border:1px solid #eeeeee;
  border-radius:10px;
">

<tr>
<td style="font-weight:bold;width:180px;">
Name
</td>

<td>
${name}
</td>
</tr>

<tr>
<td style="font-weight:bold;">
Phone
</td>

<td>
${phone}
</td>
</tr>

<tr>
<td style="font-weight:bold;">
Email
</td>

<td>
${email}
</td>
</tr>

<tr>
<td style="font-weight:bold;">
Service
</td>

<td>
${service}
</td>
</tr>

</table>

<div style="
  margin-top:35px;
  border-top:1px solid #eeeeee;
  padding-top:20px;
">

<p style="
  margin:0;
  color:#777;
">
  ${companyName} Mail System
</p>

</div>

</td>
</tr>

</table>

</td>
</tr>

</table>

</body>
</html>

`;

};

/* ============================================================
   CUSTOMER TEMPLATE
============================================================ */

const customerTemplate = ({
  name,
  service,
  website,
}) => {

  const {

    companyName,

    supportEmail,

    websiteLink,

    logo,

  } = getCompanyDetails(
    website
  );

  /* ============================================================
     SHIPPZI TEMPLATE
  ============================================================ */

  if (website === "shippzi") {

    return `

<!DOCTYPE html>
<html>

<body style="
  margin:0;
  padding:0;
  background:#f5f5f5;
  font-family:Arial,sans-serif;
">

<table width="100%"
cellpadding="0"
cellspacing="0">

<tr>
<td align="center">

<table width="650"
cellpadding="0"
cellspacing="0"

style="
  background:#ffffff;
  margin-top:20px;
  border-radius:16px;
  overflow:hidden;
  box-shadow:0 4px 18px rgba(0,0,0,0.08);
">

<!-- HEADER -->

<tr>

<td style="
  background:#111111;
  padding:30px;
">

<img
  src="${logo}"
  width="160"
/>

<p style="
  color:#00d084;
  font-size:20px;
  font-weight:bold;
  margin-top:18px;
">

📮 Partnership Inquiry

</p>

</td>

</tr>

<!-- BODY -->

<tr>

<td style="
  padding:35px;
">

<p style="
  color:#222222;
  font-size:18px;
">

Hi <strong>${name}</strong>,

</p>

<p style="
  color:#555555;
  line-height:1.8;
">

Thank you for your partnership inquiry!

We're excited about the potential
to collaborate.

</p>

<h3 style="
  margin-top:30px;
  color:#111111;
">

⏱️ Next Steps:

</h3>

<p style="
  color:#555555;
  line-height:1.8;
">

Our BD team will contact you
within 2-3 business days to discuss
your goals and partnership options.

</p>

<h3 style="
  margin-top:35px;
  color:#111111;
">

⭐ Why Partner with Shippzi:

</h3>

<table width="100%"
cellpadding="10">

<tr>
<td>
➜ Growing network with 5000+
active riders across major cities
</td>
</tr>

<tr>
<td>
➜ Real-time tracking and reliable
delivery ecosystem
</td>
</tr>

<tr>
<td>
➜ Dedicated partner support team
for seamless integration
</td>
</tr>

<tr>
<td>
➜ Flexible partnership models
tailored to your business needs
</td>
</tr>

</table>

<div style="
  background:#eefbf5;
  border-left:4px solid #00d084;
  padding:18px;
  border-radius:8px;
  margin-top:30px;
">

🎉 Early Partner Advantage:
Get exclusive benefits &
priority support as we scale!

</div>

<div style="
  background:#f5f5f5;
  padding:20px;
  border-radius:10px;
  margin-top:30px;
">

<h3 style="
  margin-top:0;
">

Get in Touch

</h3>

<p>
📧 partnerships@shippzi.com
</p>

<p>
📞 +91-SHIPPZI-1
</p>

<p>
🗓 calendly.com/shippzi-partnerships
</p>

</div>

<div style="
  margin-top:35px;
">

<a href="${websiteLink}"

style="
  background:#ffffff;
  border:1px solid #111111;
  color:#111111;
  text-decoration:none;
  padding:14px 26px;
  border-radius:8px;
  display:inline-block;
  font-weight:bold;
">

Schedule a Call

</a>

</div>

<div style="
  margin-top:45px;
  border-top:1px solid #eeeeee;
  padding-top:25px;
">

<p style="
  color:#555555;
">

Warm regards,

</p>

<p style="
  font-weight:bold;
  color:#111111;
">

Shippzi Team

</p>

<p style="
  margin-top:30px;
  color:#999999;
  font-size:13px;
">

💛 Let's build something great together!

</p>

</div>

</td>

</tr>

</table>

</td>
</tr>

</table>

</body>
</html>

`;

  }

  /* ============================================================
     NVKAR TEMPLATE
  ============================================================ */

  const applicationId =
    "APP-" +
    Math.floor(
      100000 + Math.random() * 900000
    );

  const today =
    new Date().toLocaleDateString();

  return `

<!DOCTYPE html>
<html>

<body style="
  margin:0;
  padding:0;
  background:#f3f3f3;
  font-family:Arial,sans-serif;
">

<table width="100%"
cellpadding="0"
cellspacing="0">

<tr>
<td align="center">

<table width="700"
cellpadding="0"
cellspacing="0"

style="
  background:#ffffff;
  margin-top:30px;
  border-radius:16px;
  overflow:hidden;
">

<tr>

<td style="
  background:#6f42c1;
  padding:25px;
  text-align:center;
">

<h2 style="
  color:#ffffff;
  margin:0;
  font-size:26px;
">

NVKAR Application Welcome Email

</h2>

<p style="
  color:#efe4ff;
  margin-top:10px;
">

Application Submitted Successfully

</p>

</td>

</tr>

<tr>

<td style="
  background:#7d52b9;
  padding:40px;
  text-align:center;
">

<img
  src="${logo}"
  alt="NVKAR"
  width="220"
  style="
    display:block;
    margin:0 auto 20px;
  "
/>

<h1 style="
  color:#ffffff;
  margin:0;
  font-size:38px;
">

NVKAR

</h1>

<p style="
  color:#f3e9ff;
  margin-top:12px;
  font-size:16px;
">

Welcome To India's Trusted Service Network

</p>

</td>

</tr>

<tr>

<td style="
  padding:40px;
">

<p style="
  font-size:18px;
  color:#333333;
">

Hello
<strong>${name}</strong>,

</p>

<p style="
  color:#555555;
  line-height:1.8;
  font-size:15px;
">

Thank you for applying with NVKAR.

We are excited to review your application
and connect you with trusted opportunities.

</p>

<div style="
  background:#f3ecff;
  border-left:4px solid #7d52b9;
  padding:22px;
  border-radius:10px;
  margin-top:30px;
">

<h3 style="
  margin-top:0;
  color:#7d52b9;
">

📋 Application Details

</h3>

<p>
<strong>Application ID:</strong>
${applicationId}
</p>

<p>
<strong>Service:</strong>
${service}
</p>

<p>
<strong>Date:</strong>
${today}
</p>

<p>
<strong>Status:</strong>
Under Review
</p>

</div>

<div style="
  text-align:center;
  margin-top:40px;
">

<a href="${websiteLink}"

style="
  background:#7d52b9;
  color:#ffffff;
  text-decoration:none;
  padding:16px 36px;
  border-radius:8px;
  display:inline-block;
  font-weight:bold;
  font-size:16px;
">

Visit Website

</a>

</div>

<div style="
  margin-top:45px;
  border-top:1px solid #eeeeee;
  padding-top:25px;
">

<p style="
  color:#555555;
  line-height:1.8;
">

Thank you for choosing NVKAR.

</p>

<p style="
  margin-top:25px;
  color:#333333;
">

Warm Regards,

<br/><br/>

<strong>
Team NVKAR
</strong>

</p>

<p style="
  color:#777777;
  font-size:13px;
  margin-top:20px;
">

Support:
${supportEmail}

</p>

</div>

</td>

</tr>

</table>

</td>
</tr>

</table>

</body>
</html>

`;

};

module.exports = {

  adminTemplate,

  customerTemplate,

};