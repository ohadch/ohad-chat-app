const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/', {
    auth: {
        user:'root',
        password:'example'
    },
    authSource:"admin",
    useUnifiedTopology: true,
    useNewUrlParser: true
});

module.exports = mongoose;