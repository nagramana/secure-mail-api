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
      "shippzi.support@gmail.com";

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
      "https://res.cloudinary.com/dzosvvlib/image/upload/v1779709259/nvkar_white_fbnyxj.png";

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
   SHIPPZI RIDER TEMPLATE
============================================================ */

if (
website === "shippzi" &&
service === "Rider Application"
) {

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

<td style="
  background:#111111;
  padding:30px;
  text-align:center;
">

<img
src="${logo}"
width="160"

style="
display:block;
margin:0 auto;
"
/>

<p style="
  color:#00d084;
  font-size:20px;
  font-weight:bold;
  margin-top:18px;
  text-align:center;
">

📮 Rider Application

</p>

</td>


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

Thank you for applying!

Your rider application has been received successfully.

We're excited to welcome you
to the Shippzi delivery network.

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

Our rider onboarding team
will contact you within
24-48 hours for verification
and onboarding process.

</p>

<h3 style="
  margin-top:35px;
  color:#111111;
">

⭐ Why Ride with Shippzi:

</h3>

<table width="100%"
cellpadding="10">

<tr>
<td>
➜ Flexible working hours
</td>
</tr>

<tr>
<td>
➜ Weekly payout support
</td>
</tr>

<tr>
<td>
➜ High earning opportunities
</td>
</tr>

<tr>
<td>
➜ Fast growing delivery network
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

🎉 Early Rider Advantage:
Start early and earn exciting
performance incentives!

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
📧 shippzi.support@gmail.com
</p>

<p>
📞 +91 78930 24466
</p>

<p>
🌐 www.shippzi.com
</p>

</div>

<div style="
  margin-top:35px;
">

<a
href="https://play.google.com/store/apps/details?id=com.shippzi.rider&pcampaignid=web_share"
target="_blank"

style="
background:#00d084;
border:1px solid #00d084;
color:#ffffff;
text-decoration:none;
padding:14px 26px;
border-radius:8px;
display:inline-block;
font-weight:bold;
">

Download Shippzi App

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

Shippzi Rider Team

</p>

<p style="
  margin-top:30px;
  color:#999999;
  font-size:13px;
">

🚴 Start your earning journey with Shippzi!

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
   SHIPPZI PARTNER TEMPLATE
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

<!-- HEADER -->

<tr>

<td style="
  background:#111111;
  padding:30px;
  text-align:center;
">

<img
src="${logo}"
width="160"

style="
display:block;
margin:0 auto;
"
/>

<p style="
  color:#00d084;
  font-size:20px;
  font-weight:bold;
  margin-top:18px;
  text-align:center;
">

📮 Partnership Inquiry

</p>

</td>

</tr>


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
within 2-3 business days
to discuss your goals and
explore partnership options.

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
📧 shippzi.support@gmail.com
</p>

<p>
📞 +91 78930 24466
</p>



</div>

<div style="
  margin-top:35px;
">

<a
href="https://wa.me/917893026644?text=Hello%20Shippzi%20Team"
target="_blank"

style="
background:#25D366;
border:1px solid #25D366;
color:#ffffff;
text-decoration:none;
padding:14px 26px;
border-radius:8px;
display:inline-block;
font-weight:bold;
"

>

Contact via WhatsApp

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

🤝 Let's build something great together!

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

  /* ============================================================
   PROFESSIONAL APPLICATION ID
============================================================ */

const now = new Date();

/* =========================
   DATE FORMAT
========================= */

const year =
  now.getFullYear();

const month = String(
  now.getMonth() + 1
).padStart(2, "0");

const day = String(
  now.getDate()
).padStart(2, "0");

/* =========================
   RANDOM NUMBER
========================= */

const randomNumber =
  Math.floor(
    1000 + Math.random() * 9000
  );

/* =========================
   APPLICATION ID
========================= */

const applicationId =
  `NVKAR-${year}${month}${day}-${randomNumber}`;

/* =========================
   DISPLAY DATE
========================= */

const today =
  `${day}/${month}/${year}`;

return `

<!DOCTYPE html>
<html>

<body style="
  margin:0;
  padding:0;
  background:#f2f2f2;
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
  margin-top:20px;
  border-radius:12px;
  overflow:hidden;
">

<!-- TOP HEADER -->

<tr>

<td style="
  background:#6f42c1;
  text-align:center;
  padding:18px;
">

<h2 style="
  color:#ffffff;
  margin:0;
  font-size:26px;
  font-weight:bold;
">



</td>

</tr>

<!-- MAIN HEADER -->

<tr>

<td style="
  background:#7d52b9;
  padding:40px;
  text-align:center;
">

<img
  src="${logo}"
  width="200"
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



</h1>

<p style="
  color:#f3e8ff;
  margin-top:12px;
  font-size:16px;
">

Welcome to India's Trusted Service Network

</p>

</td>

</tr>

<!-- BODY -->

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
  line-height:1.9;
  font-size:15px;
">

Thank you for taking the exciting step
to become part of the NVKAR family!

We're thrilled that you've applied
to join our growing network of trusted,
skilled professionals.

</p>

<p style="
  color:#555555;
  line-height:1.9;
  font-size:15px;
">

Your application has been
<strong>
received successfully
</strong>

and we're reviewing your details
with care to ensure the perfect match
with our discerning clients.

</p>

<!-- DETAILS -->

<div style="
  background:#f3ecff;
  border-left:4px solid #7d52b9;
  border-radius:8px;
  padding:20px;
  margin-top:30px;
">

<h3 style="
  margin-top:0;
  color:#7d52b9;
">

📋 Your Application Details

</h3>

<p style="
  font-size:17px;
  margin-bottom:12px;
">
<strong>
Application ID:
</strong>

${applicationId}

</p>

<p style="
  font-size:17px;
  margin-bottom:12px;
">
<strong>
Applied For:
</strong>

${service}

</p>

<p style="
  font-size:17px;
  margin-bottom:12px;
">
<strong>
Submitted On:
</strong>

${today}

</p>

<p style="
  font-size:17px;
  margin-bottom:0;
">
<strong>
Status:
</strong>

Under Review

</p>

</div>

<!-- WHY CHOOSE -->

<h2 style="
  margin-top:40px;
  color:#7d52b9;
">

Why Choose NVKAR?

</h2>

<table width="100%"
cellpadding="12"
style="
  margin-top:10px;
">

<tr>
<td style="
  border-bottom:1px solid #eeeeee;
">
✔ Transparent Payments:
Earn commission directly based
on services completed.
</td>
</tr>

<tr>
<td style="
  border-bottom:1px solid #eeeeee;
">
✔ Flexible Scheduling:
Work on your terms with flexible timing.
</td>
</tr>

<tr>
<td style="
  border-bottom:1px solid #eeeeee;
">
✔ Professional Support:
24/7 customer support whenever needed.
</td>
</tr>

<tr>
<td style="
  border-bottom:1px solid #eeeeee;
">
✔ Growth Opportunities:
Build your reputation and grow faster.
</td>
</tr>

<tr>
<td>
✔ Trust & Safety:
Verified clients and secure environment.
</td>
</tr>

</table>

<!-- WHAT HAPPENS -->

<h2 style="
  margin-top:45px;
  color:#7d52b9;
">

What Happens Next?

</h2>

<p style="
  color:#555555;
  line-height:1.9;
">

Our team will carefully review
your application against our
quality standards.

This typically takes
<strong>
3-5 business days
</strong>.

</p>

<!-- SUPPORT SECTION -->

<div style="
  background:#faf7ff;
  border:1px solid #eadcff;
  border-radius:14px;
  padding:35px;
  margin-top:35px;
  text-align:center;
">

<div style="
  margin-bottom:18px;
  font-size:22px;
  font-weight:bold;
  color:#4b2ca3;
">

📞 Need Help?

</div>

<div style="
  margin-top:18px;
">

<a
href="https://wa.me/917893024466"
target="_blank"

style="
  color:#222222;
  text-decoration:none;
  font-size:16px;
  font-weight:bold;
  margin-right:18px;
"
>

📞 +91 78930 24466

</a>

<a
href="mailto:support@nvkar.com"

style="
  color:#222222;
  text-decoration:none;
  font-size:16px;
  font-weight:bold;
"
>

📧 support@nvkar.com

</a>

</div>

<p style="
  color:#555555;
  font-size:15px;
  line-height:1.8;
  margin-top:22px;
">

Got questions about your application?

Our support team is here for you.

</p>

</div>

<!-- BUTTON -->

<div style="
  text-align:center;
  margin-top:40px;
">

<a href="${websiteLink}"

style="
  background:#7d52b9;
  color:#ffffff;
  text-decoration:none;
  padding:16px 34px;
  border-radius:8px;
  display:inline-block;
  font-weight:bold;
  font-size:16px;
">

Visit NVKAR

</a>

</div>

<!-- FOOTER -->

<div style="
  margin-top:45px;
  text-align:center;
  border-top:1px solid #eeeeee;
  padding-top:35px;
">

<p style="
  color:#555555;
  line-height:1.9;
  font-size:16px;
  max-width:600px;
  margin:0 auto;
">

We're excited about the possibility
of working with you.

At NVKAR, we believe that great service
starts with great people.

</p>

<p style="
  margin-top:35px;
  color:#333333;
  font-size:17px;
  line-height:1.8;
">

Warm regards,

<br/><br/>

<strong>
The NVKAR Team
</strong>

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