import { insertCondominio } from "../../../src/data/paperwork"

export default async function handler(req, res) {
    console.log("Recebi")
    if (req.method === "POST") {
        console.log("Post")
        const i = await insertCondominio(req.body)
        res.status(200).json({mensagem: "Funcionou o POST", id: i})
        console.log("RES")

    }else{
        console.log("ok")
        return res.status(404).json({mensagem: "Nao deu certo"})
    }

}