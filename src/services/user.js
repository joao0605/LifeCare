/* import jwt from 'jsonwebtoken'
const { getMongoCollection } = require("../database/db")


//adicionar banco de dados aqui depois
let users = []

//chave gerada no arquivo .env.local
const SECRET = process.env.JWT_SECRET

function createToken(userData){
    // retorna o token
    return jwt.sign({email: userData.email, name: userData.name}, SECRET)
}

function readToken(token){

    try {
        //verifica se o token é valido e se foi criado usando a chave secreta, criada no SECRET
        //se tentarem usar um token gerado com outra chave, gera um erro
        return jwt.verify(token, SECRET)
    } catch (err) {
        throw new Error('Token inválido')
    }

}

export function cadastro(body) {
    const user = users.find(({ email }) => email === body.email)
    if (user) throw new Error("Usuário já cadastrado")

    users.push(body)

    //retorna o token criado
    const token = createToken(body)
    return token
}

export async function login(email, password) {
    //acessar colecao no banco de dados
    try {
        const users = await getMongoCollection("teste")
        console.log(users)
        const user = await users.findOne({email: email})
        if (!user) throw new Error("Usuário não encontrado")
        if(user.password !== password) throw new Error("Senha incorreta")
        
    } catch (error) {
        console.log(error)
    }
    const token = createToken({email, password})

    return token

    //retorna o token criado

}


export function verifica(token){
    return readToken(token)
}

*/