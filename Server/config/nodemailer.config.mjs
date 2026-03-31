import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "Your email",
        pass: "Your app password" // normal password won't work
    }
});