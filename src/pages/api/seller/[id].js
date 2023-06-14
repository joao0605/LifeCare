import { getSellersData } from "@/controllers/SellerController"

export default async function (req, res) {

    if( req.method ==="GET"){
        getSellersData(req, res)
    } 
    
}