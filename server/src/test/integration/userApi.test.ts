import request from "supertest";

import app from "../../app";
import { expect } from "chai";

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