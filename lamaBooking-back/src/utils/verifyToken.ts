import { createError } from "../utils/Error";
import jwt from "jsonwebtoken";
import { NextFunction, Request, RequestHandler, Response } from "express";
import { IUser } from "../models/Users";

interface IReqUser extends Request {
    user: IUser
}


export const verifyToken = (req: IReqUser, res: Response, next: NextFunction, verify: RequestHandler) => {
    const token = req.cookies.access_token
    if (!token) {
      return next(createError(401, "You are not authenticated!"));
    }
  
    jwt.verify(token, process.env.JWT as string, (err: any, user: any) => {
      if (err) return next(createError(403, "Token is not valid!"));
      req.user = user;
      next();
    });
  };


  export const verifyUser = (req: IReqUser, res: Response, next: NextFunction) => {
    verifyToken(req, res, next, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        return next(createError(403, "You are not authorized!"));
      }
    });
  };
  
  export const verifyAdmin = (req: IReqUser, res: Response, next: NextFunction) => {
    verifyToken(req, res, next, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        return next(createError(403, "You are not authorized!"));
      }
    });
  };
  