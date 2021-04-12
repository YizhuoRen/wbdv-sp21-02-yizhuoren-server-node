
const questions = require('./questions.json')

const findQuestionsForQuiz = (quizId) => {
  return (
      questions.filter((question) => {
        return question.quizId === quizId
      })
  )
}

const createQuestion = () => {}
const createQuestionForQuiz = (quizId) => {}

const findAllQuestions = () => {
  return questions;
}
const findQuestionById = (questionId) => {
  return (
      questions.find((question) => {
        return question._id === questionId;
      })
  )
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

