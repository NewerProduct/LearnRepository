import thenFs from "then-fs";

const promiseAll = [
    //该顺序就是最后结果顺序
    thenFs.readFile('./file/1.txt','utf-8'),
    thenFs.readFile('./file/2.txt','utf-8'),
    thenFs.readFile('./file/3.txt','utf-8'),
]

//调用promise.all方法来进行并行操作
Promise.race(promiseAll).then((result)=>{
 //成功
 console.log(result);
})
// 通过.catch捕获错误
.catch(err=>{
    console.log(err.message);
})