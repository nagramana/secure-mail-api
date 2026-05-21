require("dotenv").config();

console.log(
  "MAIL SERVER STARTING..."
);

const express =
  require("express");

const cors =
  require("cors");

const helmet =
  require("helmet");

const createTransporter =
  require("../services/transporter");

const apps =
  require("../configs/apps");

const {
  customerTemplate,
  adminTemplate,
} = require("../services/templates");

const authMiddleware =
  require("../middleware/auth");

const mailLimiter =
  require("../middleware/rateLimit");

const {
  validateEmail,
} = require("../services/validators");

const app = express();

/* ============================================================
   MIDDLEWARE
============================================================ */

app.use(
  express.json({
    limit: "1mb",
  })
);

app.use(helmet());

/* ============================================================
   GLOBAL CORS
============================================================ */

app.use(

  cors({

    origin: [

      /* ============================================================
         LOCAL
      ============================================================ */

      "http://localhost:5173",

      /* ============================================================
         SHIPPZI
      ============================================================ */

      "https://shippzi.in",

      "https://www.shippzi.in",

      "https://shippzi-website-react.vercel.app",

      "https://shippzi-website-react-gfvcphsf-ramanas-projects-270e3398.vercel.app",

      "https://shippzi-website-react-9nxzo1lrk-ramanas-projects-270e3398.vercel.app",

      /* ============================================================
         NVKAR
      ============================================================ */

      "https://nvkar.in",

      "https://www.nvkar.in",

      "https://nvkar.onrender.com",

    ],

    methods: [

      "GET",

      "POST",

      "OPTIONS",

    ],

    allowedHeaders: [

      "Content-Type",

      "x-api-key",

    ],

    credentials: true,

  })

);

app.use(mailLimiter);

/* ============================================================
   TEST ROUTE
============================================================ */

app.get("/", (req, res) => {

  return res.status(200).json({

    success: true,

    message:
      "Secure Mail API Running",

  });

});

/* ============================================================
   SEND MAIL ROUTE
============================================================ */

app.post(

  "/api/send-mail",

  authMiddleware,

  async (req, res) => {

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
         VALIDATION
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
         DOMAIN SECURITY
      ============================================================ */

      const origin =
        req.headers.origin;

      console.log(
        "Request Origin:",
        origin
      );

      if (

        origin &&

        !appConfig.allowedOrigins.includes(
          origin
        )

      ) {

        return res.status(403).json({

          success: false,

          message:
            "Unauthorized domain",

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
         CREATE SMTP TRANSPORTER
      ============================================================ */

      const transporter =
        createTransporter(
          appConfig.smtp
        );

      transporter.verify(
        (error, success) => {

          if (error) {

            console.log(
              "SMTP ERROR:",
              error
            );

          }

          else {

            console.log(
              "SMTP READY"
            );

          }

        }
      );

      /* ============================================================
         CUSTOMER MAIL
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
         ADMIN MAIL
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
         SUCCESS RESPONSE
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

  }

);

/* ============================================================
   EXPORT
============================================================ */

module.exports = app;