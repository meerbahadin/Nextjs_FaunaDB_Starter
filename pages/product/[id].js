import { useRouter } from 'next/router';
import Head from 'next/head';
import useSWR from 'swr'
import fetcher from '../../utils/fetch';

//components
import Loading from '../../components/Loading';


const Product = () => {
    const router = useRouter();
    const { id } = router.query;

    const { data, error } = useSWR(`/api/products/${id}`, fetcher);

    if (!data) return <Loading />

    let { product } = data;
    console.log(product);


    return (
        <main>
            <Head>
                <title>{product.data.name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <button onClick={router.back}>Back</button>
            <div>
                <h1>{product.data.name}</h1>
                <p>{product.data.description}</p>
                <span>{product.data.price} $</span>
                <br />
                <span>{product.data.quantity} in Stock</span>
            </div>
        </main>
    )
}

export default Product;
