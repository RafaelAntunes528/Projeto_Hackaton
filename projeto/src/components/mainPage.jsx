import styles from '../../styles/MainPage.module.css'
import Cartões from './cartões'
import { MyResponsivePie } from './graficoPie'
import Tabela, { MyResponsiveCalendar } from './Tabela'
export default function HomePage(){
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
                ]}></MyResponsivePie>
            </div>


            <div className={styles.searchContainer}>
                <input type="text" name="search" placeholder="Search..." className={styles.searchInput}/>
            </div>

            <div className={styles.conduminios}>
            <Cartões nome={"Rafael"} total={150} data={"12/05"}></Cartões>
            <Cartões nome={"Vasco"} total={"12749"} data={"vvf"}></Cartões>
            <Cartões nome={"Mónica"} total={"6876"} data={"vvf"}></Cartões>
            </div>

            <div className={styles.conduminios}>
            <Cartões nome={"António"} total={"fer"} data={"vvf"}></Cartões>
            <Cartões nome={"Rafael"} total={"12749"} data={"vvf"}></Cartões>
            <Cartões nome={"Vasco"} total={"6876"} data={"vvf"}></Cartões>
            </div>
            <div className={styles.conduminios}>
            <Cartões nome={"Mónica"} total={"fer"} data={"vvf"}></Cartões>
            <Cartões nome={"António"} total={"12749"} data={"vvf"}></Cartões>
            <Cartões nome={"Rafael"} total={"6876"} data={"vvf"}></Cartões>
            </div>
            

        </div>
    )
}