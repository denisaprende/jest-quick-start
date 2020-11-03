
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Server running!')
})

app.get('/products', (req, res) => {
  res.status(200).send([{ name: 'computer' }, { name: 'mouse' }])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
