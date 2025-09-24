import {dbClient} from "../config/dbClient.js";

export class UsuariosModel {
    async create() {
        const llamadaUsuario = dbClient.db.collection("usuario");
    }
}


