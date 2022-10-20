import { useEffect, useState } from 'react'
import styles from '../../styles/cartoesPagina.module.css'
import { fazPedido } from '../utils/rest'
import Cartoes from './cartoes'
import { MyResponsivePie } from './graficoPie'
import Morador from './morador'
import Tabela, { MyResponsiveCalendar } from './Tabela'


/* const resposta=[
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

] */

export default function CartoesPagina(moradores){

    const getRes = async () => {
        let resposta = await fazPedido("/api/moradores/", "GET")
        setState(resposta.body)
    }

    useEffect (() => {
        getRes()
     }, []) 

    const [state, setState] = useState(Array)


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
            <div className={styles.moradores}>
                <div className={styles.moradores1}>
                {state.map(r => <Morador nomeDaPessoa={r.nome} andar={r.casa} isPago={r.estado}/>)}
                </div>
            </div>
        </div>
    )
}