import connectDB from '../database/db-mongoose'
import {getMongooseSellerModel} from '../models/Seller.js';



// Obtém todos os sellers
async function getSellers(req, res) {
    try {
        connectDB()
        const Seller = getMongooseSellerModel();
        const sellers = await Seller.find().exec();
        
        return res.json(sellers);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


export { getSellers }