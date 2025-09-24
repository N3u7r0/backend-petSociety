import {dbClient} from "../config/dbClient.js";

export class MascotasModel {
    async create() {
        const llamadaMascotas = dbClient.db.collection("mascotas");
    }
}


