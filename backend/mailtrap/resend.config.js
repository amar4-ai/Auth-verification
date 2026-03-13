
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

import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const sender = {
  name: "Auth App",
  email: "onboarding@resend.dev",
};
