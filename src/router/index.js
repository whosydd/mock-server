const express = require('express')
const router = express.Router()
const config = require('../config/router.json')
const { mock } = require('mockjs')

const routes = Object.keys(config)

routes.forEach(route => {
  const { path, type, status = 200, response } = config[route]

  switch (type.toLowerCase()) {
    case 'get':
      router.get(path, (req, res) => {
        console.log('get', req.headers, req.query)
        res.status(status).send(mock(response))
      })
      break
    case 'post':
      router.post(path, (req, res) => {
        console.log('post', req.headers, req.body)
        res.status(status).send(mock(response))
      })
      break
    case 'patch':
      router.patch(path, (req, res) => {
        console.log('patch', req.headers, req.body)
        res.status(status).send(mock(response))
      })
      break
    case 'delete':
      router.delete(path, (req, res) => {
        console.log('delete', req.headers, req.query)
        res.status(status).send()
      })
      break
    default:
      console.log('请配置正确的请求类型！')
      break
  }
})

module.exports = router
