import { insertMorador, getAllMoradores } from "../../../src/data/paperwork"

export default async function handler(req, res) {
    console.log("Recebi")
    if (req.method === "POST") {
        console.log("Post")
        const i = await insertMorador(req.body)
        res.status(200).json({mensagem: "Funcionou o POST", id: i})
        console.log("RES")

    }if (req.method === "GET"){
        console.log("GET")
        const dados = await getAllMoradores(req.body)
        res.status(200).json(dados)
        console.log(dados)
        console.log("RES")
    }else{
        console.log("ok")
        return res.status(404).json({mensagem: "Nao deu certo"})
    }

}