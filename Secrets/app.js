import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import encrypt from "mongoose-encryption";
dotenv.config();

const PORT = 3000;
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

mongoose.connect(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_URL}/?retryWrites=true&w=majority`);

const userSchema = new mongoose.Schema ({
    email: String,
    password: String
});
userSchema.plugin(encrypt, {secret: process.env.DATABASE_SECRET, encryptedFields: ["password"]});

const User = new mongoose.model("User", userSchema);

app.get("/", (req, res) => {
    res.render("home");
});

app.route("/login")
    .get((req, res) => {
        res.render("login");
    })
    .post((req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        User.findOne({email: username}, (err, foundUser) => {
            if (foundUser) {
                if (foundUser.password === password)
                    res.render("secrets");
            }
        });
    });

app.route("/register")
    .get((req, res) => {
        res.render("register");
    })
    .post((req, res) => {
        const newUser = new User({
            email: req.body.username,
            password: req.body.password
        });
        newUser.save((err) => {
            if (err) {
                console.log(err);
            }
            else {
                res.render("secrets");
            }
        });
    });

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});
