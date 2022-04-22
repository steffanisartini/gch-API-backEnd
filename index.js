// npm i express   /  npm i -D nodemon  /  npm i -D kill-port

import express from "express";
import playgroundRouter from "./routes/playgroundRouter.js";

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());
app.use('/playground', playgroundRouter);
app.get('/', (req, res) => res.send('Game Characters API'));

app.listen(port,() => console.log(`Server running at http://localhost:${port}`));


