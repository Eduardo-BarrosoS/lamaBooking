import { Request, Response, NextFunction } from "express";
import { User } from "../models/Users";


export async function updateUser(req: Request, res: Response, next: NextFunction) {
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body}, { new: true })
        const { password, isAdmin, ...otherDetails} = updateUser?._doc;
        res.status(200).json(otherDetails)
    } catch (err) {
        next(err)
    }
}

export async function deleteUser(req: Request, res: Response, next: NextFunction) {
    try{
        await User.findByIdAndDelete(req.params.id)
       res.status(200).json("User deleted")
   } catch (err) {
       next(err)
   }
}

export async function getUser(req: Request, res: Response, next: NextFunction) {
    try{
        const UserById = await User.findById(req.params.id)
        res.status(200).json(UserById)
    } catch (err) {
        next(err)
    }
}

export async function getAllUser(req: Request, res: Response, next: NextFunction) {
    try{
        const user = await User.find()
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}

