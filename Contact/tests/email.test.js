const validateEmail = require("../validation");

test("Valid email should return true", () => {

    expect(validateEmail("hello@gmail.com")).toBe(true);

});

test("Invalid email should return false", () => {

    expect(validateEmail("hello@gmail")).toBe(false);

});

test("Empty email should return false", () => {

    expect(validateEmail("")).toBe(false);

});

test("Email without @ should return false", () => {

    expect(validateEmail("hellogmail.com")).toBe(false);

});