import express from "express";
import { mascotasController } from "../controller/index.js";
export const mascotasRoute = express.Router();

mascotasRoute.get("/id/:id", mascotasController.getOne);
mascotasRoute.get("/", mascotasController.getAll);
mascotasRoute.get("/:tipo", mascotasController.getAll);
mascotasRoute.post("/:tipo", mascotasController.create);
mascotasRoute.put("/:id", mascotasController.update);
mascotasRoute.delete("/:id", mascotasController.delete);
