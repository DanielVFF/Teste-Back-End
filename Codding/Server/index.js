const port = 3000;  //Define a porta de entrada
const usuario = require('../routes/usuario.js') //importa o código para as rotas de usuário,produtor e propriedade, respectivamente
const produtor = require('../routes/produtor.js')   //
const propriedade = require('../routes/propriedade.js') //
const app = require('../config/config.js')  //importa algumas dependências e configurações do Body Parser,Basic-Auth e Swagger respectivamente
const basicAuth = require('../config/login.js')//importa a function de autenticação da aba login
const swagger = require('swagger-ui-express')
const swaggerDocument = require('../../swagger.json')


app.use('/rotas', swagger.serve, swagger.setup(swaggerDocument))//Estabelece o uso do SWAGGER para acessar as rotas
app.use(basicAuth)  //Estabelece o uso do Basic-Auth para realizar a autênticação, DEVE SER COLOCADO APÓS O SWAGGER PARA GARANTIR QUE NÃO NECESSITE DE SENHA PARA ACESSAR AS ROTAS
app.use('/propriedade', propriedade)    //estabelece o uso das rotas de propriedade,usuario e pordutor, respectivamente
app.use('/usuario', usuario)    //
app.use('/produtor', produtor)  //

app.listen(port,(err) => {  //liga a porta do servidor na rota pré-definida
    if(err){
        console.log(err)    //retorna o erro ao console caso ocorra
    }else{
        console.log('A porta do servidor é : ' + port)  //mensagem de sucesso ao ligar a porta do servidor
    }
})

