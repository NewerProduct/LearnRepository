"use strict";
//定义函数的同时也限制返回值类型 - void 并声明函数。
function Hello() {
    //如果我们这样子写了，那么该函数只能返回undefined ，不能返回其他类型的值
    /*
     return 11;
     return false;
     return null;
     return "hello"
    上述写法全部报错类型分配错误
    */
}
//利用变量去声明该函数
const f1 = function () {
    /*
    如果向这样子写了，那么该函数返回任何类型的值都可以，就好像失去了void返回值类型的限制
    return 11;
     
    均不会报错。
    */
    return true;
};
// if(f1()){  - 这里会报错
// }
