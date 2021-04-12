const questionService = require('../services/questions/questions-service')

module.exports = (app) => {


  findQuestionsForQuiz = (req, res) => {
    const quizId = req.params.quizId
    const questions  = questionService.findQuestionsForQuiz(quizId);
    res.send(questions)
  }

  findQuestionById = (req, res) => {
    const questionId = req.params.questionId
    const question  = questionService.findQuestionById(questionId);
    res.send(question)
  }

  findAllQuestions = (req, res) => {
    const questions = questionService.findAllQuestions()
    res.send(questions)
  }

  app.get('/api/quizzes/:quizId/questions', findQuestionsForQuiz)
  app.get('/api/quizzes/questions/:questionId', findQuestionById)
  app.get('/api/questions', findAllQuestions)
}