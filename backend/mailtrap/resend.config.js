
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
import * as Brevo from "@getbrevo/brevo";

const apiInstance = new Brevo.TransactionalEmailsApi();
apiInstance.authentications["apiKey"].apiKey = process.env.BREVO_API_KEY;

export default apiInstance;

export const sender = {
  name: "Auth App",
  email: "amarkhadkabardiya1234@gmail.com", // your verified Brevo sender email
};
