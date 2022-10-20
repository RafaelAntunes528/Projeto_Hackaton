import { useRouter } from "next/router";
import { useState } from "react"
import styles from "../../styles/popUpMorador.module.css"
import { fazPedido } from "../utils/rest";

export default function PopUpMorador(){

    const router = useRouter()

    const [nome, setName] = useState("")
    const [distrito, setDistrito] = useState("")
    const [estado, setEstado] = useState(false)


    let info = {
        "nome": nome,
        "distrito": distrito,
        "cor": estado 
    }

    /*const fim = (async () => {
        const a = await fazPedido("/api/condominios/", "POST", info)
        console.log(a)
        if (a.status === 200)
            router.push("/mainPage") 
    }) */


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