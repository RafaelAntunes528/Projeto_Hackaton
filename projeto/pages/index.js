import Head from 'next/head'
import Image from 'next/image'
import Cartões from '../src/components/cartões'
import CartõesPagina from '../src/components/cartõesPagina'
import Login from '../src/components/login'
import styles from '../styles/Home.module.css'
import HomePage from '../src/components/mainPage'

export default function Home() {
  return (
    <div className={styles.container}>
<<<<<<< HEAD
      <Cartões nome={"man"} total={"fer"} data={"vvf"}></Cartões>
=======
      <HomePage></HomePage>
>>>>>>> e501941501c249ce4d413f47fc8bbd14308b5ed4
    </div>
  )
}
