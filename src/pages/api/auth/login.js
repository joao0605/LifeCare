
import { getUserByEmail, checkUserPassword } from '../../../services/auth'
import {validateUser} from '../../../services/permission'
import { createUserSession } from '../../../database/sessions'


export default async function handler(req, res) {

    try {
        if(req.method === "POST") {
            console.log(req.body)
            const user = await getUserByEmail(req.body.email ?? "");

            const isCorrect = await checkUserPassword(req.body.email ?? "", req.body.password ?? "")
            
            if (isCorrect) {
                //create session
                const userType = await validateUser(req.body.email)
                const token = await createUserSession({userId: user._id, userType: userType})
                console.log(token.insertedId)
                return res.status(200).json({ token: token.insertedId, userType: userType })
            }
        }

        return res.status(403).end()
    } catch (err) {
        console.log(err)
    }
}
