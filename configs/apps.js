module.exports = {

  shippzi: {

    name: "Shippzi",

    senderName:
      "Shippzi Support",

    senderEmail:
      process.env.SHIPPZI_EMAIL,

    smtp: {

      service: "gmail",

      auth: {

        user:
          process.env.SHIPPZI_EMAIL,

        pass:
          process.env.SHIPPZI_PASS,

      },

    },

    adminEmail:
      process.env.SHIPPZI_EMAIL,

    allowedOrigins: [

      "http://localhost:5173",

      "https://shippzi.in",

      "https://www.shippzi.in",

      "https://shippzi-website-react.vercel.app",

    ],

    color: "#ff6b00",

  },

  nvkar: {

    name: "NVKAR",

    senderName:
      "NVKAR Support",

    senderEmail:
      process.env.NVKAR_EMAIL,

    smtp: {

      service: "gmail",

      auth: {

        user:
          process.env.NVKAR_EMAIL,

        pass:
          process.env.NVKAR_PASS,

      },

    },

    adminEmail:
      process.env.NVKAR_EMAIL,

    allowedOrigins: [

      "http://localhost:5173",

      "https://nvkar.in",

      "https://www.nvkar.in",

      "https://nvkar.onrender.com",

    ],

    color: "#111827",

  },

};