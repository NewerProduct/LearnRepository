// 参数装饰器
function required(target: any, propertyKey: string, parameterIndex: number) {
    console.log(target);
    console.log(propertyKey);
    console.log(parameterIndex);
}

class Greeter {
    name:string
    constructor(name:string){
        this.name = name
    }
    greet(@required name: string) {
        console.log("Hello, " + name + "!");
    }
}

console.log('类的实例对象是:',Greeter.prototype);

let greeter = new Greeter('张三');
greeter.greet("World");