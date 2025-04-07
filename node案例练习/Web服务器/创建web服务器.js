
//导入http模块
const http = require('http')
//创建服务器
const webServer = http.createServer()
//绑定访问事件
webServer.on('request',function(req,res){
    console.log(req);
    console.log("有人访问了我的服务器");
})
//开启服务
webServer.listen(80,function(){
    console.log("服务开启成功，地址是http://127.0.0.1");
})

