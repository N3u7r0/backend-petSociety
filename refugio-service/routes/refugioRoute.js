import express from "express";
export const refugioRoute = express.Router();
import {refugioController} from "../controllers/index.js";

refugioRoute.get("/:id", refugioController.getOne)
refugioRoute.get("/", refugioController.getAll)
refugioRoute.post("/",refugioController.create)
refugioRoute.put("/:id", refugioController.update)
refugioRoute.delete("/:id", refugioController.delete)
