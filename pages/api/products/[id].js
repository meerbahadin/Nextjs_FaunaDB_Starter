import { query as q } from 'faunadb';
import { serverClient } from '../../../utils/fauna-auth';


export default async (req, res) => {
    try {
        const { id } = req.query;
        const product = await serverClient.query(
            q.Get(q.Ref(q.Collection('products'), id))
        );
        res.json({ product })
    } catch (error) {
        console.error(error);
    }
}