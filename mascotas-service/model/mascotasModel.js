import { dbClient } from "../config/dbClient.js";

export class MascotasModel {
  constructor() {}
  async create(mascota, tipo) {
    const coleccion = dbClient.db.collection(tipo); // "perros" o "gatos"
    return await coleccion.insertOne(mascota);
  }

  async getAll(tipo) {
    if (!tipo) {
      console.log(tipo);

      const perros = dbClient.db.collection("perros").find({}).toArray();
      const gatos = dbClient.db.collection("gatos").find({}).toArray();
      const [resPerros, resGatos] = await Promise.all([perros, gatos]);
      return [...resPerros, ...resGatos];
    }

    const coleccion = dbClient.db.collection(tipo);
    return await coleccion.find({}).toArray();
  }
}
