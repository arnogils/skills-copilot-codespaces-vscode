// Create web server
// http://localhost:3000/comments
const express = require('express')
const app = express()
const port = 3000

// Set static files
app.use(express.static('public'))

// Set template engine
app.set('view engine', 'ejs')

// Set route
app.get('/', (req, res) => {
  res.render('index')
})

// Start and listen web server
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})