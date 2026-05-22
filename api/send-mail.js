require("dotenv").config();

const createTransporter =
  require("../services/transporter");

const apps =
  require("../configs/apps");

const {
  customerTemplate,
  adminTemplate,
} = require("../services/templates");

const {
  validateEmail,
} = require("../services/validators");

/* ============================================================
   ALLOWED ORIGINS
============================================================ */

const allowedOrigins = [

  "http://localhost:5173",

  /* ============================================================
     NVKAR
  ============================================================ */

  "https://nvkar.onrender.com",

  "https://nvkar.in",

  "https://www.nvkar.in",

  /* ============================================================
     SHIPPZI
  ============================================================ */

  "https://shippzi.in",

  "https://www.shippzi.in",

  "https://shippzi-website-react.vercel.app",

];

/* ============================================================
   MAIN API
============================================================ */

module.exports = async (req, res) => {

  /* ============================================================
     CORS HEADERS
  ============================================================ */

  const origin =
    req.headers.origin;

  if (
    allowedOrigins.includes(origin)
  ) {

    res.setHeader(
      "Access-Control-Allow-Origin",
      origin
    );

  }

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, x-api-key"
  );

  /* ============================================================
     OPTIONS REQUEST
  ============================================================ */

  if (req.method === "OPTIONS") {

    return res.status(200).end();

  }

  /* ============================================================
     ONLY POST ALLOWED
  ============================================================ */

  if (req.method !== "POST") {

    return res.status(405).json({

      success: false,

      message:
        "Method Not Allowed",

    });

  }

  /* ============================================================
     API KEY VALIDATION
  ============================================================ */

  const apiKey =
    req.headers["x-api-key"];

  if (!apiKey) {

    return res.status(401).json({

      success: false,

      message:
        "API key missing",

    });

  }

  if (
    apiKey !==
    process.env.API_SECRET_KEY
  ) {

    return res.status(403).json({

      success: false,

      message:
        "Invalid API key",

    });

  }

  try {

    console.log(
      "Incoming Request..."
    );

    const {

      app: appKey,

      type,

      customerName,

      customerEmail,

      phone,

      subject,

      customerMessage,

      extraFields,

    } = req.body;

    /* ============================================================
       APP VALIDATION
    ============================================================ */

    if (!appKey) {

      return res.status(400).json({

        success: false,

        message:
          "App key required",

      });

    }

    const appConfig =
      apps[appKey];

    if (!appConfig) {

      return res.status(400).json({

        success: false,

        message:
          "Invalid app",

      });

    }

    /* ============================================================
       EMAIL VALIDATION
    ============================================================ */

    if (
      !validateEmail(
        customerEmail
      )
    ) {

      return res.status(400).json({

        success: false,

        message:
          "Invalid email",

      });

    }

    /* ============================================================
       SMTP TRANSPORTER
    ============================================================ */

    const transporter =
      createTransporter(
        appConfig.smtp
      );

    console.log(
      "SMTP READY"
    );

    /* ============================================================
       CUSTOMER EMAIL
    ============================================================ */

    console.log(
      "Sending Customer Mail..."
    );

    await transporter.sendMail({

      from:
        `${appConfig.senderName} <${appConfig.senderEmail}>`,

      to:
        customerEmail,

      subject:
        subject ||
        `Thank You From ${appConfig.name}`,

      html:
        customerTemplate({

          appName:
            appConfig.name,

          customerName,

          message:
            customerMessage,

          color:
            appConfig.color,

        }),

    });

    console.log(
      "Customer Mail Sent"
    );

    /* ============================================================
       ADMIN EMAIL
    ============================================================ */

    console.log(
      "Sending Admin Mail..."
    );

    await transporter.sendMail({

      from:
        `${appConfig.senderName} <${appConfig.senderEmail}>`,

      to:
        appConfig.adminEmail,

      subject:
        `[${appConfig.name}] New ${type} Submission`,

      html:
        adminTemplate({

          appName:
            appConfig.name,

          customerName,

          customerEmail,

          phone,

          formType:
            type,

          extraFields,

        }),

    });

    console.log(
      "Admin Mail Sent"
    );

    /* ============================================================
       SUCCESS
    ============================================================ */

    return res.status(200).json({

      success: true,

      message:
        "Emails sent successfully",

    });

  }

  catch (error) {

    console.log(
      "MAIL ERROR:",
      error
    );

    return res.status(500).json({

      success: false,

      message:
        error.message ||
        "Internal Server Error",

    });

  }

};