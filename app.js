const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const csrf = require("csurf");
const cookieParser = require("cookie-parser");
const routes = require("./routes/index.js");
const port = process.env.PORT ? process.env.PORT : 3000;
const csrfMiddleware = csrf({ cookie: true });
app.use(bodyParser.json());
app.use(cookieParser());
app.use(csrfMiddleware);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.listen(port, console.log("listening"));