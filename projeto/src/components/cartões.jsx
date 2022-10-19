import styles from "../../styles/cartões.module.css"
import { useRouter } from "next/router"

export default function Cartões({ nome, total, data }) {
    const router = useRouter()
    nome = "sjsdcb"
    


    return (
        <div onClick={() => router.push("/cartõesPagina")} className={styles.cartao1}>
            <h1>Nome:</h1>
            <p>{nome}</p>
            
            <p>{total}</p>
            <p>{data}</p>
        </div>
    )
}