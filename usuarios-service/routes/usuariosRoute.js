import express from "express";
import { usuariosController } from "../controller/index.js";
export const usuariosRoute = express.Router();

usuariosRoute.get("/:id", usuariosController.getOne);
usuariosRoute.get("/", usuariosController.getAll);
usuariosRoute.post("/", usuariosController.create);
usuariosRoute.put("/:id", usuariosController.update);
usuariosRoute.delete("/:id", usuariosController.delete);
