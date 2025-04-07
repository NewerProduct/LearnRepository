//引入fs模块
const { log } = require('console');
const fs = require('fs')
let oldArr = []
let newArr = []
//第一步获取数据并把数据整合成理想格式 K : V
fs.readFile('./成绩.txt','utf-8',function(err,fileData){
if(err){
    console.log("文件读取失败，原因是："+err.message);
}else{
    console.log(fileData);
    oldArr = fileData.split(' ')
    oldArr.forEach(element => {
     newArr.push(element.replace('=','：'))
    });
    //使用\r\n进行拼接
    let newStr = newArr.join('\r\n')
    console.log(newStr);
    //第二步写入数据
    fs.writeFile('./处理后的成绩.txt',`${newStr}`,function(err){

        if(err){
            console.log('写入失败'+err.message);
        }else{
            console.log('文件写入成功');
        }
    })
    }
}

)

