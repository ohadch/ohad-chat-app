import User from "../../../models/User.model";
import {Request, Response} from "express";

export async function getContacts(req, res) : Promise<Response> {
    try {
        const users = await User.find({}).exec();
        const contacts = users.filter(user => user._id != req.user!._id);
        return res.json({contacts: contacts.map(user => user._doc)});
    } catch (e) {
        console.error(e)
        return res.status(500).json({error: e.message})
    }
}

