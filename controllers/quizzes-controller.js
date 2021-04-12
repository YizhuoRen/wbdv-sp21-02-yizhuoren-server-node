module.exports = (app) => {
  const quizService = require('../services/quizzes/quizzes-service')

  const findAllQuizzes = (req, res) => {
    const quizzes = quizService.findAllQuizzes();
    res.send(quizzes)
  }
  const findQuizById = (req, res) => {
    const quiz = quizService.findQuizById(req.params.quizId);
    res.send(quiz)
  }

  app.get('/api/quizzes', findAllQuizzes);

  app.get('/api/quizzes/:quizId', findQuizById);

}