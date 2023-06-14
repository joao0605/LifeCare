const { getMongoCollection } = require("../database/db.js")
import { ObjectId } from "mongodb"

const collectionName = "seller"

// Obtém todos os sellers
async function getSellers(req, res) {
    try {


        const collection = await getMongoCollection(collectionName)
        const sellers = await collection.find().toArray()
        
        return res.status(200).json(sellers);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function getSellersData(req, res) {
    try {

        const id = req.query.id
        const collection = await getMongoCollection(collectionName)
        const seller = await collection.findOne({ _id: new ObjectId(id) });
        return res.status(200).json(seller);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}





export { getSellers, getSellersData }