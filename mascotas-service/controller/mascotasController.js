import { MascotasModel } from "../model/mascotasModel.js";

const model = new MascotasModel();

export class MascotasController {
  constructor() {}

  async create(req, res) {
    try {
      console.log("body recibido: ", req.body);
      const data = await model.create(req.body);
      res.status(201).json(data);
    } catch (err) {
      console.error("Error en CREATE mascota:", err);
      res.status(500).send(err);
    }
  }

  async getAll(req, res) {
    try {
      const data = await model.getAll();
      console.log(data);
      res.status(201).json(data);
    } catch (err) {
      console.error("Error en GET-ALL mascota:", err);
      res.status(500).send(err);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const data = await model.getOne(id);
      res.status(201).json(data);
    } catch (err) {
      console.error("Error en GET-ONE mascota:", err);
      res.status(500).send(err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const data = await model.delete(id);
      res.status(206).json(data);
    } catch (err) {
      console.error("Error en DELETE mascota:", err);
      res.status(500).send(err);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = await model.update(id, req.body);
      res.status(200).json(data);
    } catch (err) {
      console.error("Error en UPDATE mascota:", err);
      res.status(500).send(err);
    }
  }
}
