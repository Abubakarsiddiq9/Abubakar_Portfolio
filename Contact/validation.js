function validateEmail(email){

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    return emailPattern.test(email);

}

module.exports = validateEmail;