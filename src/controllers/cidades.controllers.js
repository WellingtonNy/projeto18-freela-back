import { db } from '../database/database.connection.js';


export async function getCidades(req, res) {

    try {

        const lista = await db.query("SELECT nome FROM cidades;")

        res.send(lista.rows)

    } catch (err) {

        res.status(500).send(err.message)

    }
}