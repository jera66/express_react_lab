// Importing Dependencies
const express = require('express')
const cors = require('cors')

// Importing JSON files
const projects = require('./projects.json')
const about = require('./about.json')

// Creating our app object
const app = express()

//Setting up middleware
app.use(cors())

//Home route for testing our app
app.get('/', (req, res) => {
  res.send('Hello World')
})

// Route for retrieving projects
app.get('/projects', (req, res) => {
  // Sending projects via JSON
  res.json(projects)
})

// Route for retrieving about info
app.get('/about', (req, res) => {
  // Sending projects via JSON
  res.json(about)
})

//Declaring a variable for our port number
const PORT = process.env.PORT || 4000

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
