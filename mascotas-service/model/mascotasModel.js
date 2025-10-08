import { dbClient } from "../config/dbClient.js";
import { ObjectId } from "mongodb";

export class MascotasModel {
  constructor() {}

  async create(mascota) {
    const coleccion = dbClient.db.collection("mascotas");
    return await coleccion.insertOne(mascota);
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

  async update(id, mascota) {
    const coleccion = dbClient.db.collection("mascotas");
    return await coleccion.updateOne({ _id: new ObjectId(id) }, {$set: mascota});
  }
}
