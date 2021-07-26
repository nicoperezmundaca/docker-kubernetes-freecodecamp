const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([
        {
            name: 'bob',
            email: 'bob@gmail.com'
        },
        {
            name: 'dave',
            email: 'dave@hotmail.com'
        },
        {
            name: 'mintcranberry',
            email: 'mintcranberry@gmail.com'
        },
        {
            name: 'butters',
            email: 'butters@gmail.com'
        }
    ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})