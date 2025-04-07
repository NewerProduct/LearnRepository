const fs = require('fs')
//定义方法
function getFile(fPath){
    //定义功能
    return new Promise(function(resolve,reject){
        fs.readFile(fPath,'utf-8',(err,dataStr)=>{
           if(err) return reject(err)
            resolve(dataStr)
        })
    })

}