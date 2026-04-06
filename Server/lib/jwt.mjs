import "dotenv/config";
import jwt from "jsonwebtoken";

export const createAccessToken = () => {
    const token = jwt.sign({ text: "hello world" }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h"
    });
    return token;
}

export const verifyAccessToken = (token) => {
    try {
        const verified_data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        return verified_data;
    } catch (err) {
        return false;
    }
}
