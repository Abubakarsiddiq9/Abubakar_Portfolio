const request = require("supertest");

const app = require("../server");

describe("Contact API Integration Test", () => {

    test("Should return success for valid data", async () => {

        const response = await request(app)

        .post("/contact")

        .send({

            name: "Abubakar",

            email: "test@gmail.com",

            message: "Hello"

        });

        expect(response.statusCode).toBe(200);

    });

    test("Should reject invalid email", async () => {

        const response = await request(app)

        .post("/contact")

        .send({

            name: "Abubakar",

            email: "invalidemail",

            message: "Hello"

        });

        expect(response.statusCode).toBe(400);

        expect(response.text).toBe("Invalid Email");

    });

    test("Should reject empty fields", async () => {

        const response = await request(app)

        .post("/contact")

        .send({

            name: "",

            email: "",

            message: ""

        });

        expect(response.statusCode).toBe(400);

    });

});