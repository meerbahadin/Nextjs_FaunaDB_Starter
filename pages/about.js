import { route } from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router';
import Head from 'next/head';


const about = () => {
    const router = useRouter();
    return (
        <main>
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <button onClick={router.back}>Back</button>
            <h1>About Nextjs</h1>
            <p className="card">
                Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.
            </p>
            <h1>About FaunaDb</h1>
            <p className="card">
                FaunaDB is a distributed, strongly consistent OLTP NoSQL database that is ACID compliant and offers a multi-model interface. It has an active-active architecture and can span clouds as well as continents. FaunaDB supports document, relational, graph, and temporal data sets from a single query.
            </p>
        </main>
    )
}

export default about
