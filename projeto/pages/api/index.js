import { getAllCondominio } from "../../src/data/paperwork"

export default async function handler(req, res) {
    console.log("Iniciei")
    if (req.method === "GET") {
        console.log("GET")
        const dados = await getAllCondominio(req.body)
        res.status(200).json(dados)
        console.log("RES")

    }else{
        console.log("ok")
        return res.status(404).json({mensagem: "Nao deu certo"})
    }

}