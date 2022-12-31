const express = require('express')//Estabelece dependência com o express e seu modulador de rotas
const router = express.Router()
const mysql = require('../config/db').pool//Estabelece depencia com a pool de conexões do banco de dados
const auth = require('basic-auth')//Estabelece dependencia com o basic auth



/*LISTAR PROPRIEDADES POR IDPROPRIEDADE*/
router.get('/listar',(req,res,next)=>{
    mysql.getConnection((err,con)=>{
        if(err){
            res.send({
                error: err
            })
        }mysql.query(
            'SELECT * FROM propriedades where idPropriedade = (?)',
            [req.query.idPropriedade],
            (err,result,fields)=>{
            if(err){    //Retorna o Erro
                res.send({
                    error: err
                })
            }console.log(req.query.idPropriedade)
            res.send(result[0])  //Retorna o resultado da busca
            })

    })
})






/*CADASTRAR NOVA PROPRIEDADE*/
router.post('/cadastrar',(req,res,next)=>{ //Inserir Nova Propriedade
    const user = auth(req)
    mysql.getConnection((err,con)=>{//Conectar com MySql
        if(err){//Retorna erro em caso de existir
            res.send({
                error: err
            })
        }
        con.query('SELECT idUsuario FROM usuarios WHERE nomeUsuario = (?)',
                [user.name],(err,result,fields)=>{
                    con.release()
                    for(let i = 0;i<result.length;i++){
                    if(result[0].idUsuario!==undefined){
                            const idUsuario = result[0].idUsuario
                            con.query( 
                                'INSERT INTO propriedades (nomePropriedade, cadastroRural, idProdutor, idUsuario) VALUES (?,?,?,?)',//Insere na Base de Dados os valores que serão enviados pelo POST
                                [req.body.nomePropriedade, req.body.cadastroRural, req.body.idProdutor, idUsuario],
                                (err,result,fields)=>{
                                    con.release()
                                    if(err){//Tratativa de Erro
                                        return res.status(500).send({
                                            error: err,
                                            response: result
                                            })
                                    }
                                    res.status(201).send({//Retorna mensagem positiva e o id Inserido
                                        mensagem: "Propriedade Cadastrado",
                                        idPropriedade: result.insertId
                                    })
                                }
                            )
                        }
                    }
                }
        )
    })     
})


module.exports = router//Exporta as rotas