import { getClientsForm } from "@/controllers/FormController"

export default async function (req, res) {

    if( req.method ==="GET"){
        getClientsForm(req, res)
    } 
    
}