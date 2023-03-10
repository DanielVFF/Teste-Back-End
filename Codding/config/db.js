const mysql = require('mysql2');    //estabelece a dependencia com a biblioteca mysql2

let pool = mysql.createPool({   //cria um pool de conexões
        "connectionLimit": 100,
        'user': 'root',
        'password': 'DanielVitor22!',
        'database': 'niceplanet',
        'host': 'localhost',
        'port': 3306    //porta padrão do MySql
    }
)

pool.getConnection((err,con)=>{ //testa a conexão com o banco
    if(err){
        console.log({   //retorna o erro caso ocorra
            error : err
        })
    }   console.log("Banco de Dados Rodando")   //mensagem de sucesso ao estabelecer a conexão com o banco de dados
})

exports.pool = pool     //exporta a pool de conexões