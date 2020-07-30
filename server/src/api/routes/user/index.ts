import * as express from "express";

import {login, signUp} from "./user.controller";
import * as validation from "express-joi-validation";
import {LoginValidation, SignUpValidation} from "./validations";

const validator = validation.createValidator({})
const router = express.Router();

router.post("/login", validator.body(LoginValidation), login)

router.post("/signup", validator.body(SignUpValidation), signUp)

export default router;