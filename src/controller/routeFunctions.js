const Question = require("./../model/Question.js");
const Answer = require("./../model/Answer.js");

exports.sendIndex = async (req, res) => {
  let questions;

  try {
    // Faz o SELECT dos dados no banco de dados e retorna os valores sem informações adicionais do sequelize,
    // devido ao uso da opção raw: true
    questions = await Question.findAll({ raw: true, order: [["id", "DESC"]] });
  } catch (err) {
    throw new Error(`Error on get questions: ${err.message}`);
  }
  // O método "render", busca os arquivos direto na pasta "views"
  // Esse método recebe dois parâmetros, o primeiro é o arquivo a ser renderizado,
  // o segundo, recebe um objeto com as variáveis que serão usadas no arquivo .ejs
  res.render("index.ejs", { questions });
};

exports.question = (req, res) => {
  res.render("question");
};

exports.saveQuestion = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  // Salva as perguntas
  try {
    await Question.create({
      title,
      description,
    });

    res.redirect("/");
  } catch (err) {
    throw new Error(`Error on insert questions: ${err.message}`);
  }
};

exports.questionId = async (req, res) => {
  const id = req.params.id;

  try {
    const question = await Question.findOne({
      where: { id },
    });

    if (question) {
      const answers = await Answer.findAll({
        where: { questionId: id },
        order: [["id", "DESC"]],
      });

      res.render("getquestion", { question, answers });
    } else {
      res.redirect("/");
    }
  } catch (err) {
    throw new Error(`Error to get question: ${err.message}`);
  }
};

exports.answer = async (req, res) => {
  const answerBody = req.body.answerBody;
  const questionId = req.body.question;

  try {
    await Answer.create({
      answerBody,
      questionId,
    });

    res.redirect(`/pergunta/${questionId}`);
  } catch (err) {
    throw new Error(`Error to set answer: ${err.message}`);
  }
};
