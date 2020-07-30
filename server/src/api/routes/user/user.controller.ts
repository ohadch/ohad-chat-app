import User from "../../../models/User.model";

export async function signUp(req, res) {
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


export async function login(req, res) {
    const {email} = req.body;
    const user = await User.findByEmail(email)
    return res.json({user});
}

