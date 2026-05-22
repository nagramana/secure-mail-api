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
          padding:14px;
          font-weight:bold;
          border:1px solid #eeeeee;
          width:180px;
          text-transform:capitalize;
          background:#fafafa;
        ">
          ${key}
        </td>

        <td style="
          padding:14px;
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
background:#000000;
padding:40px 24px;
text-align:center;
">

<!-- CENTER LOGO -->
<img
  src="${logoUrl}"
  alt="${appName}"
  style="
    width:160px;
    max-width:160px;
    object-fit:contain;
    display:block;
    margin:0 auto 20px auto;
  "
/>

<h1 style="
margin:0;
color:#ffffff;
font-size:38px;
font-weight:bold;
letter-spacing:1px;
">
${appName}
</h1>

<p style="
margin:12px 0 0;
color:#00d084;
font-size:18px;
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
font-size:24px;
">
New Registration Submission
</h2>

<p style="
color:#666;
line-height:1.8;
font-size:15px;
margin-bottom:25px;
">
A customer submitted a new registration form.
</p>

<table width="100%" cellpadding="0" cellspacing="0"
style="
margin-top:20px;
border-collapse:collapse;
">

<tr>
<td style="
padding:14px;
font-weight:bold;
border:1px solid #eeeeee;
width:180px;
background:#fafafa;
">
Name
</td>

<td style="
padding:14px;
border:1px solid #eeeeee;
">
${customerName}
</td>
</tr>

<tr>
<td style="
padding:14px;
font-weight:bold;
border:1px solid #eeeeee;
background:#fafafa;
">
Email
</td>

<td style="
padding:14px;
border:1px solid #eeeeee;
">
<a href="mailto:${customerEmail}"
style="
color:#111;
text-decoration:none;
">
${customerEmail}
</a>
</td>
</tr>

<tr>
<td style="
padding:14px;
font-weight:bold;
border:1px solid #eeeeee;
background:#fafafa;
">
Phone
</td>

<td style="
padding:14px;
border:1px solid #eeeeee;
">
${phone}
</td>
</tr>

<tr>
<td style="
padding:14px;
font-weight:bold;
border:1px solid #eeeeee;
background:#fafafa;
">
Form Type
</td>

<td style="
padding:14px;
border:1px solid #eeeeee;
">
${formType}
</td>
</tr>

${fieldsHtml}

</table>

<!-- FOOTER -->
<div style="
margin-top:35px;
padding-top:20px;
border-top:1px solid #eeeeee;
text-align:center;
">

<p style="
margin:0;
font-size:13px;
color:#888;
">
© ${new Date().getFullYear()} ${appName}
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