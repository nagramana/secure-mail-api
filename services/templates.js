// ============================================
// ADMIN TEMPLATE
// ============================================

const adminTemplate = ({
  customerName,
  phone,
  customerEmail,
  extraFields,
  appName,
}) => {

  const companyName =
    appName || "Website";

  const category =
    extraFields?.Category || "N/A";

  const city =
    extraFields?.City || "N/A";

  const pincode =
    extraFields?.Pincode || "N/A";

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

<table width="650" cellpadding="0" cellspacing="0"
style="
  background:#ffffff;
  margin-top:40px;
  border-radius:14px;
  overflow:hidden;
  box-shadow:0 2px 12px rgba(0,0,0,0.08);
">

<!-- HEADER -->
<tr>
<td style="
  background:#111111;
  padding:35px;
  text-align:center;
">

<h1 style="
  margin:0;
  color:#ffffff;
  font-size:34px;
">
  ${companyName}
</h1>

<p style="
  margin:12px 0 0;
  color:#00d084;
  font-size:16px;
  font-weight:600;
">
  🚀 New Partner Registration
</p>

</td>
</tr>

<!-- BODY -->
<tr>
<td style="padding:40px;">

<h2 style="
  margin-top:0;
  color:#222;
">
  New Registration Submission
</h2>

<p style="
  color:#666;
  line-height:1.7;
">
  A new customer submitted the registration form.
</p>

<!-- INFO TABLE -->
<table width="100%" cellpadding="14" cellspacing="0"
style="
  margin-top:25px;
  border-collapse:collapse;
">

<tr>
<td style="
font-weight:bold;
width:180px;
border:1px solid #eeeeee;
background:#fafafa;
">
Name
</td>

<td style="
border:1px solid #eeeeee;
">
${customerName || "N/A"}
</td>
</tr>

<tr>
<td style="
font-weight:bold;
border:1px solid #eeeeee;
background:#fafafa;
">
Phone
</td>

<td style="
border:1px solid #eeeeee;
">
${phone || "N/A"}
</td>
</tr>

<tr>
<td style="
font-weight:bold;
border:1px solid #eeeeee;
background:#fafafa;
">
Email
</td>

<td style="
border:1px solid #eeeeee;
">
${customerEmail || "N/A"}
</td>
</tr>

<tr>
<td style="
font-weight:bold;
border:1px solid #eeeeee;
background:#fafafa;
">
Category
</td>

<td style="
border:1px solid #eeeeee;
">
${category}
</td>
</tr>

<tr>
<td style="
font-weight:bold;
border:1px solid #eeeeee;
background:#fafafa;
">
City
</td>

<td style="
border:1px solid #eeeeee;
">
${city}
</td>
</tr>

<tr>
<td style="
font-weight:bold;
border:1px solid #eeeeee;
background:#fafafa;
">
Pincode
</td>

<td style="
border:1px solid #eeeeee;
">
${pincode}
</td>
</tr>

</table>

<div style="
  margin-top:35px;
  border-top:1px solid #eeeeee;
  padding-top:20px;
">

<p style="margin:0;color:#777;">
  ${companyName} Automated Mail System
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