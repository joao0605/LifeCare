import mongoose from "mongoose";

const SellerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    registration: { type: String, required: true },
    birthdate: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true }
},
{
  collection: "seller" 
});


export function getMongooseSellerModel() {
    if (mongoose.modelNames().includes("Seller")) {
        
        return mongoose.models.Seller
    } else {
        return mongoose.model("Seller", SellerSchema, "lifecare")
    }
} 