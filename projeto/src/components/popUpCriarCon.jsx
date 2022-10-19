import styles from "../../styles/popUpCriarCon.module.css"

export default function PopUpCriarCon(){
    return (
        <div className={styles.main}>
            <div className={styles.popupshadow}>
                
                <div className={styles.popup}>
                    <form>
                <label for="Nome">Nome</label><br/>            
                <input type="text"></input><p>

                </p>
                <label for="Distrito">Distrito</label><br/>   
                <input type="text"></input><p>
                    
                </p>
                <label for="Data">Data de limite de pagamento</label><br/>   
                <input type="text"></input><p>

                </p>
                <label for="Total p/ mês">Total a pagar por mês</label><br/>   
                <input type="text"></input><p>

                </p>
                <label for="Estado de pagamento">Estado de pagamento</label><br/>   
                <input type="text"></input><p>

                </p>
                <div className={styles.login}>
                <button className={styles.login1}>Confirmar</button>
                    
                </div>
                </form>
</div></div>
            
 </div>
    )
}