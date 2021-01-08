import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import fetcher from '../utils/fetch';
import Link from 'next/link';

//components
import Loading from '../components/Loading';

export default function Home() {
  const { data, error } = useSWR('/api/products', fetcher);

  if (!data) return <Loading />

  return (
    <div className={styles.container}>
      <Head>
        <title>Next & Fauna Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img width="80" style={{ marginBottom: '50px' }} src="https://img.stackshare.io/service/11751/FuQfC3sh_400x400.jpg" alt="" />
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js & FaunaDB</a>
        </h1>
        <a style={{ marginTop: '20px' }} href="">
          <Link href="/about">About</Link>
        </a>


        <p className={styles.description}>
          <a target="_blank" href="https://fauna.com/">FaunaDB</a> is a new and modern database for modern applications
        </p>

        <div className={styles.grid}>
          {data && data.map(e => <Link href={`/product/${e.ref['@ref'].id}`}>
            <a key={e.ref['@ref'].id} className={styles.card}>
              <h3>{e.data.name}</h3>
              <p>{e.data.description}</p>
            </a>
          </Link>
          )}

        </div>
        <footer className={styles.footer}>
          By Meer Bahadin
      </footer>
      </main>
    </div>
  )
}

// export async function getServerSideProps(context) {
//   // const { client } = await connectToDatabase();

//   // const q= await client.isConnected();


// }

