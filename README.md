# My Portfolio Website
A responsive full-stack portfolio website,with a working contact form.

## Tech Stack
- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Nodemailer
- Jest
- SuperTest

Node.js was used to create the backend server for handling contact form requests.
Express.js was used as the backend framework for creating API routes and handling HTTP requests.
The /contact route was created to receive and check user data and send responses.
Nodemailer(a Node.js library) used for sending emails to me.
Jest was used for unit testing email validation logic.
SuperTest was used to test the backend API routes and verify correct server responses.

.env and node_modules is protected from pushing into github using .gitignore file
Gmail App Passwords were used instead of my main Gmail password

## Plan & Design
Plan is available in PLAN.md file 
Used Figma link is provided in DESIGN.md file

# Pages
- About page
It contains my name and some description about me and the tech stack i know/use

- Projects page
It contains my previous works.
This page has two sections Featured projects and projects
Featured projects is for displaying my big projects
Projects is for displaying some of my small projects

- Journey page
It contains my journey cards showing the year gap and where i was then.

- Contact page
Contact form's backend is made using Node.js and Nodemailer.
when a user fills the form and click on submit button, i get an email from the email provided by the user in the form, email contains Name,email and message of the users which is written in the websites message box. 

