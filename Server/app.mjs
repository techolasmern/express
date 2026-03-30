import express from 'express'
import sampleRoute from './routes/sample.route.mjs';
import todoRoute from './routes/todo.route.mjs';
import passRouter from './routes/password.route.mjs';
import authRouter from './routes/auth.route.mjs';
import cors from "cors"

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/file", express.static("public"));

app.use("/sample", sampleRoute);
app.use("/todo", todoRoute);
app.use("/password", passRouter);
app.use("/auth", authRouter);

// 404
app.use((req, res) => {
    return res.status(404).send({ message: "Path not found" });
})

// Error Handler
app.use((err, req, res, next) => { // error first callback
    return res.status(err?.statusCode || 500).send({ message: err?.message || "Internal Server Error" });
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})