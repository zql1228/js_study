#### 什么是防抖，节流 有哪些运用场景？
防抖：当持续触发事件时，一段时间内不在触发事件，就会执行一次事件处理函数，如果在设定时间内又一次触发事件，就会重新开始计时
应用 按钮点击发送请求
节流：持续触发事件，在规定的时间内只执行一次事件处理函数
应用：瀑布流鼠标滚动重新布局
#### web性能优化能做哪些事情？
  代码层面
  缓存层面
减少http请求,
压缩css 图片的体积，优化js代码
#### let const和var的区别？
var 存在变量提升，同一个变量可以多次声明
let const 会形成块级级作用域
let const 声明的变量存在暂时性死区
const声明的常量不能再赋值,声明必须赋值
let const声明的变量不能重复声明
#### Symbol的数据类型及特性？
基本数据类型
Symbol不能与其他类型的值进行计算
可以转为字符串,bool值，不能转为number
可以接受一个字符串为参数，表示对symbol实例的描述
#### Symbol.iterator的作用？
如果一个数据解构上有Symbol.iterator方法，默认就认为它是可遍历的
#### Set的数据类型及特性？
set是引用数据类型
解构类似于数组，它里面的值都是唯一的，通过new Set()的方式创建set数据类型，可以传入一个数组用于初始化
可以用于数组去重，
#### Map的数据类型及特性？
引用数据类型，通过new Map()的方式创建，可以传入一个数组，
以键值对的方式存储数据，类似于对象，但它的键可以是字符串也可以是对象
#### iterator接口的作用？
为所有的数据结构提供统一的访问机制
#### for of与for in的区别？
for of 用来遍历数组，得到数组的每个值
for in 用来遍历对象，key值为属性名
#### 箭头函数与普通函数的区别？
箭头函数没有this指向，它的this指向上层作用域的this
箭头函数不能作为构造函数，没有prototype属性
箭头函数不能使用yield命令，因此箭头函数不能用作Generator函数
箭头函数没有arguments对象
#### 箭头函数的this的指向？
指向上层作用域的this
#### 代码的执行结果是什么？
```js
var obj = {
   say: function() {
     var f1 = () =>  {
       console.log("1111", this);
     }
     f1();
   },
   pro: {
     getPro:() =>  {
        console.log(this);
     }
   }
}
var o = obj.say;
o();//1111,window
obj.say();//1111,obj
obj.pro.getPro();//window
```

```js
var a = 10
var obj = {
  a: 20,
  say: () => {
    console.log(this.a)
  }
}
obj.say() //10

var anotherObj = { a: 30 } 
obj.say.apply(anotherObj) //10
```

```js
async function fn () {
    setTimeout(() => {
        console.log(4)
    }, 0)
    Promise.resolve().then(() => {
        console.log(1)
    })

    await Promise.resolve().then(() => {
        console.log(2)
    })

    console.log(3)
}
fn()//1234
```

```js
function fn () {
  return new Promise((resolve) => {
    console.log('Promise1')
    fn1()
    setTimeout(() => {
      console.log('Promise2')
      resolve()
      console.log('Promise3')
    }, 0);
  })
}
async function fn1() {
  var p = Promise.resolve().then(() => {
    console.log('Promise6')
  })
  await p.then(() => {
    console.log('Promise7')
  })
  console.log('end')
}
console.log('script')
setTimeout(() => {
  console.log('setTimeout')
}, 0)
fn().then(() => {
  console.log('Promise4')
})
//script  ProbablyPromise6  Promise7 end  setTimeout Promise4
```

#### class与构造函数的区别？
class本质是语法糖，在用法上更加简洁
1.class内部默认开启严格模式
2.不可以直接调用，只能通过new关键字调用
3.class内定义的方法是在类的原型上
4.class可以通过static关键字来定义静态方法

