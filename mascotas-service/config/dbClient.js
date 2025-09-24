import dbClientFactory from "../../helpers/dbClientFactory.js";

export const dbClient = new dbClientFactory("mascotas-db");
await dbClient.conectar();

const db = dbClient.getDB();
