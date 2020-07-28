const User = require("../../models/User.model");

module.exports = {
    getConversations
}


async function getConversations(req, res) {
    try {
        return res.json([]);
    } catch (e) {
        console.error(e)
        return res.status(500).json({error: e.message})
    }
}
