"use strict";
//泛型举例
function printData(params) {
    console.log(params);
}
function logData(params1, params2) {
    console.log(params1);
    console.log(params2);
}
//调用时在具体指定具体类型
printData(10);
printData('father');
//多个
logData('hello', 10);
//在具体使用时传入具体类型
const p1 = {
    name: '小李',
    age: 20,
    extraInfo: 10,
};
//在具体使用时传入具体类型
const p2 = {
    name: '小三',
    age: 21,
    extraInfo: {
        title: '高级工程师',
        company: '小米'
    }
};
//泛型类
class Person {
    constructor(name, age, extraInfo) {
        this.name = name;
        this.age = age;
        this.extraInfo = extraInfo;
    }
    //类方法
    speak() {
        console.log(`我叫${this.name},今年${this.age}岁`);
        console.log(this.extraInfo);
    }
}
//具体实现
const p3 = new Person('小五', 30, { title: '高级软件开发工程师', company: '小米公司' });
