const customerTemplate = ({
  appName,
  customerName,
  message,
  color,
}) => {
  return `
    <div style="font-family:Arial;padding:20px;">
      <h2 style="color:${color};">
        Thank You ${customerName}
      </h2>

      <p>
        Your request has been received successfully.
      </p>

      <p>
        ${message || "Our team will contact you soon."}
      </p>

      <br/>

      <strong>
        Team ${appName}
      </strong>
    </div>
  `;
};

const adminTemplate = ({
  appName,
  customerName,
  customerEmail,
  phone,
  formType,
  extraFields,
}) => {
  return `
    <div style="font-family:Arial;padding:20px;">
      <h2>New ${formType} Submission</h2>

      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <td><strong>App</strong></td>
          <td>${appName}</td>
        </tr>

        <tr>
          <td><strong>Name</strong></td>
          <td>${customerName}</td>
        </tr>

        <tr>
          <td><strong>Email</strong></td>
          <td>${customerEmail}</td>
        </tr>

        <tr>
          <td><strong>Phone</strong></td>
          <td>${phone}</td>
        </tr>

        ${extraFields || ""}
      </table>
    </div>
  `;
};

module.exports = {
  customerTemplate,
  adminTemplate,
};