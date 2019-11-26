const { join } = require('path')

module.exports = (app) => {
  app.get('/survey', (req, res) => {
    console.log('get kinda works')
    res.sendFile(join(__dirname, '../public/survey.html'))
  })
  //catch-all route that returns user to homepage
  app.get('*', (req, res) => {
    console.log('return home works')
    res.sendFile(join(__dirname, '../public/home.html'))
  })

}