import styles from "../../styles/cartoes.module.css"
import { useRouter } from "next/router"

export default function Cartoes({ nome, distrito, total, data, cor, _id }) {
    const router = useRouter()
    let isBackgroundRed = cor
    console.log(_id)
    return (
        <div style={{
            backgroundColor: isBackgroundRed ? '#38b6ff' : 'red',
          }} onClick={() => router.push(`/cartao/${_id}`)} className={styles.cartao1}>
            <p className={styles.nome}>Nome: {nome}</p>
            <p className={styles.nome}>Distrito: {distrito}</p>
            <p className={styles.total}>Total receber: {total}</p>         
            <p className={styles.data}>Data: {data}</p> 
        </div>
    )
}