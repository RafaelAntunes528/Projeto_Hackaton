import { useRouter } from "next/router"
import styles from "../../styles/login.module.css"


export default function Login(){
    const router = useRouter()

    return ( 
        <div>
    <div className={styles.banner}></div>
        <div className={styles.main}>
           
                <div className={styles.logo}></div>
            
            
            <div className={styles.divMeio}>
                <label htmlFor="email">E-mail</label>
                <input type="email"></input>
                <label htmlFor="email">Password</label>   
                <input type="password"></input>
                <div className={styles.login}>
                <button onClick={() => router.push("./mainPage")} className={styles.login1}>Fazer Login</button>
                </div>
</div>
 </div>
 </div>
    )
}