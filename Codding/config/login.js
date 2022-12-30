const auth = require('basic-auth')
const mysql = require('../config/db').pool

const basicAuth = (req,res,next)=>{
    console.log('Autenticação funcionando')
    const user = auth(req)
    const sql = 'SELECT * FROM usuarios'
    
    mysql.query(sql,(err,result,fields)=>{
        for(let i = 0;i<result.length;i++){
            const nome = result[i].nomeUsuario
            const senha = result[i].senhaUsuario
                if(user === undefined){
                    res.status(401).send('Insira os dados de Autenticação')
                    break
                }else if(user.name===nome && user.pass===senha){
                    next()
                    break
                }else if(i>result.length){
                    res.status(401).send('Acesso Negado')
                }
        }
    })
}



module.exports = basicAuth