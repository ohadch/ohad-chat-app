const request = require("supertest");

const app = require("../../app");
const { expect } = require("chai");

describe("Contacts API", function () {
    describe("GET", function () {
        it("Should return all contact", function () {
            request(app)
                .get("/api/contact")
                .set('Accept', 'application/json')
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