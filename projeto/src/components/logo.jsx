import styles from "../../styles/logo.module.css"
import { useRouter } from "next/router"

export default function Logo(){
    const router = useRouter()
    return (
    <div>
        
        <div className={styles.main}>

        <div className={styles.logo}></div>
        <button onClick={() => router.push("/login")} className={styles.botao}>Login</button>

    </div>
    </div>
    )
}