const { getMongoCollection } = require("../database/db.js")

const collectionName = "form"

// Obtém as chamadas por vendedor
async function getCalls(req, res) {
    try {

        const sellerId = req.query.sellerId
        console.log(sellerId)
        const collection = await getMongoCollection(collectionName) 
        const sellers = await collection.find({ sellerId: sellerId }).toArray()
        
        return res.status(200).json(sellers);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


// Obtém as vendas concretizadas
async function getSales(req, res) {
    try {

        const sellerId = req.query.sellerId
        console.log(sellerId)
        const collection = await getMongoCollection(collectionName) 
        const sellers = await collection.find({ sellerId: sellerId }).toArray()
        const sales = await sellers.find({ salesConclusion: true }).toArray()

        return res.status(200).json(sales);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Ou
// Obtém as vendas concretizadas
async function getSales(req, res) {
    try {
      const sellerId = req.query.sellerId;
      const collection = await getMongoCollection(collectionName);
  
      const sellers = await collection.find({ sellerId: sellerId }).toArray();
      const sales = await collection.find({ sellerId: sellerId, salesConclusion: true }).toArray();
  
      return res.status(200).json(sales);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
    

export {getCalls, getSales}