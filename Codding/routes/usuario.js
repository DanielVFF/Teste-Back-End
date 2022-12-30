const express = require('express')
const router = express.Router()
const mysql = require('../config/db').pool


/*CADASTRAR NOVO USUÁRIO*/
router.post('/cadastrar',(req,res,next)=>{ //Inserir Novo Usuário
    mysql.getConnection((err,con)=>{//Conectar com MySql
        if(err){//Retorna erro em caso de existir
            res.send({
                error: err
            })
        }
        con.query( 
            'INSERT INTO usuarios (nomeUsuario, senhaUsuario) VALUES (?,?)',//Insere na Base de Dados os valores que serão enviados pelo POST
            [req.body.nomeUsuario, req.body.senhaUsuario],
            (err,result,fields)=>{
                con.release()
                if(err){//Tratativa de Erro
                    return res.status(500).send({
                        error: err,
                        response: result
                        })
                }
                res.status(201).send({//Retorna mensagem positiva e o id Inserido
                    mensagem: "Usuário Criado",
                    idUsuario: result.insertId
                })
            }
        )
    })     
})


module.exports= router