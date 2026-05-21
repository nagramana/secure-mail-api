require("dotenv").config();

console.log("MAIL SERVER STARTING...");

const express = require("express");

const cors = require("cors");

const helmet = require("helmet");

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
   JSON
============================================================ */

app.use(
  express.json({
    limit: "1mb",
  })
);

/* ============================================================
   SECURITY
============================================================ */

app.use(helmet());

/* ============================================================
   CORS FIX
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

app.use(

  cors({

    origin: function (
      origin,
      callback
    ) {

      /* ============================================================
         ALLOW POSTMAN / SERVER REQUESTS
      ============================================================ */

      if (!origin) {

        return callback(
          null,
          true
        );

      }

      /* ============================================================
         CHECK ORIGIN
      ============================================================ */

      if (
        allowedOrigins.includes(
          origin
        )
      ) {

        callback(
          null,
          true
        );

      }

      else {

        callback(
          new Error(
            "CORS BLOCKED"
          )
        );

      }

    },

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

/* ============================================================
   OPTIONS FIX
============================================================ */

app.options("*", cors());

/* ============================================================
   RATE LIMIT
============================================================ */

app.use(mailLimiter);

/* ============================================================
   ROOT ROUTE
============================================================ */

app.get("/", (req, res) => {

  return res.status(200).json({

    success: true,

    message:
      "Secure Mail API Running",

  });

});

/* ============================================================
   SEND MAIL API
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

      transporter.verify(
        (
          error,
          success
        ) => {

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

  }

);

/* ============================================================
   EXPORT
============================================================ */

module.exports = app;