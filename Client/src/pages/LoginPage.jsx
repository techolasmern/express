import axios from "axios";
import { useState } from "react";

export const LoginPage = () => {

    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (event) => {
        const { name: field, value } = event.target;
        setFormData((formData) => {
            return { ...formData, [field]: value };
        });
       
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const res = await axios.post("http://localhost:8080/auth/login", formData);
            console.log(res.data.user)
        } catch (e) {
            return console.log(e.response?.data.message || e.message || "Unknown error")
        }
    }

    return <div>
        <div>
            <h1>Login Page</h1>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" defaultValue={formData.email} id="email" placeholder="john.doe@gmail.com"/>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" defaultValue={formData.password} name="password" id="password" placeholder="*********"/>
                </div>
                <button>Login</button>
            </form>
        </div>
    </div>
};