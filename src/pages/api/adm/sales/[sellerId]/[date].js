import { getDailyForm } from "@/controllers/FormController"

export default async function (req, res) {

    if( req.method ==="GET"){
        getDailyForm(req, res)
    } 
    
}