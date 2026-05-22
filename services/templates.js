const getCompanyDetails = (website) => {

  let companyName = "Website";
  let supportEmail = "support@example.com";
  let websiteLink = "https://example.com";

  if (website === "shippzi") {
    companyName = "Shippzi";
    supportEmail = "support@shippzi.com";
    websiteLink = "https://shippzi.com";
  }

  if (website === "nvkar") {
    companyName = "NVKAR";
    supportEmail = "support@nvkar.com";
    websiteLink = "https://nvkar.com";
  }

  return {
    companyName,
    supportEmail,
    websiteLink,
  };
};

// ============================================
// ADMIN TEMPLATE
// ============================================

const adminTemplate = ({
  name,
  phone,
  email,
  service,
  website,
}) => {

  const {
    companyName,
  } = getCompanyDetails(website);

  const selectedService =
    typeof service === "object"
      ? JSON.stringify(service)
      : service;

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
  padding:28px 35px;
">

<h1 style="
  margin:0;
  color:#ffffff;
  font-size:30px;
">
  ${companyName}
</h1>

<p style="
  margin:10px 0 0;
  color:#00d084;
  font-size:15px;
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

<!-- INFO CARD -->
<table width="100%" cellpadding="14" cellspacing="0"
style="
  margin-top:25px;
  border:1px solid #eeeeee;
  border-radius:10px;
">

<tr>
<td style="font-weight:bold;width:180px;">Name</td>
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
<td style="font-weight:bold;">Selected Service</td>
<td>${selectedService}</td>
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

// ============================================
// CUSTOMER TEMPLATE
// ============================================

const customerTemplate = ({
  name,
  service,
  website,
}) => {

  const {
    companyName,
    supportEmail,
    websiteLink,
  } = getCompanyDetails(website);

  const selectedService =
    typeof service === "object"
      ? JSON.stringify(service)
      : service;

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
  padding:28px 35px;
">

<h1 style="
  margin:0;
  color:#ffffff;
  font-size:30px;
">
  ${companyName}
</h1>

<p style="
  margin:10px 0 0;
  color:#00d084;
  font-size:15px;
  font-weight:600;
">
  ✅ Registration Confirmation
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
  Thank You ${name}
</h2>

<p style="
  color:#666;
  line-height:1.8;
">
  Your request has been received successfully.
</p>

<p style="
  color:#666;
  line-height:1.8;
">
  Selected Service:
  <strong>${selectedService}</strong>
</p>

<!-- NEXT STEPS -->
<div style="
  margin-top:30px;
">

<h3 style="
  color:#222;
">
  ✅ What Happens Next?
</h3>

<p style="color:#555;">➜ Our support team will review your request</p>

<p style="color:#555;">➜ We will contact you shortly</p>

<p style="color:#555;">➜ Verification & onboarding process</p>

</div>

<!-- HELP BOX -->
<div style="
  background:#f7f7f7;
  padding:18px;
  border-radius:10px;
  margin-top:30px;
">

<h4 style="margin-top:0;">
  Need Help?
</h4>

<p style="margin:6px 0;color:#666;">
  📧 ${supportEmail}
</p>

</div>

<!-- BUTTON -->
<div style="margin-top:30px;">

<a href="${websiteLink}"
style="
  background:#111111;
  color:#ffffff;
  text-decoration:none;
  padding:14px 26px;
  border-radius:8px;
  display:inline-block;
  font-weight:600;
">
Visit Website
</a>

</div>

<!-- FOOTER -->
<div style="
  margin-top:40px;
  border-top:1px solid #eeeeee;
  padding-top:20px;
">

<p style="
  margin:0;
  color:#777;
">
  Best Regards,
</p>

<p style="
  margin-top:8px;
  font-weight:bold;
  color:#111;
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