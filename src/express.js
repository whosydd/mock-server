const express = require('express')
const cors = require('cors')
const router = require('./router')
const bodyParser = require('body-parser')

const app = express()

// 环境变量中设置端口
const port = process.env.PORT || 5000

// 中间件
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use('/', router)

// 监听端口
app.listen(port, () => {
  console.log(`Server has started on port ${port}!!!`)
})
