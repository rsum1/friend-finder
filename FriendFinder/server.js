const express = require("express")
const { join } = require("path")

var app = express()

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Static directory
app.use(express.static(join(__dirname, 'app', 'public')))


require(join(__dirname, 'app', 'routing', 'apiRoutes'))(app)
require(join(__dirname, 'app', 'routing', 'htmlRoutes'))(app)


app.listen(3000)