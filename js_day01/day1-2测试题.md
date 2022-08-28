#### 什么是作用域，作用域有哪些?
执行环境中变量和函数的作用范围
全局作用域，局部作用域，块级作用域
#### 预编译的过程有哪些？
首先会将代码中var 声明的变量保存在VO对象中，并赋值为undefined
使用函数声明创建的函数会被创建
如果是函数预编译，会把传入的形参也存入VO对象中，并赋值为undefined,在函数调用时会把实参赋值给形参

#### 下面几题的代码的执行结果分别是什么？
```js
var foo = 1;
function bar() {
    console.log(foo);  //undefined
    if (!foo) {
        var foo = 10;
    }
    console.log(foo); //10
}

bar();
```

```js
function fn () {
    func()
    var func = function () {
        console.log('表达式')
    }
    function func() {
        console.log('声明式')
    }
    func()
}
fn() //'声明式' '表达式'
```

```js
function test(d) {
    console.log(b);
    if (a) {
        b = 100;
    }
    console.log(b);
    c = 4;
    console.log(d);
    var d = 20;
    console.log(d);
}
var a = 10;
var b = 10;
test(3);//undefined undefined 10 20
console.log(c);//4
```

#### js的数据类型有哪些？
基本数据类型：undefined null string number symbol bigint boolean
引用数据类型：Object Array Function

#### 什么是深拷贝 深拷贝有哪些方式？
不限层级拷贝,递归，使用lodash库的cloneDeep方法
JSON.parse(JSON.stringify(obj)) 只第一层是深拷贝
const obj={name:'xxx',age:18}
const cloneObj={...obj} 只第一层是深拷贝
#### 什么是闭包？
一个函数可以访问另一个函数的作用域的函数叫闭包
#### 下面几题的代码的执行结果分别是什么？
```js
var obj = { 
    a: 1, 
    foo() {
        console.log(this.a);
    } 
};
var a = 2;
var foo = obj.foo;
var obj2 = { a: 3, foo: obj.foo }

obj.foo();//1
foo();//2
obj2.foo();//3
```
```js
function Foo(){
    getName = function(){ console.log(1); };
    return this;
}
Foo.getName = function(){ console.log(2); };
Foo.prototype.getName = function(){ console.log(3); };
var getName = function(){ console.log(4); };
function getName(){ console.log(5) };

Foo.getName(); //2       
getName();       //5 
Foo().getName();//2
getName();      //5  
new Foo.getName();
new Foo().getName();//2
new new Foo().getName();
```

#### 什么是EventLoop事件循环？
js中的异步任务和多线程会放到事件循环中去执行
#### 什么是同源策略？图片资源是否存在跨域？
同源策略：一种约定，要求访问的urld的域名协议端口号要相同，否则就会跨域
图片资源不存在跨域
#### 解决跨域的方式有哪些？
cors jsonp proxy代理 websocket nginx代理
#### js设计模式有哪些？
单例模式，发布订阅模式，工厂模式 代理模式
#### 什么是原型，原型链？
原型 ：对象的构造函数的prototype属性
在访问对象的某个属性和方法时，会先在自身查找，找不到就会去对象的原型上查找，再找不到就会去对象的原型的原型上去查找，知道找的原型为null,这个查找的形成的结构就是原型链。