const express = require("express")
const controller = require("./user.controller");
const {SignUpValidation, LoginValidation} = require("./validations");
const validator = require('express-joi-validation').createValidator({})
const router = express.Router();

router.post("/login", validator.body(LoginValidation), controller.login)

router.post("/signup", validator.body(SignUpValidation), controller.signUp)

export default router;