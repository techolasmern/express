import { transporter } from "../config/nodemailer.config.mjs";
import fs from "fs";
import "dotenv/config";

export const sendEmail = async (to, otp) => {
    try {
        const html = fs.readFileSync("./public/mail.html", { encoding: "utf-8" });
        const mailingOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject: "Test Email",
            text: `Your 4-digit OTP is ${otp}`
        }
        const info = await transporter.sendMail(mailingOptions);
        return info
    } catch (error) {
        return null;  
    }
}