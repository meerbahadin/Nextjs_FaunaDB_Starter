import faunadb from 'faunadb';

const serverClient = new faunadb.Client({
    secret: process.env.DB_KEY,
});

export { serverClient };