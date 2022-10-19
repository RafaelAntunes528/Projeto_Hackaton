import styles from '../../styles/MainPage.module.css'
import { fazPedido } from '../utils/rest'
import Cartões from './cartões'
import { MyResponsivePie } from './graficoPie'
export default function HomePage(){

    let resposta = fazPedido("/api/", "GET")

    return(
        <div className={styles.main}>
            <div className={styles.graph}>
                <MyResponsivePie data={[
                {
                "id": "Pago",
                "label": "Pago",
                "value": 2500,
                "color": "hsl(201, 100%, 61%)"
                },
                {
                "id": "Não Pago",
                "label": "Npago",
                "value": 1000,
                "color": "hsl(249, 68%, 52%)"
                }
                ]}/>
            </div>


            <div className={styles.searchContainer}>
                <input type="text" name="search" placeholder="Search..." className={styles.searchInput}/>

            </div>

            <div className={styles.conduminios}>
            <Cartões nome={resposta.nome} distrito={resposta.distrito} total={resposta.total} data={resposta.data} cor={resposta.true}></Cartões>
            </div>
            
            

        </div>
    )
}