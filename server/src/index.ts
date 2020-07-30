import { http, PORT } from "./app";

http.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})