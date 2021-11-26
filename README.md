<p align="center">
  <a href="#-sobre"> Sobre </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#️-funcionalidades">Funcionalidades</a>
  <a href="#️-requisitos">Requisitos</a>
  <a href="#-conceitos-utilizados">Conceitos Utilizados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-material-de-apoio">Material de apoio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-baixar">Como baixar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

# 🏷️ Sobre

Esse projeto foi desenvolvido com o objetivo de praticar a criação de apis com maior desacoplamento dos seus módulos, utilizando [prisma.io](https://www.prisma.io/) como ORM.

Nessa aplicação vamos simular um sistema para conectar mentores e mentorados, ou seja pessoas quem queiram transmitir conhecimento para outras pessoas em suas carreiras de forma **totalmente gratuita**.

[Link da API](https://brunossantana-ments.herokuapp.com/)

## ☑️ Funcionalidades
Nossa aplicação possue nas seguintes funcionalidades

### Mentor
- [x] Cadastro de Mentores
- [x] Autenticação de Mentores
- [x] Listagem de Mentores
- [x] Adicionar Menotrado 

### Mentorado
- [x] Cadastro de Mentorados
- [x] Autenticação de Mentorados
- [x] Listagem de Mentorados

## Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

* **suggestion**
Você pode criar uma instancia do postgres com as configurações utilizadas no projeto utilizando o docker, executando o seguinte comando::
```sh
docker run --name postgres-db -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```
Para isso você precisa ter instalado na sua máquina o [docker](https://www.docker.com/)

## 📖  Conceitos Utilizados

Foi utilizado no desenvolvimento da API o pattern `Singleton`, utilizando `NodeJS`, autentificação com JWT, inserindo email do usuário para ser empregado no `middleware` de validação das rotas, de acordo com as permissões. Para padronização do código foi utilizado eslint com style guide Standard.

## 📚 Material de apoio

- [Prisma](prisma.io/)
- [JWT](https://jwt.io)
- [BCrypt](https://www.npmjs.com/package/bcrypt)
- [JsonWebToken](www.npmjs.com/package/jsonwebtoken)

## ⬇️ Como baixar
```bash

    // Clonar repositório
    $ git clone https://github.com/BrunoSSantana/ments

    // Acessar diretório
    $ cd ments

    // Instalar dependências
    $ yarn

    // Iniciar projeto
    $ yarn dev
```
## Documentação
  Para abrir o arquivo de documentaçã o é necessário a instalação do [insomnia](https://insomnia.rest/download). Em seguida é a importação do arquivo como [mostra na documentação](https://docs.insomnia.rest/insomnia/import-export-data).

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](doc/doc-ments.json)

## Author
<a href="https://github.com/BrunoSSantana/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/61945340?s=400&u=882004ebbccf5ae04e55fe4b27a5e704c3a95bab&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Bruno Santana</b></sub></a> <a href="https://github.com/BrunoSSantana/" title="Rocketseat">🚀</a>

Feito com 💜 por Bruno Santana 👋🏽

<!-- ## Acknowledgements -->
## License

Esse projeto está sob licença MIT. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.

[⬆ Voltar ao topo](#-sobre)
