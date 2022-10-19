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
    
    const getRes = async () => {
        let resposta = await fazPedido("/api/", "GET")
        setState([resposta.body])
    }

   useEffect (() => {
       getRes()
    }, []) 

    
    const [state, setState] = useState(Array)

    console.log(state)

      
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
            {state.map(r => <Cartoes nome={r.body.nome} distrito={r.body.distrito} total={r.body.total} data={r.body.data} cor={r.body.cor}/>)}
            </div>
            
            

        </div>
    )
}