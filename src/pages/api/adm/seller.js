import { getSellers } from "@/controllers/SellerController";



export default async function (req, res) {

    if( req.method ==="GET"){
        getSellers(req, res)
    } 
    
}