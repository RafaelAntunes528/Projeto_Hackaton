// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getMoradoresByCondominioId } from "../../../src/data/paperwork"

export default async function handler(req, res) {
  console.log("Recebi")
  const { a } = req.query
  if (req.method === "GET") {
      console.log("Get")
      console.log('a', a, req.query)
      const dados = await getMoradoresByCondominioId(a)
      res.status(200).json(dados)
      console.log("RES")


  }else {
      console.log("ok")
      return res.status(404).json({mensagem: "Nao deu certo"})
  }

}