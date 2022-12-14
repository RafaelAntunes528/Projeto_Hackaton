
import { ObjectId } from "mongodb"
// Buscamos a função que faz a conecção com a base de dados
import { getMongoCollection } from "./mongodb"


//Defenimos o nome da base de dados e o nome da celeção
const DB_NAME = "hack402"
const CON = "condominios"
const MOR = "moradores"


// Introduz uma conta a coleção
async function insertCondominio(op) {
    const collection = await getMongoCollection(DB_NAME, CON)
    const result = await collection.insertOne(op)
    return result.insertedId
}
async function insertMorador(op) {
    const collection = await getMongoCollection(DB_NAME, MOR)
    const result = await collection.insertOne(op)
    return result.insertedId
}
async function getCondominio(id) {
    const collection = await getMongoCollection(DB_NAME, CON);
        return await collection.findOne({ _id: new ObjectId(id)})
}
async function getMoradores(id) {
    const collection = await getMongoCollection(DB_NAME, MOR);
        return await collection.findOne({ _id: new ObjectId(id)})
}
async function getMoradoresByCondominioId(id) {
    console.log('id', id)
    if (!ObjectId.isValid(id)) return []
    const collection = await getMongoCollection(DB_NAME, MOR);
        return await collection.find({ condominioId: new ObjectId(id)}).toArray()
}
async function getAllCondominio() {
        const collection = await getMongoCollection(DB_NAME, CON)
        return await collection.find().toArray()
}
async function getAllMoradores() {
        const collection = await getMongoCollection(DB_NAME, MOR)
        return await collection.find().toArray()
}

// Exportamos as duas funções criadas acima
export {
    insertCondominio,
    getCondominio,
    getMoradores,
    getAllCondominio,
    insertMorador,
    getAllMoradores,
    getMoradoresByCondominioId
}