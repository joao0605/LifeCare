const { getMongoCollection } = require("../database/db.js")

const collectionName = "adm"
// Obtém todos os administradores
async function getSellers(req, res) {
    try {


        const collection = await getMongoCollection(collectionName)
        const sellers = await collection.find().toArray()
        
        return res.status(200).json(sellers);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}





export { getSellers }