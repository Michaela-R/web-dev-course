import express from "express";
import bodyParser from "body-parser";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.set("view engine", "ejs");
app.set(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});