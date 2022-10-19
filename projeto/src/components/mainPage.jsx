import { resolveHref } from 'next/dist/shared/lib/router/router'
import { useRouter } from 'next/router'
import { startTransition, useEffect, useState } from 'react'
import styles from '../../styles/MainPage.module.css'
import { fazPedido } from '../utils/rest'
import Cartoes from './cartoes'
import { MyResponsivePie } from './graficoPie'


const res = [
    {
        nome: "Rafael",
        distrito: "Lisboa",
        total: 1234,
        data: "12/05",
        cor: true
    },
    {
        nome: "Rafael",
        distrito: "Lisboa",
        total: 1234,
        data: "12/05",
        cor: true
    },
    {
        nome: "Rafael",
        distrito: "Lisboa",
        total: 1234,
        data: "12/05",
        cor: true
    },
    {
        nome: "Rafael",
        distrito: "Lisboa",
        total: 1234,
        data: "12/05",
        cor: true
    },
    {
        nome: "Rafael",
        distrito: "Lisboa",
        total: 1234,
        data: "12/05",
        cor: true
    },
    {
        nome: "Rafael",
        distrito: "Lisboa",
        total: 1234,
        data: "12/05",
        cor: true
    },
    {
        nome: "Rafael",
        distrito: "Lisboa",
        total: 1234,
        data: "12/05",
        cor: true
    },
    {
        nome: "Rafael",
        distrito: "Lisboa",
        total: 1234,
        data: "12/05",
        cor: true
    },
    {
        nome: "Rafael",
        distrito: "Lisboa",
        total: 1234,
        data: "12/05",
        cor: true
    },]

export default function HomePage(){

    //dentro de um useEffect
    // let resposta = fazPedido("/api/", "GET")
    
    
    
    useEffect (() => {
        return resposta = fazPedido("/api/", "GET")
    })

    let resposta = useEffect()
    console.log(resposta)
    
    const [state, setState] = useState(resposta)

      
    const router = useRouter()
    return(
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
                    ]}/>
                </div>
                <div className={styles.logout}>
                    <button onClick={()=> router.push("./login")}>Logout</button>
                </div>
            </div>


            <div className={styles.searchContainer}>
                <input type="text" name="search" placeholder="Search..." className={styles.searchInput}/>
                <button>Adicionar novo</button>
            </div>

            <div className={styles.conduminios}>
            {resposta.map(r => <Cartoes nome={r.nome} distrito={r.distrito} total={r.total} data={r.data} cor={r.cor}/>)}
            </div>
            
            

        </div>
    )
}