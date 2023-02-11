export default {
  jwtSecret: process.env.JWT_SECRET || "somesecrettoken",
  DB: {
    URI: process.env.URI || `mongodb://localhost/climatelobby`,
    USER: process.env.USER || "",
    PASSWORD: process.env.PASSWORD || "",
  },
};
