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

    

    supportEmail =
      "shippzi.support@gmail.com";

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
  width="120"
  style="
    margin-bottom:18px;
  "
/>

<h1 style="
  color:#ffffff;
  margin:0;
">
  ${companyName}
</h1>

<p style="
  color:#00d084;
  margin-top:10px;
  font-size:15px;
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
  width="120"
  style="
    margin-bottom:18px;
  "
/>

<h1 style="
  color:#ffffff;
  margin:0;
">
  ${companyName}
</h1>

<p style="
  color:#00d084;
  margin-top:10px;
  font-size:15px;
  font-weight:bold;
">
  ✅ Registration Successful
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
  Thank You ${name}
</h2>

<p style="
  color:#666;
  line-height:1.8;
">
  We received your request successfully.
</p>

<p style="
  color:#666;
  line-height:1.8;
">
  Selected Service:
  <strong>${service}</strong>
</p>

<div style="
  background:#f7f7f7;
  padding:18px;
  border-radius:10px;
  margin-top:30px;
">

<h4 style="margin-top:0;">
Need Help?
</h4>

<p style="
  margin:6px 0;
  color:#666;
">
  📧 ${supportEmail}
</p>

</div>

<div style="
  margin-top:35px;
">

<a href="${websiteLink}"

style="
  background:#111111;
  color:#ffffff;
  text-decoration:none;
  padding:14px 28px;
  border-radius:8px;
  display:inline-block;
  font-weight:bold;
">

Visit Website

</a>

</div>

<div style="
  margin-top:40px;
  border-top:1px solid #eeeeee;
  padding-top:20px;
">

<p style="
  margin:0;
  color:#777;
">
  Team ${companyName}
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