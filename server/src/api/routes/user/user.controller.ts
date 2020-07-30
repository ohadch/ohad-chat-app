import User from "../../../models/User.model";
import {Request, Response} from "express";

export async function signUp(req: Request, res: Response) {
    try {
        const {firstName, lastName, email, nickname} = req.body;

        const user = new User({
            firstName,
            lastName,
            email,
            nickname
        })
        await user.save()

        return res.json({user});
    } catch (e) {
        console.error(e)
        return res.status(500).json({error: e.message})
    }
}


export async function login(req: Request, res: Response) {
    const {email} = req.body;
    const user = await User.findByEmail(email)
    return res.json({user});
}

