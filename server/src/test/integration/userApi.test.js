const request = require("supertest");

const app = require("../../app");
const { expect } = require("chai");

describe("User API", function () {
    describe("signup", function () {
        it("Should create a new user", function () {
            request(app)
                .post("/api/user/signup")
                .set('Accept', 'application/json')
                .send({
                    firstName: "testFirst",
                    lastName: "testLast",
                    nickname: "testNick",
                    email: "test@email.com"
                })
                .end(function (err, res) {
                    if (err) throw err;
                    expect(res.status).to.be(200);
                })
        })

        it("Should throw if missing required data", function () {
            request(app)
                .post("/api/user/signup")
                .expect(400)
        })
    })

})