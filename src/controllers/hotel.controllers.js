import { db } from '../database/database.connection.js';


export async function getHotel(req, res) {
    const {cidade} = req.headers

    try {

        const lista = await db.query(`SELECT hotel.*, ARRAY_AGG(fotos.url) AS fotos
        FROM hotel
        LEFT JOIN fotos ON hotel.fotos = fotos.id
        WHERE hotel.cidade = $1
        GROUP BY hotel.id;`,[cidade])

        res.send(lista.rows)

    } catch (err) {

        res.status(500).send(err.message)

    }
}
