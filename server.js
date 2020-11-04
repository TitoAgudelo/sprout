// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")

// Initialize express and define a port
const app = express()
const PORT = 3000
const routes = require('./routes')

// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('App is working'))

app.use('/api', routes)

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

module.exports = {
  app
}
