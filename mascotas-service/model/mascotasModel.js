import { dbClient } from "../config/dbClient.js";
import { ObjectId } from "mongodb";

export class MascotasModel {
  constructor() {}

  async create(body) {
    const coleccion = dbClient.db.collection("mascotas");
    return await coleccion.insertOne(body);
  }

  async getAll() {
    const coleccion = dbClient.db.collection("mascotas");
    return await coleccion.find({}).toArray();
  }

  async getOne(id) {
    const coleccion = dbClient.db.collection("mascotas");
    return await coleccion.findOne({ _id: new ObjectId(id) });
  }

  async delete(id) {
    const coleccion = dbClient.db.collection("mascotas");
    return await coleccion.deleteOne({ _id: new ObjectId(id) });
  }

  async update(id, body) {
    if (!ObjectId.isValid(id)) throw new Error("ID inválido");
    const coleccion = dbClient.db.collection("mascotas");
    return await coleccion.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: body },
      { returnDocument: "after" }
    );
  }
}
