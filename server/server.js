const config = require("./config");
const {http} = require("./app")

http.listen(config.PORT, () => {
    console.log(`listening on http://localhost:${config.PORT}`);
});