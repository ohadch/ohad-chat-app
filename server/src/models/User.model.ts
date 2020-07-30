import mongoose, {Schema} from "mongoose";
import {IUserDocument, IUserModel} from "../types/interfaces";


const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {type: String, unique: true},
    nickname: {type: String, unique: true},
    status: {type: String, default: ""},
    lastSeen: String,
    isOnline: {type: Boolean, default: false}
});


UserSchema.statics.findByEmail = function(email: string) {
    return this.findOne({ email });
}

const UserModel: IUserModel = mongoose.model<IUserDocument, IUserModel>('User', UserSchema, "users");

export default UserModel;