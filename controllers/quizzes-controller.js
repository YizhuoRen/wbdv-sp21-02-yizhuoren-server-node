module.exports = (app) => {
  const quizService = require('../services/quizzes/quizzes-service')

  const findAllQuizzes = (req, res) => {
    // const quizzes = quizService.findAllQuizzes();
    quizService.findAllQuizzes().then((quizzes) => {
      res.send(quizzes)
    })
  }

  const findQuizById = (req, res) => {
    quizService.findQuizById(req.params.quizId).then((quiz) => {
      res.send(quiz)
    })
  }

  app.get('/api/quizzes', findAllQuizzes);

  app.get('/api/quizzes/:quizId', findQuizById);

}