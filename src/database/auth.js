const { ObjectId } = require("mongodb")
const { getMongoCollection } = require("./db")
import {validateUser} from '../services/permission'


    async function findUserAuthByEmail(email) {

        console.log(email)

        const collectionName = await validateUser(email)

        console.log("aqui nulo?", collectionName)

        const collection = await getMongoCollection(collectionName)

        return collection.findOne({ email: email })
    }
    async function findUserAuth(uid) {

        const collectionName = await validateUser(email)
        const collection = await getMongoCollection(collectionName)
        return collection.findOne({ _id: new ObjectId(uid) })
    }
    async function createUserAuth(data) {
        //ver depois
        const collection = await getMongoCollection(collectionName)
        return collection.insertOne(data)
    }

    module.exports = {
        createUserAuth,
        findUserAuth,
        findUserAuthByEmail
    }