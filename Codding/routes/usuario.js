const express = require('express')//Estabelece dependência com o express e seu modulador de rotas
const router = express.Router()
const mysql = require('../config/db').pool //Estabelece depencia com a pool de conexões do banco de dados
const bcrypt = require("bcrypt")    //Estabelece dependencia com o bycript


/*CADASTRAR NOVO USUÁRIO*/
router.post('/cadastrar',(req,res,next)=>{ //Inserir Novo Usuário
    mysql.getConnection(async(err,con)=>{//Conectar com MySql
        if(err){//Retorna erro em caso de existir
            res.send({
                error: err
            })
        }
        const salt = await bcrypt.genSalt(5)//Define a "raiz" para criar a criptografia
        const senhaCrip = await bcrypt.hash(req.body.senhaUsuario,salt)//Criptografa a senha
        con.query( 
            'INSERT INTO usuarios (nomeUsuario, senhaUsuario) VALUES (?,?)',//Insere na Base de Dados os valores que serão enviados pelo POST
            [req.body.nomeUsuario, senhaCrip],
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


/*LISTAR USUÁRIOS POR IDUSUÁRIO*/
router.get('/listar',(req,res,next)=>{
    mysql.getConnection((err,con)=>{
        if(err){    //Tratativa de Erro
            res.send({
                error: err
            })
        }mysql.query(
            'SELECT * FROM usuarios where idUsuario = (?)',//Busca na tabela usuarios com base na query idUsuario
            [req.query.idUsuario],
            (err,result,fields)=>{
                if(err){    //Tratativa de Erro
                    res.send({
                        error: err
                    })
                }else if(!result[0]){
                    res.send("Não encontrado")
                }else{
                    res.send(result[0])
                } //Retorna o resultado da busca
        })
    })
})






module.exports= router//Exporta as rotas