import { validateSession } from "@/services/auth";

export default async function handler(req, res) {

    try {
        if(req.method === "POST") {
            console.log(req.body)
            const session = await validateSession(req.body.token ?? "");

           /* const isCorrect = await checkUserPassword(req.body.email ?? "", req.body.password ?? "")
            
            if (isCorrect) {
                //create session
                const userType = await validateUser(req.body.email)
                const token = await createUserSession({userId: user._id, userType: userType})
                console.log(token.insertedId)
                return res.status(200).json({ token: token.insertedId, userType: userType })
            }
        }*/

        if(session){
            return res.status(200).json({session})
        }
    }
        return res.status(403).end()
    } catch (err) {
        console.log(err)
    }
}