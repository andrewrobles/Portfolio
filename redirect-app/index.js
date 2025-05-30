const express = require('express')
const app = express()
const PORT = 3000

// Replace with your desired URL
const url = 'https://docsify-this.net/?basePath=https://raw.githubusercontent.com/andrewrobles/Portfolio/main&homepage=README.md#/'

// Redirect root ("/") to another URL
app.get('/', (req, res) => {
  res.redirect(url) 
})

app.listen(PORT, () => {
  console.log(`Redirect app listening on http://localhost:${PORT}`)
})
