
// import {
// 	PASSWORD_RESET_REQUEST_TEMPLATE,
// 	PASSWORD_RESET_SUCCESS_TEMPLATE,
// 	VERIFICATION_EMAIL_TEMPLATE,
// } from "./emailTemplates.js";
// import { transporter, sender } from "./resend.config.js";

// export const sendVerificationEmail = async (email, verificationToken) => {
// 	try {
// 		const response = await transporter.sendMail({
// 			from: `"${sender.name}" <${sender.email}>`,
// 			to: email,
// 			subject: "Verify your email",
// 			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
// 		});
// 		console.log("Email sent successfully", response.messageId);
// 	} catch (error) {
// 		console.error(`Error sending verification email`, error);
// 		throw new Error(`Error sending verification email: ${error}`);
// 	}
// };

// export const sendWelcomeEmail = async (email, name) => {
// 	try {
// 		const response = await transporter.sendMail({
// 			from: `"${sender.name}" <${sender.email}>`,
// 			to: email,
// 			subject: "Welcome to Auth App! 🎉",
// 			html: `
//         <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
//           <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
//             <h1 style="color: white; margin: 0;">Welcome to Auth App! 🎉</h1>
//           </div>
//           <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
//             <p>Hello ${name},</p>
//             <p>Your email has been verified successfully. You're all set to get started!</p>
//             <div style="text-align: center; margin: 30px 0;">
//               <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">✓</div>
//             </div>
//             <p>Best regards,<br>Your App Team</p>
//           </div>
//           <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
//             <p>This is an automated message, please do not reply to this email.</p>
//           </div>
//         </div>`,
// 		});
// 		console.log("Welcome email sent successfully", response.messageId);
// 	} catch (error) {
// 		console.error(`Error sending welcome email`, error);
// 		throw new Error(`Error sending welcome email: ${error}`);
// 	}
// };

// export const sendPasswordResetEmail = async (email, resetURL) => {
// 	try {
// 		const response = await transporter.sendMail({
// 			from: `"${sender.name}" <${sender.email}>`,
// 			to: email,
// 			subject: "Reset your password",
// 			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
// 		});
// 		console.log("Password reset email sent successfully", response.messageId);
// 	} catch (error) {
// 		console.error(`Error sending password reset email`, error);
// 		throw new Error(`Error sending password reset email: ${error}`);
// 	}
// };

// export const sendResetSuccessEmail = async (email) => {
// 	try {
// 		const response = await transporter.sendMail({
// 			from: `"${sender.name}" <${sender.email}>`,
// 			to: email,
// 			subject: "Password Reset Successful",
// 			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
// 		});
// 		console.log("Password reset success email sent successfully", response.messageId);
// 	} catch (error) {
// 		console.error(`Error sending password reset success email`, error);
// 		throw new Error(`Error sending password reset success email: ${error}`);
// 	}
// };
import * as brevo from "@getbrevo/brevo";

import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";

import apiInstance, { sender } from "./resend.config.js";

const sendEmail = async (to, subject, html) => {
  const sendSmtpEmail = new brevo.SendSmtpEmail();

  sendSmtpEmail.sender = sender;
  sendSmtpEmail.to = [{ email: to }];
  sendSmtpEmail.subject = subject;
  sendSmtpEmail.htmlContent = html;

  return await apiInstance.sendTransacEmail(sendSmtpEmail);
};

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const response = await sendEmail(
      email,
      "Verify your email",
      VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken)
    );

    console.log("Verification email sent successfully", response);
  } catch (error) {
    console.error("Error sending verification email", error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  try {
    const response = await sendEmail(
      email,
      "Welcome to Auth App! 🎉",
      `<p>Hello ${name}, your email has been verified successfully!</p>`
    );

    console.log("Welcome email sent successfully", response);
  } catch (error) {
    console.error("Error sending welcome email", error);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    const response = await sendEmail(
      email,
      "Reset your password",
      PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL)
    );

    console.log("Password reset email sent successfully", response);
  } catch (error) {
    console.error("Error sending password reset email", error);
    throw new Error(`Error sending password reset email: ${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  try {
    const response = await sendEmail(
      email,
      "Password Reset Successful",
      PASSWORD_RESET_SUCCESS_TEMPLATE
    );

    console.log("Password reset success email sent successfully", response);
  } catch (error) {
    console.error("Error sending password reset success email", error);
    throw new Error(`Error sending password reset success email: ${error}`);
  }
};