import express from 'express'
import sampleRoute from './routes/sample.route.mjs';

const app = express()

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/file", express.static("public"));

app.use("/sample", sampleRoute);

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})