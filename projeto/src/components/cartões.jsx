import styles from "../../styles/cartões.module.css"
import { useRouter } from "next/router"

<<<<<<< HEAD
export default function Cartões({ nome, total, data, cor }) {
    const router = useRouter()
=======
export default function Cartões({ nome, distrito, total, data, cor }) {
    const router = useRouter()
    let isBackgroundRed = cor
>>>>>>> 8b3af58e4279f6447d56ed19a8fe3625561ae1f1

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