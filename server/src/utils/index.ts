import * as express from "express";
// @ts-ignore
import mongoose from "mongoose";
import UserModel from "../models/User.model";

export function mountRestrictedRouter(app: express.Express, route: string, router: express.Router) : void {
    app.use(route, async function (req, res, next) {
        const _id = req.get("token")

        if (!_id) {
            return res.status(401).json({error: "unauthorized"})
        }

        const user = await UserModel.findOne({ _id }).exec()

        if (!user) {
            return res.status(401).json({error: "unauthorized"})
        }

        (req as any).user = user._doc;
        (req as any).user!._id = mongoose.Types.ObjectId(_id);
        next()
    })
    app.use(route, router)
}
