const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {

    try {

        const { name, email, message } = req.body;
        const emailUser = process.env.EMAIL_USER?.trim();
        const emailPass = process.env.EMAIL_PASS?.trim();

        if (!name || !email || !message) {
            return res.status(400).send("Please fill in all fields");
        }

        const transporter = nodemailer.createTransport({

            service: "gmail",

            auth: {
                user: emailUser,
                pass: emailPass
            }

        });

        await transporter.sendMail({

            from: emailUser,

            to: emailUser,

            replyTo: email,

            subject: `Portfolio Message from ${name}`,

            text: `
Name: ${name}

Email: ${email}

Message:
${message}
            `
        });

        res.send("Message Sent Successfully!");

    }

    catch (error) {

        console.log(error);

        res.status(500).send("Failed to Send Message");

    }

});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});
