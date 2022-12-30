const port = 3000;  //Define a porta de entrada
const usuario = require('../routes/usuario.js') //importa o código para as rotas de usuário,produtor e propriedade, respectivamente
const produtor = require('../routes/produtor.js')   //
const propriedade = require('../routes/propriedade.js') //
const app = require('../config/config.js')  //importa algumas dependências e configurações do Body Parser
const basicAuth = require('../config/login')

app.use(basicAuth)
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

