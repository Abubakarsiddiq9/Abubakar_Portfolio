const sendBtn = document.getElementById("sendBtn");
const contactForm = document.getElementById("contactForm");
const btnText = document.getElementById("btnText");
const loader = document.getElementById("loader");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    /* Clear old errors */
    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";

    name.classList.remove("inputError");
    email.classList.remove("inputError");
    message.classList.remove("inputError");

    let valid = true;

    /* Name Validation */

    if(name.value.trim() === ""){
        nameError.innerText = "Name is required";
        name.classList.add("inputError");
        valid = false;
    }

    /* Email Validation */
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim() === ""){
        emailError.innerText = "Email is required";
        email.classList.add("inputError");
        valid = false;
    }
    else if(!email.value.match(emailPattern)){
        emailError.innerText = "Enter a valid email";
        email.classList.add("inputError");
        valid = false;
    }

    /* Message Validation */

    if(message.value.trim() === ""){
        messageError.innerText = "Message is required";
        message.classList.add("inputError");
        valid = false;
    }

    /* Stop if invalid */

    if(!valid){
        return;
    }

    /* Loading Start */
    loader.style.display = "block";
    btnText.style.display = "none";
    sendBtn.disabled = true;

    try{
        const response = await fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name.value.trim(),
                email: email.value.trim(),
                message: message.value.trim()
            })
        });

        const data = await response.text();

        if(!response.ok){
            throw new Error(data);
        }

        alert(data);

        /* Clear Fields */
        name.value = "";
        email.value = "";
        message.value = "";
    }

    catch(error){
        alert(error.message || "Something went wrong");
    }

    /* Loading Stop */
    loader.style.display = "none";
    btnText.style.display = "inline";
    sendBtn.disabled = false;
});
