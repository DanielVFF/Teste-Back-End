const express = require('express')//Estabelece dependência com o express e seu modulador de rotas
const router = express.Router()
const mysql = require('../config/db').pool//Estabelece depencia com a pool de conexões do banco de dados



/*CADASTRAR NOVO PRODUTOR*/
router.post('/cadastrar',(req,res,next)=>{ //Inserir Novo Usuário        
            mysql.getConnection((err,con)=>{//Conectar com MySql
                if(err){//Retorna erro em caso de existir
                    res.send({
                        error: err
                    })
                }
                con.query( 
                    'INSERT INTO produtores (nomeProdutor, cpfProdutor, idUsuario) VALUES (?,?,?)',//Insere na Base de Dados os valores que serão enviados pelo POST
                    [req.body.nomeProdutor, req.body.cpfProdutor, req.body.idUsuario],
                    (err,result,fields)=>{
                        con.release()
                        if(err){//Tratativa de Erro
                            return res.status(500).send({
                                error: err,
                                response: result
                                })
                        }
                        res.status(201).send({//Retorna mensagem positiva e o id Inserido
                            mensagem: "Produtor Cadastrado",
                            idProdutor: result
                        })
                    }
                )
            })     
})



/*LISTAR PRODUTORES POR IDPRODUTOR*/
router.get('/listar',(req,res,next)=>{
    mysql.getConnection((err,con)=>{
        if(err){    //Tratativa de Erro
            res.send({
                error: err
            })
        }mysql.query(
            'SELECT * FROM produtores where idProdutor = (?)',//Busca na tabela produtores com base na query idProdutor
            [req.query.idProdutor],
            (err,result,fields)=>{
                if(err){    //Tratativa de Erro
                    res.send({
                        error: err
                    })
                }
                res.send(result[0]) //Retorna o resultado da Busca
        })
    })
})


module.exports = router//Exporta as rotas