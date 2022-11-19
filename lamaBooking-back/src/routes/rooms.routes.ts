import express, { RequestHandler } from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from "../controllers/room";
import { verifyAdmin } from "../utils/verifyToken";

export const roomsRoute = express.Router()

roomsRoute.post("/:hotelid", verifyAdmin as RequestHandler, createRoom)

roomsRoute.put("/:id", verifyAdmin as RequestHandler,  updateRoom)

roomsRoute.delete("/:id/:hotelid", verifyAdmin as RequestHandler,  deleteRoom)

roomsRoute.get("/:id",  getRoom)

roomsRoute.get("/",  getAllRoom)