import styles from "../../styles/login.module.css"

export default function Login(){
    return (
        <div className={styles.main}>
            <div className={styles.divMeio}>
                <label for="email">Email</label>             
                <input type="email"></input>
                <label for="email">Password</label>   
                <input type="password"></input>
                <div className={styles.login}>
                <button className={styles.login1}>Login</button>
                </div>
</div>
 </div>
    )
}