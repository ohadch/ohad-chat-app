const config = require("./config");
const app = require("./app")

app.listen(config.PORT, () => {
    console.log(`listening on http://localhost:${config.PORT}`);
});