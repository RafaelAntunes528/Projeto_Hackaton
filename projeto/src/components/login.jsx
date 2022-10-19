import styles from "../../styles/login.module.css"
import Image from "next/image"

export default function Login(){

    return (
        <div className={styles.main}>
            <Image className={styles.Image}></Image>
            
            <div className={styles.divMeio}>
                <label htmlFor="email">E-mail</label>
                <input type="email"></input>
                <label htmlFor="email">Password</label>   
                <input type="password"></input>
                <div className={styles.login}>
                <button className={styles.login1}>Login</button>
                </div>
</div>
 </div>
    )
}