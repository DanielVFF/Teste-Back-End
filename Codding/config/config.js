const bodyParser = require('body-parser');//estabelece as dependencias ao body-parser e ao express, respectivamente
const express = require('express')
const app = express();
app.use(bodyParser.urlencoded({extendended: false}))//Apenas Dados Simples
app.use(bodyParser.json())


module.exports= app //exporta o app