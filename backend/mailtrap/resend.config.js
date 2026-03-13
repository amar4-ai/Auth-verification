
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
import * as brevo from "@getbrevo/brevo";

const client = new brevo.ApiClient();

client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

const apiInstance = new brevo.TransactionalEmailsApi(client);

export const sender = {
  email: "amarkhadkabardiya1234@gmail.com", // or your verified sender
  name: "Auth App",
};

export default apiInstance;