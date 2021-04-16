module.exports = (app) => {
  const questionService = require('../services/questions/questions-service')
  findQuestionsForQuiz = (req, res) => {
    const quizId = req.params.quizId
    questionService.findQuestionsForQuiz(quizId).then((questions) => {
      res.send(questions)
    })
  }

  findQuestionById = (req, res) => {
    const questionId = req.params.questionId
    questionService.findQuestionById(questionId).then((questions) =>
        res.send(question)
    )
  }

  findAllQuestions = (req, res) => {
    questionService.findAllQuestions().then((questions) => {
      res.send(questions)
    })
  }

  app.get('/api/quizzes/:quizId/questions', findQuestionsForQuiz)
  app.get('/api/quizzes/questions/:questionId', findQuestionById)
  app.get('/api/questions', findAllQuestions)
}