const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Portfolio contact API is running");
});

app.get("/health", (req, res) => {
    res.json({ ok: true });
});

app.post("/contact", async (req, res) => {

    try {

        const { name, email, message } = req.body;
        const emailUser = process.env.EMAIL_USER?.trim();
        const emailPass = process.env.EMAIL_PASS?.trim();

        if (!emailUser || !emailPass) {
            console.error("Missing EMAIL_USER or EMAIL_PASS environment variable");
            return res.status(500).send("Email service is not configured");
        }

        if (!name || !email || !message) {
            return res.status(400).send("Please fill in all fields");
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!email.match(emailPattern)){

            return res.status(400).send("Invalid Email");

        }


        console.log("EMAIL_USER:", process.env.EMAIL_USER);
        console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

        const transporter = nodemailer.createTransport({

            service: "gmail",

            auth: {

                user: process.env.EMAIL_USER,

                pass: process.env.EMAIL_PASS

            },
            connectionTimeout: 10000

        });
        console.log("Attempting to send email...");

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
        console.log("Email sent successfully");

        res.send("Message Sent Successfully!");

    }

    catch (error) {

        console.error("Contact form email failed:", error);

        res.status(500).send("Failed to Send Message");

    }

});

if(process.env.NODE_ENV !== "test"){

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server Running on Port ${PORT}`);
    });

}

module.exports = app;
