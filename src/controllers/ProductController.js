const mongoose = require('mongoose');

const Product = mongoose.model('Product'); //importando o model da aplicação


//EXPORTANDO MÓDULO COM FUNÇOES
///req significa a requisição que o user tá fazendo ao servidor. 
//Posso pegar do "req" parametros, corpo da requisição, cabeçalho, usuario que ta fazendo, ip, autenticação...
//res significa a resposta que vamos dar pra requisição. Tem todas as informações para devolver uma resposta para o usuário
module.exports = { 
  //LISTAGEM
  async index(req, res) { //assincrono, só executa o return depois do await pronto
    const { page = 1 } = req.query; //usando destruturação. querry é usando para parametros get
    const products = await Product.paginate({}, { page, limit: 10 }); //procurando um product no DB
    //usando o paginate. 1 parametro é para where (filtro) e segundo parametro é a pagina atual e o tamanho
    return res.json(products) //retornando em estrutura json
  },

  //DETALHE DO PRODUTO
  async show(req, res) {
    const product = await Product.findById(req.params.id); //busca pelo ID dentro dos parametros da rota

    return res.json(product);
  },

  //CRIAÇÃO
  async store(req, res) {
    const product = await Product.create(req.body); //estou fazendo uma requisição no body que é onde estão os dados do product

    return res.json(product); //retornando o produto que acabou de ser criado
  },

  //ATUALIZAR O PRODUTO
  async update(req, res) {
    //busco ID que vem dos parametros e vou atualizar ele com o conteudo que vem do req.body
    //o new:true eu digo que o moongose deve retornar o produto atualizado para dentro da cosnt product
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new:true }); 
    return res.json(product); 
  },

  //DELETAR O PRODUTO
  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id); //nao preciso usar const product pq ele só vai deletar

    return res.send(); //retorna uma msg de sucesso sem conteudo
  },
};