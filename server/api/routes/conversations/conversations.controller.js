const Conversation = require("../../models/Conversation.model");

module.exports = {
    getConversations,
    createConversation
}


async function getConversations(req, res) {
    const {user} = req;

    try {
        const records = await Conversation.find({ user: user._id }).populate([
            { path: "user", model: "User" },
            { path: "contact", model: "User" },
        ]).exec();
        const conversations = records.map(conversation => conversation._doc);
        return res.json({ conversations });
    } catch (e) {
        console.error(e)
        return res.status(500).json({error: e.message})
    }
}

async function createConversation(req, res) {
    const {user} = req;
    const {contact} = req.body;

    if (!user || !contact) {
        return res.status(400).json({error: `Must provide both user and contact`})
    }

    try {
        const conversation = await Conversation.getOrCreate(user, contact)
        return res.json({ conversation });
    } catch (e) {
        console.error(e)
        return res.status(500).json({error: e.message})
    }
}
