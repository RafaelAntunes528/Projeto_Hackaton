import styles from "../../styles/cartões.module.css"
import { useRouter } from "next/router"

export default function Cartões({ nome, total, distrito, data, cor }) {
    const router = useRouter()

    let isBackgroundRed = cor

    return (
        <div style={{
            backgroundColor: isBackgroundRed ? '#38b6ff' : 'red',
          }} onClick={() => router.push("/cartõesPagina")} className={styles.cartao1}>
            <p className={styles.nome}>Nome: {nome}</p>
            <p className={styles.nome}>Distrito: {distrito}</p>
            <p className={styles.total}>Total receber: {total}</p>         
            <p className={styles.data}>Data: {data}</p>
            
        </div>
    )
}