import { transporter } from "../config/nodemailer.config.mjs";
import fs from "fs";

export const sendEmail = async (to) => {
    try {
        const html = fs.readFileSync("./public/mail.html", { encoding: "utf-8" });
        const mailingOptions = {
            from: "Your email",
            to,
            subject: "Test Email",
            html
        }
        const info = await transporter.sendMail(mailingOptions);
        return info
    } catch (error) {
        return null;  
    }
}