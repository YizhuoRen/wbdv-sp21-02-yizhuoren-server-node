const quizzes = require('./quizzes.json')
const quizzesModel = require("../../models/quizzes/quizzes-model")
const quizzesDao = require('../../daos/quizzes-dao')

const findAllQuizzes = () => {
   return quizzesDao.findAllQuizzes()
}

const findQuizById = (quizId) => {
   // return quizzesModel.find({_id: quizId})
  return quizzesDao.findQuizById(quizId)
  
  // return quizzes.find((quiz) => {
  //   return quiz._id === quizId
  // })
}


const createQuiz = () => {}
const updateQuiz = () => {}
const deleteQuiz = () => {}

module.exports = {
  createQuiz,
  findAllQuizzes,
  findQuizById,
  updateQuiz,
  deleteQuiz
}