import Head from 'next/head'
import Image from 'next/image'
import CartoesPagina from '../src/components/cartoesPagina'
import Login from '../src/components/login'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <CartoesPagina></CartoesPagina>
    </div>
  )
}
