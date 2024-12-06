import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from './Main'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Hackathon-Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head >
      <Main />
    </div>
  )
}