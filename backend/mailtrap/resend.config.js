
// import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// dotenv.config();

// export const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// export const sender = {
//   email: process.env.EMAIL_USER,
//   name: "Auth App",
// };
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const brevo = require("@getbrevo/brevo");

const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

export default apiInstance;

export const sender = {
  name: "Auth App",
  email: "amarkhadkabardiya1234@gmail.com",
};