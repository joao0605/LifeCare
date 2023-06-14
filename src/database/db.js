const { MongoClient } = require('mongodb')


const URL = "mongodb+srv://quaresmaamanda4:5WUNXnIPT1FPv5MN@mandy.fhynimk.mongodb.net/" ?? "mongodb://127.0.0.1:27017"
const DB_NAME = "lifecare"

let client
async function connectToMongo() {
    try {
        if (!client) {
            client = await MongoClient.connect(URL)
            console.log("conectado ao banco de dados")
        }
        return client;
    } catch (err) {
        console.log(err)
    }
}

async function getMongoCollection(collectionName) {
    const client = await connectToMongo()
    const data = await client.db(DB_NAME).collection(collectionName)
    return data
}

module.exports = { getMongoCollection }