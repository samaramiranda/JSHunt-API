const express = require ('express'); //importando o express
const cors = require('cors'); //importando cors para permitir todo tipo de  acesso a aplicação
const mongoose = require('mongoose');
const requireDir = require('require-dir'); //importando a biblioteca require-dir (faz o require em um diretorio em todos os arquivos automaticamente)

//INICIANDO O APP
const app = express(); //executado a função do express
app.use(express.json()); //permitindo que eu envie dados para a aplicação no formato de json
app.use(cors()); //permitindo utilizar o cors

//INICIANDO O DATABASE
mongoose.connect('mongodb://localhost:27017/nodeapi', 
  { useNewUrlParser:true, useUnifiedTopology: true }
);
//registrando o model. Tem que ser abaixo do DB pq ele precisa já estar conectado com o DB
requireDir('./src/models');

//*ROTAS
//Toda vez que eu receber uma requisição a partir do arquivo api eu mando a requisição para as rotas
app.use("/api", require('./src/routes')); //use recebe todo tipo de requisição (get, post, put...)

app.listen(3001); //defininando qual a porta do navegador a aplicação deve ouvir