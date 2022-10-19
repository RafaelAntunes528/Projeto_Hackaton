import Head from 'next/head'
import Image from 'next/image'
import Login from '../src/components/login'
import styles from '../styles/Home.module.css'
import HomePage from '../src/components/mainPage'
import PopUpCriarCon from '../src/components/popUpCriarCon'


export default function Home() {
  return (
    <div className={styles.container}>
<<<<<<< HEAD

      <HomePage/>

=======
     <Login></Login>
>>>>>>> d90ddb3c49fb2dfcb00f25459c71c1131ea0fe5f
    </div>
  )
}
