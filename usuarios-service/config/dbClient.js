import dbClientFactory from "../../helpers/dbClientFactory.js";

export const dbClient = new dbClientFactory("usuarios-db");
await dbClient.conectar();

const db = dbClient.getDB();
