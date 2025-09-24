import {dbClient} from "../config/dbClient.js";

export class RefugioModel {
    async create() {
        const llamadaRefugio = dbClient.db.collection("refugio");
    }
}

