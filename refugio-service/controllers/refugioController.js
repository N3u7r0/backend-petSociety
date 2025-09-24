import { RefugioModel } from "../model/refugioModel.js";

export class RefugioController {
  constructor() {}

  async getOne(req, res) {
    try {
      res.status(201).json({ status: "ok-getOne-refugio" });
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async getAll(req, res) {
    try {
      res.status(201).json({ status: "ok-getAll-refugio" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
  async create(req, res) {
    try {
      res.status(201).json({ status: "ok-create-refugio" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
  async update(req, res) {
    try {
      res.status(201).json({ status: "ok-update-refugio" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
  async delete(req, res) {
    try {
      res.status(201).json({ status: "ok-delete-refugio" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
}
