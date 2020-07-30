import request from "supertest"

import app from "../../app";
import { expect } from "chai";

describe("Contacts API", function () {
    describe("GET", function () {
        it("Should return all contact", function () {
            request(app)
                .get("/api/contact")
                .set('Accept', 'application/json')
                .end(function (err, res) {
                    if (err) throw err;
                    expect(res.status).to.eq(200);
                })
        })

        it("Should throw if missing required data", function () {
            request(app)
                .post("/api/user/signup")
                .expect(400)
        })
    })

})