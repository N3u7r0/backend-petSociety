import { MascotasModel } from "../model/mascotasModel.js";

export class MascotasController {
  constructor() {}

  async getOne(req, res) {
    try {
      res.status(201).json({ status: "ok-getOne-mascotas" });
    } catch (err) {
      console.error("Error en GET-ONE mascota:", err);
      res.status(500).send(err);
    }
  }

  async getAll(req, res) {
    try {
      res.status(201).json({ status: "ok-getAll-mascotas" });
    } catch (err) {
      console.error("Error en GET-ALL mascota:", err);
      res.status(500).send(err);
    }
  }
  async create(req, res) {
    try {
      const tipo = req.params.tipo; // "perros" o "gatos"
      const model = new MascotasModel();
      console.log("Body recibido:", req.body);
      const data = await model.create(req.body, tipo);
      res.status(201).json(data);
    } catch (err) {
      console.error("Error en CREATE mascota:", err);
      res.status(500).send(err);
    }
  }
  async update(req, res) {
    try {
      res.status(201).json({ status: "ok-update-mascotas" });
    } catch (err) {
      console.error("Error en UPDATE mascota:", err);
      res.status(500).send(err);
    }
  }
  async delete(req, res) {
    try {
      res.status(201).json({ status: "ok-delete-mascotas" });
    } catch (err) {
      console.error("Error en DELETE mascota:", err);
      res.status(500).send(err);
    }
  }
}
