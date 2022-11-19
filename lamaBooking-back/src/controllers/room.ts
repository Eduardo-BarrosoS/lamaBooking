import { Request, Response, NextFunction } from "express";
import { Hotel } from "../models/Hotels";
import { Rooms } from "../models/Rooms";

export const createRoom = async(req: Request, res: Response, next: NextFunction) => {

    const hotelId= req.params.hotelid;
    const newRoom = new Rooms(req.body)
    try{
        const saveRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: saveRoom._id }  })
        } catch (err) {
            next(err)
        }
        res.status(200).json(saveRoom)
    } catch (err) {
        next(err)
    }
}

export async function updateRoom(req: Request, res: Response, next: NextFunction) {
    try{
        const updateRoom = await Rooms.findByIdAndUpdate(req.params.id, { $set: req.body}, { new: true })
        res.status(200).json(updateRoom)
    } catch (err) {
        next(err)
    }
}

export async function deleteRoom(req: Request, res: Response, next: NextFunction) {
    const hotelId= req.params.hotelid;
    try{
        await Rooms.findByIdAndDelete(req.params.id)
        try {
           await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id }  })
        } catch (err) {
            next(err)
        }
       res.status(200).json("Room deleted")
   } catch (err) {
       next(err)
   }
}

export async function getRoom(req: Request, res: Response, next: NextFunction) {
    try{
        const room = await Rooms.findById(req.params.id)
        res.status(200).json(room)
    } catch (err) {
        next(err)
    }
}

export async function getAllRoom(req: Request, res: Response, next: NextFunction) {
    try{
        const room = await Rooms.find()
        res.status(200).json(room)
    } catch (err) {
        next(err)
    }
}

