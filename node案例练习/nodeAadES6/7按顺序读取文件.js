import thenFs from "then-fs";
//readFile返回的是Promise的实例对象
thenFs.readFile('./file/1.txt','utf-8').then((r1)=>{console.log(r1);})
thenFs.readFile('./file/2.txt','utf-8').then((r2)=>{console.log(r2);})
thenFs.readFile('./file/3.txt','utf-8').then((r3)=>{console.log(r3);})