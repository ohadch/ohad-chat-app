import * as express from "express";
import {Schema} from "mongoose";

export function mountRestrictedRouter(app: express.Express, route: string, router: express.Router) : void {
    app.use(route, async function (req: express.Request, res: express.Response, next) {
        const _id = req.get("token")

        if (!_id) {
            return res.status(401).json({error: "unauthorized"})
        }

        const user = await User.findOne({ _id }).exec()

        if (!user) {
            return res.status(401).json({error: "unauthorized"})
        }

        req.user = user._doc;
        req.user!._id = new Schema.Types.ObjectId(_id);
        next()
    })
    app.use(route, router)
}
