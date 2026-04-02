import { sendOtpToMail } from "../services/nodemailer.service.mjs";

const send = async (request, response) => {
    try {
        const { mail } = request.body;
        if(!mail) return response.status(400).send({ message: "Receiver mail is required" });
        const res = await sendOtpToMail(mail);
        if (!res) return response.status(400).send({ message: "OTP sending failed." });
        request.session[mail] = {otp: res.otp, cooldown: Date.now() + 1000 * 20 };
        return response.status(200).send({ message: "OTP sent successfully." });
    } catch (err) {
        return response.status(500).send({ message: err?.message || "Internal Server Error" });
    }
}

const verify = async (request, response) => {
    try {
        const { mail, otp } = request.body;
        if (!mail || !otp) return response.status(400).send({ message: "Mail and OTP are required" });
        const session = request.session;
        if(session?.[mail]?.otp !== otp) return response.status(404).send({ message: "Expired OTP" });
        const sent_otp = session[mail].otp;
        if(sent_otp != otp) return response.status(400).send({ message: "Invalid OTP" });
        delete session[mail];
        return response.status(200).send({ message: "OTP verified successfully" });
    } catch (err) {
        return response.status(500).send({ message: err?.message || "Internal Server Error" });
    }
}

const resend = async (request, response) => {
    try {
        const { mail } = request.body;
        if (!mail) return response.status(400).send({ message: "Receiver mail is required" });
        const session = request.session;
        if(!session?.[mail]) return response.status(404).send({ message: "You haven't sent OTP to this mail." });
        const current_time = Date.now();
        const cooldown = session[mail]?.cooldown;
        if (current_time < cooldown) return response.status(400).send({ message: `Please wait ${Math.floor((cooldown - current_time) / 1000)} seconds before sending another OTP.`})
        await send(request, response);
    } catch (err) {
        return response.status(500).send({ message: err?.message || "Internal Server Error" });
    }
}

export default { send, verify, resend }