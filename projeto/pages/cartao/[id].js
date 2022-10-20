// import Head from 'next/head'
// import Image from 'next/image'
// import Login from '../src/components/login'
// import styles from '../styles/Home.module.css'
// import HomePage from '../src/components/mainPage'
// import PopUpCriarCon from '../src/components/popUpCriarCon'
// import Morador from '../src/components/morador'
// import PopUpMorador from '../src/components/popUpMorador'
import { useRouter } from 'next/router'
import CartoesPagina from '../../src/components/cartoesPagina'

//Descobrir como usar o useRouter para encontrar o id no link
//Fazer um endpoint que recebe um id e retrona o cartao desse id
export default function Home() {
    const router = useRouter()
  return (
    <div >
        <CartoesPagina id={router.query.id}></CartoesPagina>
    </div>
  )
}
