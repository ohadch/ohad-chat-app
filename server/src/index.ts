import {PORT} from "./config";
import {http} from "./app";

http.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});