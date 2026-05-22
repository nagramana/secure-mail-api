require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const sendMailRoute = require("./api/send-mail");

const app = express();

// =====================================
// MIDDLEWARE
// =====================================

app.use(helmet());

app.use(cors({
  origin: "*",
}));

app.use(express.json());

// =====================================
// ROUTES
// =====================================

app.use("/api", sendMailRoute);

// =====================================
// TEST ROUTE
// =====================================

app.get("/", (req, res) => {
  res.send("Mail Server Running");
});

// =====================================
// SERVER
// =====================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});