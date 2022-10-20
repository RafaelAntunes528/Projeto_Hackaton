import styles from "../../styles/cartoes.module.css"
import { useRouter } from "next/router"

export default function Cartoes({ nome, distrito, total, data, cor }) {
    const router = useRouter()
    let isBackgroundRed = cor

    return (
        <div style={{
            backgroundColor: isBackgroundRed ? '#38b6ff' : 'rgb(207, 86, 73)',
          }} onClick={() => router.push("/cartoesPagina")} className={styles.cartao1}>
            <p className={styles.nome}>Nome: {nome}</p>
            <p className={styles.nome}>Distrito: {distrito}</p>
            <p className={styles.nome}>Total receber: {total}</p>         
            <p className={styles.nome}>Data: {data}</p> 
        </div>
    )
}