import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "Your email",
        pass: "app password" // normal password won't work
    }
});