import { createAccessToken, verifyAccessToken } from "../lib/jwt.mjs";

const getToken = async (request, response) => {
    try {
        const token = createAccessToken();
        return response.status(200).send({ access_token: token });
    } catch (err) {
        return response.status(500).send({ message: err?.message || "Internal Server Error" });
    }
}

const verifyToken = async (request, response) => {
    try {
        const token = request.headers.authorization;
        if (!token) return response.status(400).send({ message: "Token is required" });
        const verified_data = verifyAccessToken(token);
        console.log(verified_data)
    } catch (err) {
        return response.status(500).send({ message: err?.message || "Internal Server Error" });
    }
}

export default { getToken, verifyToken }
