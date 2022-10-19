import styles from '../../styles/MainPage.module.css'
import { MyResponsivePie } from './graficoPie'
import { MyResponsiveLine } from './Tabela'
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
                
                {/* <MyResponsiveLine data={[
  {
    "id": "japan",
    "color": "hsl(201, 100%, 61%)",
    "data": [
      {
        "x": 1,
        "y": 0
      },
      {
        "x": 10,
        "y": 700
      },
      {
        "x": 20,
        "y": 1500
      },
      {
        "x": 33,
        "y": 2500
      },
    ]
  }]
}></MyResponsiveLine> */}
            </div>
            <div className={styles.conduminios}>

            </div>

        </div>
    )
}