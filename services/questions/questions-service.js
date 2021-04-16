const questionsDao = require("../../daos/questions-dao")
const questions = require('./questions.json')
const questionsModel = require("../../models/questions/questions-model")

const findQuestionsForQuiz = (quizId) => {
  return questionsDao.findQuestionsForQuiz(quizId)
}

const createQuestion = () => {}
const createQuestionForQuiz = (quizId) => {}

const findAllQuestions = () => {
  return questionsDao.findAllQuestions()
}
const findQuestionById = (questionId) => {
 return questionsDao.findQuestionById(questionId)
}
const updateQuestion = () => {}
const deleteQuestion = () => {}

module.exports = {
  findQuestionsForQuiz,
  createQuestion,
  createQuestionForQuiz,
  findAllQuestions,
  findQuestionById,
  updateQuestion,
  deleteQuestion
}

