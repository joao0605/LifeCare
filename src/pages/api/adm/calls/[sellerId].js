import { getCalls } from "@/controllers/FormController";

export default async function (req, res) {

    if( req.method ==="GET"){
        getCalls(req, res)
    } 
    
}