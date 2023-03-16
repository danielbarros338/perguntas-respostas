# PERGUNTAS E RESPOSTAS
---

A função desse projeto é ser um site que remete ao ask.fm e o yahoo respostas, onde usuários podem postar anônimamente perguntas e receber respostas também anônimamente.

Foi utilizado My SQL como base de dados para o projeto e Node JS para o Back End, utilizando o Express framework e o Sequelize como ORM.
Também foi utilizado o EJS como Template Engine para a construção do Front End.

O projeto é bem simples, consiste em inserir e ler dados do banco de dados, sendo sua proposta o estudo das tecnologias utilizadas.

Utilizei o padrão MVC para arquitetura do projeto.

---
### ROTAS
  - "/"
    - Retorna a página principal com todas as perguntas, ordenadas da mais recente para a mais antiga.

  - "/perguntar"
    - Retorna a página para realizar a pergunta.

  - "/pergunta/:id"
    - Retorna uma página com a pergunta do id enviado como parâmetro de rota. Retorna também todas as respostas associadas
      a essa pergunta.
      - Requisição:
      ```javascript
        {
          id: "Id da pergunta do tipo number"
        }
      ```

  - "/salvar-pergunta"
    - Salva a pergunta enviada no banco de dados.
    - Requisição:
      ```javascript
        {
          title: "Título da pergunta",
          description: "Descrição da pergunta"
        }
      ```

  - "/responder"
    - Salva a resposta de uma pergunta baseada em seu id e redireciona para a pergunta, já exibindo a nova resposta.
    - Requisição:
      ```javascript
        {
          answerBody: "Corpo da resposta",
          questionId: "Id da pergunta do tipo number"
        }
      ```