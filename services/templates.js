/* ============================================================
   CUSTOMER TEMPLATE
============================================================ */

const customerTemplate = ({
  appName,
  customerName,
}) => {

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
border-radius:12px;
overflow:hidden;
border:1px solid #e5e5e5;
box-shadow:0 2px 10px rgba(0,0,0,0.08);
">

<!-- HEADER -->
<tr>
<td style="
background:#111111;
padding:20px 24px;
">

<h1 style="
margin:0;
color:#ffffff;
font-size:30px;
font-weight:bold;
">
${appName}
</h1>

<p style="
margin:8px 0 0;
color:#00d084;
font-size:16px;
font-weight:600;
">
🚴 Rider Application
</p>

</td>
</tr>

<!-- CONTENT -->
<tr>
<td style="padding:32px 28px;">

<p style="
margin-top:0;
font-size:17px;
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
Thank you for applying! Your application is confirmed.
We'll contact you within 24-48 hours with next steps.
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
➜ Profile verification
</p>

<p style="margin:14px 0;color:#444;">
➜ App setup & installation
</p>

<p style="margin:14px 0;color:#444;">
➜ Training session
</p>

<p style="margin:14px 0;color:#444;">
➜ Start earning!
</p>

</div>

<!-- TIP BOX -->
<div style="
margin-top:28px;
background:#eefaf3;
border-left:4px solid #00d084;
padding:14px;
border-radius:8px;
color:#444;
font-size:14px;
">

💡 Quick Tip:
Download the ${appName} app now and familiarize yourself with the interface!

</div>

<!-- HELP BOX -->
<div style="
margin-top:22px;
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
📧 support@${appName.toLowerCase()}.com
</p>

<p style="margin:7px 0;color:#666;">
📞 1-800-${appName.toUpperCase()}
</p>

</div>

<!-- BUTTON -->
<div style="margin-top:28px;">

<a href="#"
style="
background:#ffffff;
border:1px solid #cccccc;
color:#111111;
text-decoration:none;
padding:12px 22px;
border-radius:8px;
font-weight:600;
display:inline-block;
">
Download App
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
${appName} Rider Team
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
">

🚴 Ready to earn? Download ${appName} today!

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

  let fieldsHtml = "";

  if (extraFields) {

    Object.entries(extraFields).forEach(([key, value]) => {

      fieldsHtml += `
      <tr>
        <td style="
          padding:12px;
          font-weight:bold;
          border:1px solid #eeeeee;
          width:180px;
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
border-radius:12px;
overflow:hidden;
border:1px solid #e5e5e5;
box-shadow:0 2px 10px rgba(0,0,0,0.08);
">

<!-- HEADER -->
<tr>
<td style="
background:#111111;
padding:20px 24px;
">

<h1 style="
margin:0;
color:#ffffff;
font-size:30px;
font-weight:bold;
">
${appName}
</h1>

<p style="
margin:8px 0 0;
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
<td style="padding:32px 28px;">

<h2 style="
margin-top:0;
color:#222;
">
New Partner Registration Submission
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