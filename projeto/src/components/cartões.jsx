import styles from "../../styles/cartões.module.css"
import { useRouter } from "next/router"

export default function Cartões({ nome, total, data }) {
    const router = useRouter()

    if()
    



    return (
        <div onClick={() => router.push("/cartõesPagina")} className={styles.cartao1}>
            <p className={styles.nome}>Nome: {nome}</p>
            <p className={styles.total}>Total receber: {total}</p>         
            <p className={styles.data}>Data: {data}</p>
            
        </div>
    )
}