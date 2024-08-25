require("dotenv").config();


const express = require("express");
const app = express();
const port = process.env.PORT || 8001;

const moviesRoutes = require("./Routes/movies/MoviesRoutes");
const db = require("./db/index");

app.use(express.json());

app.use("/movies", moviesRoutes);
db();
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});