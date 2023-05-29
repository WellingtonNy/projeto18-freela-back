import { db } from '../database/database.connection.js';


export async function getVoo(req, res) {
    const {cidade} = req.body

    try {

        const lista = await db.query(`SELECT * FROM voo WHERE cidade=$1;`,[cidade])

        res.send(lista.rows)

    } catch (err) {

        res.status(500).send(err.message)

    }
    
}
