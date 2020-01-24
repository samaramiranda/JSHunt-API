const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

 //*CRIANDO A SCHEEMA: scheema são os campos que o produto pode ter e os tipos de valores que vai salvar
 const ProductScheema = new mongoose.Schema({
   title: {
     type: String,
     required:true, //quer dizer que é campo obrigatório
   },
   description: {
     type: String,
     required: true,
   },
   url: {
     type: String,
     required: true,
   },
   createdAt: {
     type: Date,
     default: Date.now, //se preenche automaticamente com o valor da data do registro atual. Guarda a data de criação de cada produto
   },
  });

  ProductScheema.plugin(mongoosePaginate); //plugin para separa os produtos por paginas
  
  mongoose.model('Product', ProductScheema); //código para registrar um model na aplicação