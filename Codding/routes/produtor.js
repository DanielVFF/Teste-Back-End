const express = require('express')
const router = express.Router()
const mysql = require('../config/db').pool



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
                            idProdutor: result.insertId
                        })
                    }
                )
            })     
})



/*LISTAR PRODUTORES POR IDPRODUTOR*/
router.get('/listar',(req,res,next)=>{
    mysql.getConnection((err,con)=>{
        if(err){
            res.send({
                error: err
            })
        }mysql.query(
            'SELECT * FROM produtores where idProdutor = (?)',
            [req.body.idProdutor],
            (err,result,fields)=>{
                if(err){
                    res.send({
                        error: err
                    })
                }
            if(true===false){
                res.send('Insira os dados novamente')
            }res.send(result)
        })

    })
})

/*
//ALTERAR NOME DO PRODUTOR E CPF DO PRODUTOR POR IDPRODUTOR
router.patch('/alterar',(req,res,next) =>{
    mysql.getConnection((err,con)=>{
        if(err){
            res.send({
                error : err
            })
        }else if(req.body.idProdutor){
            res.send({
                error : "insira o idProdutor"
            })
        }
        con.query(
            "UPDATE produtores SET nomeProdutor = (?),cpfProdutor = (?) WHERE idProdutor = (?)",
            [req.body.nomeProdutor, req.body.cpfProdutor, req.body.idProdutor],
            (err,result,fields)=>{
                if(err){
                    res.send({
                        error : err
                    })
                }
                res.send({
                    mensagem : "Dados do Produtor Alterados",
                    novoNomeProdutor : req.body.nomeProdutor,
                    novoCpfProdutor: req.body.cpfProdutor
                })//INSERIR STATUS!!!!!!!!!!!!!!!!!
            })
    })
})*/


module.exports = router