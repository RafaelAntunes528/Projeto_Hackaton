import { ObjectId } from "mongodb"
// Buscamos a função que faz a conecção com a base de dados
import { getMongoCollection } from "./mongodb"


//Defenimos o nome da base de dados e o nome da celeção
const DB_NAME = "hack402"
const COLLECTION_NAME = "condominios"


// Introduz uma conta a coleção
async function insertConta(op) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    await collection.insertOne(op)
}
async function insertOferta(op) {
    const collection = await getMongoCollection(DB_NAME, Ofertas)
    const result = await collection.insertOne(op)
    return result.insertedId
}
async function getUserByEmail(email) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME);
    const result = await collection.findOne({ email });
    return result;
  }
async function getOferta(id) {
    const collection = await getMongoCollection(DB_NAME, Ofertas);
        return await collection.findOne({ _id: new ObjectId(id)})
}

// Exportamos as duas funções criadas acima
export {
    
}