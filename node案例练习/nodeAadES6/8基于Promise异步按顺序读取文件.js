import thenFs from "then-fs";

thenFs.readFile('./file/1.txt','utf-8').then((r1)=>{
console.log(r1);
//把promise对象返回出去
    return thenFs.readFile('./file/2/txt','utf-8')
})
//因为上述函数的返回值是promise的对象所以可以继续调用.then
.then((r2)=>{
    console.log(r2);
    return thenFs.readFile('./file/3.txt','utf-8')
})
.then((r3)=>{
    console.log(r3);
})
//通过.catch捕获错误
.catch(err=>{
    console.log(err.message);
})