import express from 'express'
import sampleRoute from './routes/sample.route.mjs';
import todoRoute from './routes/todo.route.mjs';

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/file", express.static("public"));

app.use("/sample", sampleRoute);
app.use("/todo", todoRoute);

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})