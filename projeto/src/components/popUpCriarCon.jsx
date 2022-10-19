import { useRouter } from "next/router";
import { useState } from "react"
import styles from "../../styles/popUpCriarCon.module.css"
import { fazPedido } from "../utils/rest";

export default function PopUpCriarCon(){

    const router = useRouter()

    const [nome, setName] = useState("")
    const [distrito, setDistrito] = useState("")
    const [data, setData] = useState("")
    const [total, setTotal] = useState(0)
    const [estado, setEstado] = useState(false)


    let info = {
        "nome": nome,
        "distrito": distrito,
        "total": total,
        "data": data,
        "cor": estado 
    }

    const fim = (async () => {
        const a = await fazPedido("/api/condominios/", "POST", info)
        console.log(a)
        if (a.status === 200)
            router.push("/mainPage") 
    })


    return (
        <div className={styles.main}>
            <div className={styles.popupshadow}>
                
                <div className={styles.popup}>  
                    <form onSubmit={(e) => e.preventDefault(fim())}>
                <label for="Nome">Nome</label><br/>            
                <input type="text" value={nome} onChange={(evento) => setName(evento.target.value)}></input><p>

                </p>
                <label for="Distrito">Distrito</label><br/>   
                <input type="text" value={distrito} onChange={(evento) => setDistrito(evento.target.value)}></input><p>
                    
                </p>
                <label for="Data">Data de limite de pagamento</label><br/>   
                <input type="text" value={data} onChange={(evento) => setData(evento.target.value)}></input><p>

                </p>
                <label for="Total p/ mês">Total a pagar por mês</label><br/>   
                <input type="Number" value={total} onChange={(evento) => setTotal(evento.target.value)}></input><p>

                </p>
                <label for="Estado de pagamento">Estado de pagamento</label><br/>   
                <input type="text" value={estado} onChange={(evento) => setEstado(evento.target.value)}></input><p>

                </p>
                <div className={styles.login}>
                <button type={"submit"} className={styles.login1}>Confirmar</button>
                    
                </div>
                </form>
</div></div>
            
 </div>
    )
}