import { transporter } from "../config/nodemailer.config.mjs";

export const sendEmail = async () => {
    try {
        const mailingOptions = {
            from: "Your email",
            to: "to email address",
            subject: "Test Email",
            html: "<h1>Test Email</h1>"
        }
        const info = await transporter.sendMail(mailingOptions);
        return info
    } catch (error) {
        return null;  
    }
}