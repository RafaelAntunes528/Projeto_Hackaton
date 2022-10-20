import { useEffect, useState } from 'react'
import styles from '../../styles/cartoesPagina.module.css'
import { fazPedido } from '../utils/rest'
import Cartoes from './cartoes'
import { MyResponsivePie } from './graficoPie'
import Morador from './morador'
import Tabela, { MyResponsiveCalendar } from './Tabela'
import { useRouter } from "next/router"


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

export default function CartoesPagina(moradores) {

    const router = useRouter()

    const getRes = async () => {
        let resposta = await fazPedido("/api/moradores/", "GET")
        setState(resposta.body)
    }

    useEffect(() => {
        getRes()
    }, [])

    const [state, setState] = useState(Array)


    return (
        <div className={styles.main}>
            <div className={styles.banner}>
                <div className={styles.logo}>
                </div>
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
                    ]} />
                </div>
                <div className={styles.logout}>
                    <button onClick={() => router.push("./login")}>Logout</button>
                </div>
            </div>
            <div className={styles.organizar}>
                <div className={styles.searchContainer}>
                    <input type="text" name="search" placeholder="Search..." className={styles.searchInput} />
                </div>
                <div className={styles.botaoDiv}>
                    <button onClick={() => router.push("./addMorador")} className={styles.botao1}>Adicionar</button>
                    <button onClick={() => router.push("./popUpNotificar")} className={styles.botao}>Notificar</button>
                </div>
            </div>
            <div className={styles.moradores}>
                <div className={styles.moradores1}>
                    {state.map(r => <Morador nomeDaPessoa={r.nome} andar={r.casa} isPago={r.estado} />)}
                </div>
            </div>
        </div>
    )
}