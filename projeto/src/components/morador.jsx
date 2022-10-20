import styles from "../../styles/morador.module.css"
import { useRouter } from "next/router"

export default function Morador({nomeDaPessoa, andar, isPago, cor}){

  let isBackgroundRed = cor

    return (
        <div>

        <div className={styles.caixaMain}>
          <div className={styles.logo}></div>
          <div className={styles.nomes}>
          <h4>Nome: {nomeDaPessoa} </h4>
          <h4>Casa: {andar} </h4>

          <div className={styles.mudaCor} style={{
            backgroundColor: isPago == true ? '#38b6ff' : 'red',
          }}>{isPago == true ? <h4>Estado: Pago </h4>:<h4>Estado: Não Pago </h4>}</div>  
    </div>
    </div>
    </div>
    )
    }