import express from "express";
import {mascotasController} from "../controller/index.js";
export const mascotasRoute = express.Router();

mascotasRoute.get("/:id", mascotasController.getOne)
mascotasRoute.get("/", mascotasController.getAll)
mascotasRoute.post("/",mascotasController.create)
mascotasRoute.put("/:id", mascotasController.update)
mascotasRoute.delete("/:id", mascotasController.delete)

