<h1 align="center">
  💾 API do JSHunt
</h1>


## :rocket: Sobre o projeto

Esta é uma API para cadastro de repositórios do GitHub, ela foi desenvolvido durante o curso Starter NodeJS da Rocketseat para utilização posteriormente no sistema web com ReactJS e no aplicativo mobile com React Native.

Por meio dela são efetuados os cadastros de cada um dos repositórios contendo as seguintes informações: 
- Título do repositório;
- Breve descrição sobre o conteúdo dele;
- Link do repositório no GitHub.

E todos os dados são cadastrados, por meio da API, no banco de dados MongoDB.

## :computer: Tecnologias usadas:

- `ExpressJS`: Utilizado para a criação das rotas da aplicação;

- `MongoDB`: Base de dados da aplicação;

- `Mongoose`: Para modelar as informações da nossa aplicação para o MongoDB;

- `Mongoose-paginate`: Este plugin foi utilizado para separar em páginas os repositórios cadastrados;

- `CORS`: Para permitir que alguns recursos restritos da aplicação sejam utilizados na versão web.
