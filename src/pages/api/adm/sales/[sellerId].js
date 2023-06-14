import { getSales } from "@/controllers/FormController";

export default async function (req, res) {

    if( req.method ==="GET"){
        getSales(req, res)
    } 
    
}