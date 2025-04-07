//引入express模块
const express  = require('express')
//实例化对象
const router = express.Router()
//处理请求路径以及进行响应

router.get('/',function(req,res){
    res.send('这是一个get请求')
})

router.post('/',function(req,res){
    res.send('这是一个post请求')
})
//共享路由
module.exports(router)