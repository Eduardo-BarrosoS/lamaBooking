import express, { RequestHandler, Response } from "express";
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel";
import { verifyAdmin } from "../utils/verifyToken";

export const hotelsRoute = express.Router()


hotelsRoute.post("/", verifyAdmin as RequestHandler, createHotel)

hotelsRoute.put("/update/:id", verifyAdmin as RequestHandler,  updateHotel)

hotelsRoute.delete("/delete/:id", verifyAdmin as RequestHandler,  deleteHotel)

hotelsRoute.get("/find/:id",  getHotel)

hotelsRoute.get("/",  getAllHotel)

hotelsRoute.get("/countByCity",  countByCity)

hotelsRoute.get("/countByType",  countByType)