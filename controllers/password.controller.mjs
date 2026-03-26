import bcrypt from 'bcrypt';

const hash_password = async (req, res) => {
    try {
        const { password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        return res.status(200).send({ hash });
    } catch (error) {
        return res.status(500).send({ message: error.message || "Internal server error" });   
    }
}

const compare_password = async (req, res) => {
    try {
        const { password, hash } = req.body;
        const isValidPassword = await bcrypt.compare(password, hash);
        return res.status(200).send({ matched: isValidPassword });
    } catch (error) {
        return res.status(500).send({ message: error.message || "Internal server error" });
    }
}

export default { hash_password, compare_password }

