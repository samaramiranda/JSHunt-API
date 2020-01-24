const express = require('express');
const routes = express.Router(); //criando as rotas
const ProductController = require('./controllers/ProductController')

//*ROTAS 
//(depois do . é o tipo da rota (no caso get))
//se eu colocar /products na url ele retorna os products cadastrados
//listo os produtos
routes.get("/products", ProductController.index); //chamando o método index do pctcontroller que lista tudo que está cadastrado

//mostro um produto
routes.get('/products/:id', ProductController.show); //para mostrar apenas um produto

//crio um produto
routes.post("/products", ProductController.store); //post é sempre usado para criar alguma coisa no servidor

//atualizo um produto
routes.put("/products/:id", ProductController.update); 

//deleto um produto
routes.delete("/products/:id", ProductController.destroy); 

module.exports = routes; //exportando as rotas