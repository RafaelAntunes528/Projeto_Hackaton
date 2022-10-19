import styles from "../../styles/morador.module.css"
import { useRouter } from "next/router"

export default function Morador({nomeDaPessoa, andar, isPago}){

    return (
        <div>

        <div className={styles.caixaMain}>
          <h4>nome: {nomeDaPessoa} </h4>
          <h4>casa: {andar} </h4> 
          {isPago == true ? <h4>estado: Pago </h4>:<h4>estado: Não Pago </h4>}  
    </div>
    </div>
    )
    }