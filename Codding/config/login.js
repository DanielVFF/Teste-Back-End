const auth = require('basic-auth')
const compare = require('tsscmp')

const basicAuth = (req,res,next)=>{
    console.log('Autenticação funcionando')
    const user = auth(req)
    const username = '123'
    const password = '123'

    
    if(user === undefined){
        res.send('Insira os dados de Autenticação')
    }else if(user.name===username&&user.pass===password){
        next()
    }else{(
        res.status(401).send('Acesso Negado')
        )
    }
}
module.exports = basicAuth