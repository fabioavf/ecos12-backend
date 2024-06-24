import * as fs from 'fs';

const dbName = 'unifei';

export async function createCollectionAndInsertDocuments(client, fileName, collectionName) {
  try {
    const db = client.db(dbName);

    const collections = await db.listCollections({ name: collectionName }).toArray();
    if (collections.length > 0) {
      return;
    }
    // Ler o arquivo JSON
    const data = JSON.parse(fs.readFileSync(`./src/data/${fileName}.json`, 'utf-8'));

    // Cria a coleção e insere os documentos
    const collection = db.collection(collectionName);
    const result = await collection.insertMany(data);
    console.log(`${result.insertedCount} documentos inseridos na coleção`);
  } catch (error) {
    console.error(error);
  }
}
