import express from "express";
import { logger } from "./middlewares/logger.mjs";
import userRouter from "./routes/user.route.mjs";
import todoRouter from "./routes/todo.route.mjs";

const app = express();

// Middleware - a function that has access to req, res, and next
// const handleReq = (req, res, next) => {
//     console.log("Hello");
//     next();
// }

// app.use(handleReq);

app.use(express.json()); // middleware to parse JSON body ( built-in middleware )
app.use(express.urlencoded({ extended: true })); // middleware to parse URL-encoded body ( built-in middleware )

app.use(logger);
app.use("/users", userRouter);
app.use("/todos", todoRouter);

app.get("/", (request, response) => {
    return response.status(200).send({
        message: "Hello World"
    })
})

app.listen(8080, () => {
    console.log(`✅ Server: http://localhost:8080`)
})