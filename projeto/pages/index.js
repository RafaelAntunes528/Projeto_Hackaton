import Head from 'next/head'
import Image from 'next/image'
import Cartões from '../src/components/cartões'
import CartõesPagina from '../src/components/cartõesPagina'
import Login from '../src/components/login'
import styles from '../styles/Home.module.css'
import HomePage from '../src/components/mainPage'
import Morador from '../src/components/morador'

export default function Home() {
  return (
    <div className={styles.container}>
      <CartõesPagina></CartõesPagina>
    </div>
  )
}
