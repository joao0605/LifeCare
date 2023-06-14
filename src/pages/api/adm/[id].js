import { getAdmData } from "@/controllers/AdmController";

export default async function (req, res) {

    if( req.method ==="GET"){
        getAdmData(req, res)
    } 
    
}