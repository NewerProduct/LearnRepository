//导入文件处理模块
const fs = require('fs')
//导入路径处理模块
const path = require('path')
let regpStyle = /<style>[\s\S]*<\/style>/
let regpJS=/<script>[\s\S]*<\/script>/
//读取index文件
fs.readFile(path.join(__dirname,'./index.html'),'utf-8',function(err,dataStr){

if(err){
    console.log('错误信息是'+ err.message);
}else{
    // console.log(dataStr);
  let newHTML =  dataStr.replace(regpStyle,'<link rel="stylesheet" href="../css/new.css"/>')
  .replace(regpJS,'<script src="../js/new.js"></script>')
  //拿着匹配的结果，写入到css文件中
  fs.writeFile(path.join(__dirname,'./新HTML文件/index.html'),`${newHTML}`,function(err){
    if(err){
        console.log("文件写入失败，原因是:"+err.message);
    }else{
        console.log("文件写入成功");
    }
  })
}

})