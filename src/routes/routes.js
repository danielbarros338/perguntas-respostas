const routeFunctions = require("../controller/routeFunctions");

module.exports = (app) => {
  app.get("/", routeFunctions.sendIndex);
  app.get("/perguntar", routeFunctions.question);
  app.get("/pergunta/:id", routeFunctions.questionId);
  app.post("/salvar-pergunta", routeFunctions.saveQuestion);
  app.post("/responder", routeFunctions.answer)
};
