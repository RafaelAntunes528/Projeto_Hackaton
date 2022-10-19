import styles from '../../styles/MainPage.module.css'
import Cartões from './cartões'
import { MyResponsivePie } from './graficoPie'
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
                ]}/>
            </div>


            <div className={styles.searchContainer}>
                <input type="text" name="search" placeholder="Search..." className={styles.searchInput}/>

            </div>

            <div className={styles.conduminios}>
            <Cartões nome={"Rafael"} distrito={"Lisboa"} total={150} data={"12/05"} cor={true}></Cartões>
            <Cartões nome={"Vasco"} distrito={"Lisboa"} total={"12749"} data={"vvf"} cor={false}></Cartões>
            <Cartões nome={"Mónica"} distrito={"Lisboa"} total={"6876"} data={"vvf"} cor={false}></Cartões>
            </div>

            <div className={styles.conduminios}>
            <Cartões nome={"António"} distrito={"Lisboa"} total={"fer"} data={"vvf"} cor={"123456"}></Cartões>
            <Cartões nome={"Rafael"} distrito={"Lisboa"} total={"12749"} data={"vvf"} cor={"123456"}></Cartões>
            <Cartões nome={"Vasco"} distrito={"Lisboa"} total={"6876"} data={"vvf"} cor={"123456"}></Cartões>
            </div>
            
            

        </div>
    )
}