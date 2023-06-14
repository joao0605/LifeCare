import { deleteForms } from "@/controllers/FormController"



export default async function (req, res) {

    if( req.method ==="DELETE"){
        deleteForms(req, res)
    } 
    
}