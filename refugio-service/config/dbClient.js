import dbClientFactory from "../../helpers/dbClientFactory.js";

export const dbClient = new dbClientFactory("refugio-db");
await dbClient.conectar();

const db = dbClient.getDB();