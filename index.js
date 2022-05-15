const express = require("express");
const moviesRouter = require("./routers/moviesRouter");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/movies', moviesRouter);

const port = 8080;
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
