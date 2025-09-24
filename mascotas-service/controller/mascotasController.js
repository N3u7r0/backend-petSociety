import {MascotasModel} from "../model/mascotasModel.js";

export class MascotasController {
  constructor() {}

  async getOne(req, res) {
    try {
      res.status(201).json({ status: "ok-getOne-mascotas" });
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async getAll(req, res) {
    try {
      res.status(201).json({ status: "ok-getAll-mascotas" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
  async create(req, res) {
    try {
      res.status(201).json({ status: "ok-create-mascotas" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
  async update(req, res) {
    try {
      res.status(201).json({ status: "ok-update-mascotas" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
  async delete(req, res) {
    try {
      res.status(201).json({ status: "ok-delete-mascotas" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

