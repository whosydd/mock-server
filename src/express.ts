import express from 'express'
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => res.send('Hey there!'))

app.listen(port, () => {
  console.log(`Server has started on port ${port}!!!`)
})
