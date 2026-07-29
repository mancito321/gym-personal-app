import { MongoClient, type Db } from "mongodb";

const globalForMongo = globalThis as unknown as {
  mongoClientPromise?: Promise<MongoClient>;
};

function getUri(): string {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }
  return uri;
}

function getDbName(): string {
  const name = process.env.MONGODB_DB;
  if (!name) {
    throw new Error("MONGODB_DB is not set");
  }
  return name;
}

export function getMongoClientPromise(): Promise<MongoClient> {
  if (!globalForMongo.mongoClientPromise) {
    const client = new MongoClient(getUri());
    globalForMongo.mongoClientPromise = client.connect();
  }
  return globalForMongo.mongoClientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await getMongoClientPromise();
  return client.db(getDbName());
}

export async function validateMongoConnection(): Promise<boolean> {
  try {
    const client = await getMongoClientPromise();
    await client.db(getDbName()).command({ ping: 1 });
    return true;
  } catch (error) {
    console.error("[mongo] connection validation failed", error);
    return false;
  }
}

export async function closeMongoConnection(): Promise<void> {
  const promise = globalForMongo.mongoClientPromise;
  if (!promise) {
    return;
  }
  const client = await promise;
  await client.close();
  globalForMongo.mongoClientPromise = undefined;
}
