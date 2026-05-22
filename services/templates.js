/* ============================================================
   CUSTOMER TEMPLATE
============================================================ */

const customerTemplate = ({
  appName,
  customerName,
}) => {

  const isShippzi =
    appName.toLowerCase() === "shippzi";

  const logoUrl = isShippzi
    ? "https://backend-lac-iota-84.vercel.app/logos/shippzi.png"
    : "https://backend-lac-iota-84.vercel.app/logos/nvkar.png";

  const supportEmail = isShippzi
    ? "support@shippzi.com"
    : "support@nvkar.com";

  const helpText = isShippzi
    ? "🚴 Rider & Partner Registration"
    : "🏠 Home Service Registration";

  const footerText = isShippzi
    ? "🚴 Ready to earn? Join Shippzi today!"
    : "🏠 Book trusted home services with NVKAR!";

  return `
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8" />
<title>${appName}</title>
</head>

<body style="
margin:0;
padding:0;
background:#f3f3f3;
font-family:Arial,sans-serif;
">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:20px;">

<table width="560" cellpadding="0" cellspacing="0"
style="
background:#ffffff;
border-radius:14px;
overflow:hidden;
border:1px solid #e5e5e5;
box-shadow:0 2px 10px rgba(0,0,0,0.08);
">

<!-- HEADER -->
<tr>
<td style="
background:#111111;
padding:30px 24px;
text-align:center;
">

<img
  src="${logoUrl}"
  alt="${appName}"
  style="
    width:140px;
    object-fit:contain;
    margin-bottom:18px;
  "
/>

<h1 style="
margin:0;
color:#ffffff;
font-size:32px;
font-weight:bold;
">
${appName}
</h1>

<p style="
margin:10px 0 0;
color:#00d084;
font-size:16px;
font-weight:600;
">
${helpText}
</p>

</td>
</tr>

<!-- CONTENT -->
<tr>
<td style="padding:35px 30px;">

<p style="
margin-top:0;
font-size:18px;
font-weight:600;
color:#222;
">
Hi ${customerName},
</p>

<p style="
color:#555;
line-height:1.8;
font-size:15px;
">
Thank you for registering with ${appName}.
Our support team will contact you shortly.
</p>

<!-- WHAT NEXT -->
<div style="margin-top:30px;">

<h3 style="
margin:0 0 18px;
color:#222;
font-size:18px;
">
✅ What's Next:
</h3>

<p style="margin:14px 0;color:#444;">
➜ Verification Process
</p>

<p style="margin:14px 0;color:#444;">
➜ Team Review
</p>

<p style="margin:14px 0;color:#444;">
➜ Setup & Onboarding
</p>

<p style="margin:14px 0;color:#444;">
➜ Start using ${appName}
</p>

</div>

<!-- TIP BOX -->
<div style="
margin-top:28px;
background:#eefaf3;
border-left:4px solid #00d084;
padding:16px;
border-radius:8px;
color:#444;
font-size:14px;
">

💡 Stay connected with ${appName} updates and notifications.

</div>

<!-- HELP BOX -->
<div style="
margin-top:24px;
background:#f7f7f7;
padding:18px;
border-radius:10px;
">

<h4 style="
margin-top:0;
margin-bottom:12px;
color:#222;
">
Need Help?
</h4>

<p style="margin:7px 0;color:#666;">
📧 ${supportEmail}
</p>

<p style="margin:7px 0;color:#666;">
📞 1-800-${appName.toUpperCase()}
</p>

</div>

<!-- BUTTON -->
<div style="
margin-top:30px;
text-align:center;
">

<a href="#"
style="
background:#111111;
color:#ffffff;
text-decoration:none;
padding:14px 24px;
border-radius:8px;
font-weight:600;
display:inline-block;
">
Visit ${appName}
</a>

</div>

<!-- FOOTER -->
<div style="
margin-top:40px;
border-top:1px solid #e5e5e5;
padding-top:20px;
">

<p style="
margin:0;
color:#666;
font-size:14px;
">
Best regards,
</p>

<p style="
margin-top:8px;
font-weight:bold;
color:#111;
">
${appName} Team
</p>

</div>

</td>
</tr>

<!-- BOTTOM -->
<tr>
<td style="
border-top:1px solid #eeeeee;
background:#fafafa;
padding:18px 24px;
font-size:12px;
color:#888;
text-align:center;
">

${footerText}

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
   ADMIN TEMPLATE
============================================================ */

const adminTemplate = ({
  appName,
  customerName,
  customerEmail,
  phone,
  formType,
  extraFields,
}) => {

  const isShippzi =
    appName.toLowerCase() === "shippzi";

  const logoUrl = isShippzi
    ? "https://backend-lac-iota-84.vercel.app/logos/shippzi.png"
    : "https://backend-lac-iota-84.vercel.app/logos/nvkar.png";

  let fieldsHtml = "";

  if (extraFields) {

    Object.entries(extraFields).forEach(([key, value]) => {

      if (
        value === "" ||
        value === null ||
        value === undefined
      ) {
        return;
      }

      fieldsHtml += `
      <tr>

        <td style="
          padding:12px;
          font-weight:bold;
          border:1px solid #eeeeee;
          width:180px;
          text-transform:capitalize;
        ">
          ${key}
        </td>

        <td style="
          padding:12px;
          border:1px solid #eeeeee;
        ">
          ${value}
        </td>

      </tr>
      `;

    });

  }

  return `
<!DOCTYPE html>
<html>

<body style="
margin:0;
padding:0;
background:#f3f3f3;
font-family:Arial,sans-serif;
">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:20px;">

<table width="650" cellpadding="0" cellspacing="0"
style="
background:#ffffff;
border-radius:14px;
overflow:hidden;
border:1px solid #e5e5e5;
box-shadow:0 2px 10px rgba(0,0,0,0.08);
">

<!-- HEADER -->
<tr>
<td style="
background:#111111;
padding:30px 24px;
text-align:center;
">

<img
  src="${logoUrl}"
  alt="${appName}"
  style="
    width:140px;
    object-fit:contain;
    margin-bottom:18px;
  "
/>

<h1 style="
margin:0;
color:#ffffff;
font-size:32px;
font-weight:bold;
">
${appName}
</h1>

<p style="
margin:10px 0 0;
color:#00d084;
font-size:16px;
font-weight:600;
">
📩 New Registration
</p>

</td>
</tr>

<!-- CONTENT -->
<tr>
<td style="padding:35px 30px;">

<h2 style="
margin-top:0;
color:#222;
">
New Registration Submission
</h2>

<p style="
color:#666;
line-height:1.8;
font-size:15px;
">
A customer submitted a new registration form.
</p>

<table width="100%" cellpadding="0" cellspacing="0"
style="
margin-top:25px;
border-collapse:collapse;
">

<tr>
<td style="
padding:12px;
font-weight:bold;
border:1px solid #eeeeee;
width:180px;
">
Name
</td>

<td style="
padding:12px;
border:1px solid #eeeeee;
">
${customerName}
</td>
</tr>

<tr>
<td style="
padding:12px;
font-weight:bold;
border:1px solid #eeeeee;
">
Email
</td>

<td style="
padding:12px;
border:1px solid #eeeeee;
">
${customerEmail}
</td>
</tr>

<tr>
<td style="
padding:12px;
font-weight:bold;
border:1px solid #eeeeee;
">
Phone
</td>

<td style="
padding:12px;
border:1px solid #eeeeee;
">
${phone}
</td>
</tr>

<tr>
<td style="
padding:12px;
font-weight:bold;
border:1px solid #eeeeee;
">
Form Type
</td>

<td style="
padding:12px;
border:1px solid #eeeeee;
">
${formType}
</td>
</tr>

${fieldsHtml}

</table>

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
  customerTemplate,
  adminTemplate,
};