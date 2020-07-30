import * as express from "express"
import {getContacts} from "./contacts.controller";

const router = express.Router();

router.get("/", getContacts)


export default router;