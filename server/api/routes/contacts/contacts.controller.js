const User = require("../../models/User.model");

module.exports = {
    getContacts
}


async function getContacts(req, res) {
    try {
        const {filterByText} = req.query;
        const users = filterByText
            ? await User.searchByNicknameContains(filterByText)
            : await User.find({}).exec();
        return res.json({users: users.map(user => user._doc)});
    } catch (e) {
        console.error(e)
        return res.status(500).json({error: e.message})
    }
}

