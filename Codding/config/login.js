const auth = require('basic-auth')//Estabelece dependencia com o basic auth
const mysql = require('./db').pool
const bcrypt = require("bcrypt")
const salt = require("../routes/usuario")//Estabelece depencia com a pool de conexões do banco de dados


const basicAuth = (req,res,next)=>{
    console.log('Autenticação funcionando')
    const user = auth(req)
    const sql = 'SELECT * FROM usuarios'

    mysql.query(sql,async(err,result,fields)=>{
        if(user === undefined){//Caso a autênticação não esteja ativada
            res.status(401).send('Insira os dados de Autenticação')
        }

            for(let i = 0;i<result.length;i++){//Procura em todos os usuários uma conta correspondente à senha e usuário passados
                const nome = result[i].nomeUsuario
                const senha = result[i].senhaUsuario
                let comparacao = await bcrypt.compare(user.pass,senha)//Bcrypt compara o arquivo passado com o criptografado
                if(comparacao&&user.name==nome){//Caso esteja correto o usuário pode continuar a request
                    next()
                    break
                }else if(user.name==nome&&!comparacao){
                    res.status(403).send("Acesso Negado")
                }else if(i==result.length){//Caso nenhuma senha e usuário estejam corretas o sistema retorna que o acesso foi negado
                    res.status(403).send('Acesso Negado')
                    break
                }                
                }
    
    })
}


module.exports = basicAuth//Exporta a função de Autorização