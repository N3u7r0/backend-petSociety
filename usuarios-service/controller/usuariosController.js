import { UsuariosModel } from "../model/usuariosModel.js";

export class UsuariosController {
  constructor() {}

  async getOne(req, res) {
    try {
      res.status(201).json({ status: "ok-getOne-usuarios" });
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async getAll(req, res) {
    try {
      res.status(201).json({ status: "ok-getAll-usuarios" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
  async create(req, res) {
    try {
      res.status(201).json({ status: "ok-create-usuarios" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
  async update(req, res) {
    try {
      res.status(201).json({ status: "ok-update-usuarios" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
  async delete(req, res) {
    try {
      res.status(201).json({ status: "ok-delete-usuarios" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
}
