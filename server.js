require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const sendMailRoute = require("./api/send-mail");

const app = express();

// =====================================
// SECURITY MIDDLEWARE
// =====================================

// Hide Express Info
app.disable("x-powered-by");

// Helmet Security
app.use(helmet());

// Rate Limit Protection
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 Minutes
  max: 100, // Max Requests Per IP
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

app.use(limiter);

// =====================================
// CORS
// =====================================

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://yourdomain.com",
  "https://www.yourdomain.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow Postman / Mobile Apps / No Origin
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS Not Allowed"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// =====================================
// BODY PARSER
// =====================================

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// =====================================
// ROUTES
// =====================================

app.use("/api", sendMailRoute);

// =====================================
// TEST ROUTE
// =====================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Mail Server Running Successfully",
  });
});

// =====================================
// 404 ROUTE
// =====================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// =====================================
// GLOBAL ERROR HANDLER
// =====================================

app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err.message);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// =====================================
// SERVER
// =====================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server Running On Port ${PORT}`);
});