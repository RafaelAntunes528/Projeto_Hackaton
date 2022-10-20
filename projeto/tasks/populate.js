import { getMongoCollection } from "../src/data/mongodb";
import { insertMorador } from "../src/data/paperwork";
const DB_NAME = "hack402"
const CON = "condominios"
const MOR = "moradores"
const casas = [
    {
        nome: "Teste1",
        distrito: "Sintra",
        total: 200,
        data: "10/20",
        cor: true,
    },
    {
        nome: "Teste2",
        distrito: "Sintra",
        total: 300,
        data: "10/20",
        cor: true,
    },
    {
        nome: "Teste3",
        distrito: "Sintra",
        total: 450,
        data: "10/20",
        cor: true,
    },
    
]

async function insertCondominio(op) {
    const collection = await getMongoCollection(DB_NAME, CON)

    const result = await collection.insertOne(op)
    return result.insertedId
}

const idsDeCondominios = []
const getRandomFromArray = (arr) => {
    let a = Math.floor(Math.random()* idsDeCondominios.length)

    return arr[a]
}
export async function main() {
    await Promise.all(casas.map(async casa => {
        const idGerado = await insertCondominio(casa)
        idsDeCondominios.push(idGerado)
        console.log(idsDeCondominios)
    }))
}
/* main().then(() => console.log("done")) */


export async function mainMor() {
    let random = getRandomFromArray(idsDeCondominios)

    const moradores = [
       {
            nomedapessoa: "Rafael",
            estado: true,
            casa: "Rc/D",
           condominioId: random,
        },
       {
            nomedapessoa: "Monica",
            estado: false,
            casa: "12",
           condominioId: random,
        },
       {
            nomedapessoa: "Vasco",
            estado: true,
            casa: "8",
           condominioId: random,
        },
       {
            nomedapessoa: "Antonio",
            estado: false,
            casa: "1",
           condominioId: random,
        },
       {
            nomedapessoa: "Maria",
            estado: false,
            casa: "4",
           condominioId: random,
        },
       {
            nomedapessoa: "Cristina",
            estado: true,
            casa: "3",
           condominioId: random,
        },
    ]
    await Promise.all(moradores.map(async casa => {
        const idGerado = await insertMorador(casa)
        idsDeCondominios.push(idGerado)
        console.log(idsDeCondominios)
    }))
}
/* mainMor().then(() => console.log("done")) */
