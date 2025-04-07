"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 参数装饰器
function required(target, propertyKey, parameterIndex) {
    console.log(target);
    console.log(propertyKey);
    console.log(parameterIndex);
}
class Greeter {
    constructor(name) {
        this.name = name;
    }
    greet(name) {
        console.log("Hello, " + name + "!");
    }
}
__decorate([
    __param(0, required)
], Greeter.prototype, "greet", null);
console.log('类的实例对象是:', Greeter.prototype);
let greeter = new Greeter('张三');
greeter.greet("World");
