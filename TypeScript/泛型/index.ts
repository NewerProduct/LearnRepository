//泛型举例
function printData<T>(params: T) {
    console.log(params);
}

function logData<T, U>(params1: T, params2: U) {
    console.log(params1);
    console.log(params2);
}

//调用时在具体指定具体类型
printData<number>(10);
printData<string>('father')


//多个
logData<string, number>('hello', 10);


//泛型接口
interface IPerson<T> {
    name: string,
    age: number,
    extraInfo: T
}

//在具体使用时传入具体类型
const p1: IPerson<number> = {
    name: '小李',
    age: 20,
    extraInfo: 10,
}

type jobInfo = {
    title:string,
    company:string,
}

//在具体使用时传入具体类型
const p2:IPerson<jobInfo> = {
    name:'小三',
    age:21,
    extraInfo:{
        title:'高级工程师',
        company:'小米'
    }
}
//泛型类
class Person<T> {
    constructor(
        public name:string,
        public age:number,
        public extraInfo:T
    ){}
        //类方法
        speak(){
            console.log(`我叫${this.name},今年${this.age}岁`);
            console.log(this.extraInfo);
            
        }
}


//具体实现
const p3 = new Person<jobInfo>('小五',30,{title:'高级软件开发工程师',company:'小米公司'})