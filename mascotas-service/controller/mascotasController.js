import { MascotasModel } from "../model/mascotasModel.js";

const model = new MascotasModel();

export class MascotasController {
  constructor() {}

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const data = await model.getOne(id);
      console.log(id);
      console.log(data);
      res.status(201).json(data);
    } catch (err) {
      console.error("Error en GET-ONE mascota:", err);
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

  async update(req, res) {
    try {
      const { id } = req.params;
      const body = req.body;
      const result = await model.update(id, body);
      if (!result.value)
        return res.status(404).json({ error: "Mascota no encontrada" });
      res.status(200).json(result.value);
    } catch (err) {
      console.error("Error en UPDATE mascota:", err);
      res.status(500).send(err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const data = await model.delete(id);
      console.log(id);
      console.log(data);
      res.status(201).json(data);
    } catch (err) {
      console.error("Error en DELETE mascota:", err);
      res.status(500).send(err);
    }
  }
}
