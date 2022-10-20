import styles from '../../styles/cartoesPagina.module.css'
import Cartoes from './cartoes'
import { MyResponsivePie } from './graficoPie'
import Morador from './morador'
import Tabela, { MyResponsiveCalendar } from './Tabela'


const resposta=[
    {
        nome: "Rafael",
        casa: "RC/D",
        estado: false,
    },
    {
        nome: "António",
        casa: "lixo3",
        estado: true,
    },
    {
        nome: "Vasco",
        casa: "Mansão do Ronaldo",
        estado: true,
    },

]

export default function CartoesPagina(moradores){
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
            <div className={styles.organizar}>
            <div className={styles.searchContainer}>
                <input type="text" name="search" placeholder="Search..." className={styles.searchInput}/>
            </div>
            <div className={styles.botaoDiv}>
            <button className={styles.botao}>Notificar</button>
            </div>
            </div>
            <div className={styles.moradores}>
                <div className={styles.moradores1}>
                {resposta.map(r => <Morador nomeDaPessoa={r.nome} andar={r.casa} isPago={r.estado}/>)}
                </div>
            </div>
        </div>
    )
}