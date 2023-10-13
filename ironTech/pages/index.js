import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Iron tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Iron Tech
        </h1>
        <h2 className={styles.subtitle}>
          Conectamos pessoas com o mundo da tecnologia e criamos soluções para um mundo melhor e mais conectado.
        </h2>
      </main>
    </div>
  );
}
