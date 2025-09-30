import dbClientFactory from "../../helpers/dbClientFactory.js";

export const dbClient = new dbClientFactory("mascotas");
await dbClient.conectar();

export const db = dbClient.getDB();
