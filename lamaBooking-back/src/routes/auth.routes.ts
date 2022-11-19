import express, { Request, Response } from "express";
import { login, register } from "../controllers/auth";

export const authRoute = express.Router()

authRoute.post("/register", register)

authRoute.post("/login", login)