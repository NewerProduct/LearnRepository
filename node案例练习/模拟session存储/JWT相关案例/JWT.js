const express = require('express')

const app = express()

//导入express-jwt
const expressJwt = require('express-jwt')
//导入jsonwebtoken
const jwt = require('jsonwebtoken')



//定义secret密钥
const secretKey = 'sadikasmdm ^_^'


//开启在80端口上的服务器
app.listen(80,()=>{
    console.log("开启了服务器");
})