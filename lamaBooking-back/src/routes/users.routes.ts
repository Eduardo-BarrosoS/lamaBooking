import express, { NextFunction, Request, RequestHandler, Response } from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken";

export const usersRoute = express.Router()

// usersRoute.get("/checkauthentication", verifyToken as RequestHandler, (req: Request, res: Response, next: NextFunction) => {
//     res.send("Hello user, you are logged in")
// })

// usersRoute.get("/checkuser/:id", verifyUser as RequestHandler, (req: Request, res: Response, next: NextFunction) => {
//     res.send("Hello user, you are logged in and you can delete your account")
// })

// usersRoute.get("/checkadmin/:id", verifyAdmin as RequestHandler, (req: Request, res: Response, next: NextFunction) => {
//     res.send("Hello admin, you are logged in and you can delete all account")
// })

usersRoute.put("/:id", verifyUser  as RequestHandler,  updateUser)

usersRoute.delete("/:id", verifyUser  as RequestHandler, deleteUser)

usersRoute.get("/:id", verifyUser  as RequestHandler, getUser)

usersRoute.get("/", verifyUser  as RequestHandler, getAllUser)