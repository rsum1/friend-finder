const { friends, surveyQuestions } = require('../data')

module.exports = (app) => {
  app.get('/api/friends', (req, res) => {
    res.json(friends)
  })
  
  // A GET route for getting the questions
  app.get(`/api/questions`, (req, res) => {
    res.json(surveyQuestions)
  })

  // A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  app.post(`/api/friends`, (req, res) => {
    console.log(req.body)
  })
}