# mock-server

## 前言

由于只是简单的用来测试接口，所以只封装了常用的`get`、`post`、`patch`、`delete`，如果有其他的需求，可以自行在`src/router/index.js`中进行添加

## 运行

```sh
npm start
```

## 使用

在`src/config/router.json`中配置`path`, `type`, `auth`, `status`, `response`

- path: 请求的路径
- type: 请求类型
- auth: 是否返回 token
- status: 返回状态码，比如在删除数据时，可将其设置为 204，默认 200
- response: 返回数据，可以使用`mockjs`的语法

```json
{
  "req1": {
    "path": "/get",
    "type": "get",
    "response": {
      "data": {
        "msg": "hello world",
        "name": "@name"
      }
    }
  },
  "req2": {
    "path": "/post",
    "type": "post",
    "auth": true,
    "response": {
      "data": {
        "msg": "hello world",
        "name": "@name",
        "date": "@date"
      }
    }
  },
  "req3": {
    "path": "/add",
    "type": "post",
    "status": 201,
    "response": {
      "status": 201,
      "data": {
        "msg": "hello world",
        "name": "@name",
        "date": "@date"
      }
    }
  },
  "req4": {
    "path": "/patch",
    "type": "patch",
    "response": {
      "data": {
        "msg": "hello world",
        "name": "@name",
        "date": "@date"
      }
    }
  },
  "req5": {
    "path": "/delete",
    "type": "delete",
    "status": 204
  }
}
```
