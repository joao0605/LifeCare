import { getSession, getUser, validateSession } from "@/services/auth"
const { getMongoCollection } = require("../database/db")

async function authorizeAdmin(token) {
    const result = await validateSession(token)
    if (!result) {
        return res.status(401).end()
    }
    const session = await getSession(token)
    req.user = await getUser(session.userId)
    if (req.user.role !== "adm") {
        return res.status(403).json({ m: "unauthorized" })
    }
    return
}

async function authorize(token) {
    const result = await validateSession(token)
    if (!result) {
        return res.status(401).end()
    }
    const session = await getSession(token)
    req.user = await getUser(session.userId)
    if (req.user.role !== "seller") {
        return res.status(403).json({ m: "unauthorized" })
    }
    return
}


const adm = "adm"
const seller = "seller"

async function validateUser(email) {
    const collectionAdm = await getMongoCollection(adm);
    const collectionSeller = await getMongoCollection(seller);
  
    const admCount = await collectionAdm.countDocuments({ email: email });
    const sellerCount = await collectionSeller.countDocuments({ email: email });
  
    if (admCount > 0) {
      console.log("é adm");
      return adm;
    } else if (sellerCount > 0) {
      console.log("é seller");
      return seller;
    }
  
    return null;
  }

module.exports = {
    authorize, 
    authorizeAdmin, 
    validateUser
}