//导入响应http模块
const http = require('http')
const fs = require('fs')
const path = require('path')
//实例化一个web服务器
const  webServer = http.createServer()


webServer.on('request',function(req,res){
  
  reqURL = req.url;
  //定位文件在本地服务器的路径
  filePath = path.join(__dirname,'./index.html')

  //读取文件
  fs.readFile(filePath,'utf-8',function(err,dataStr){
    if(err){
      return '404页面找不到'
    }else{
        //设置响应头，防止中文乱码
        res.setHeader('Content-Type','text/html; charset=utf8')

        res.end(dataStr)
      }
  })
})


webServer.listen(90,function(){
  console.log('服务器在90端口上开启了');
})