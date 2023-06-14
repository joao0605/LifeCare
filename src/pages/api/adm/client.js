import { getClients } from "@/controllers/ClientController";



export default async function (req, res) {

    if( req.method ==="GET"){
        getClients(req, res)
    } 
    
}