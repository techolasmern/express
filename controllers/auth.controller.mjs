import bcrypt from "bcrypt";

const users = [];

const userRegistration = async (request, response) => {
    try {
        const body = request.body; 
        for (const key in body) {
            if (body[key] === "") {
                return response.status(400).send({ message: "All fields are required" });
            }
        }
        // complete validation using regex
        const existUser = users.find((user) => user.email === body.email || user.username === body.username);
        if(existUser){
            if(existUser.email === body.email){
                return response.status(400).send({ message: "Email already exist" });
            }
            if(existUser.username === body.username){
                return response.status(400).send({ message: "Username already exist" });
            }
        }
        if(body?.password !== body?.confirmPassword){
            return response.status(400).send({ message: "Password does not match" });
        }
        body.password = await bcrypt.hash(body.password, 10);
        const { confirmPassword, ...user } = body;
        users.unshift(user);
        return response.status(201).send({ user });
    } catch (e) {
        return response.status(500).send({ message: e.message || "Internal server error" });
    }
}

export default { userRegistration }