import { sendEmail } from "../services/nodemailer.service.mjs";
import { generateOTP } from "../services/otp.service.mjs";

const sendMailUsingNodeMailer = async (request, response) => {
    try {
        const { to } = request.body;
        const info = await sendEmail(to);
        if(!info) return response.status(400).send({ message: "Email not sent" });
        return response.status(200).send({ message: "Email sent successfully" });
    } catch (error) {
        return response.status(500).send({ message: error.message || "Internal server error" });   
    }
}

const sendOtp = async (request, response) => { 
    try {
        const { receiver_mail } = request.body;
        const otp = generateOTP(4);
        const res = await sendEmail(receiver_mail, otp);
        if(!res) return response.status(400).send({ message: "OTP not sent" });
        return response.status(200).send({ message: "OTP sent successfully", otp });
    } catch (error) {
        return response.status(500).send({ message: error.message || "Internal server error" });   
    }
}

export default { sendMailUsingNodeMailer, sendOtp }
