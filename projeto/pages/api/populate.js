import { main, mainMor } from "../../tasks/populate"

export default async function (req, res){
    await main()
    await mainMor() 
    res.status(200).json({message: "ok"})
}