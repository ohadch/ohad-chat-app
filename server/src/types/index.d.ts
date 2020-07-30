import {IUserDocument} from "./interfaces";

declare global {
  namespace Express {
    interface Request {
      user?: IUserDocument
    }
  }
}