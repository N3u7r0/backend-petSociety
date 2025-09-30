import { dbClient } from "../config/dbClient.js";

export class MascotasModel {
  async create(mascota, tipo) {
    const coleccion = dbClient.db.collection(tipo); // "perros" o "gatos"
    return await coleccion.insertOne(mascota);
  }
}
