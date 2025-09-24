import "dotenv/config";
import { MongoClient } from "mongodb";

class dbClientFactory {
  constructor(dbName) {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=Cluster0`;
    this.client = new MongoClient(queryString);
    this.dbName = dbName;
    this.db = null;
  }

  async conectar() {
    await this.client.connect();
    this.db = this.client.db(this.dbName);
    console.log(`Conectado a la DB: ${this.dbName}`);
  }

  getDB() {
    return this.db;
  }
}

export default dbClientFactory;