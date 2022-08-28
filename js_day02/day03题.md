#### 什么是防抖，节流 有哪些运用场景？
防抖：当持续触发事件时，一段时间内不在触发事件，就会执行一次事件处理函数，如果在设定时间内又一次触发事件，就会重新开始计时
应用 按钮点击发送请求
节流：持续触发事件，在规定的时间内只执行一次事件处理函数
应用：瀑布流鼠标滚动重新布局
#### web性能优化能做哪些事情？

#### let const和var的区别？
var 存在变量提升，同一个变量可以多次声明
let const 会形成块级级作用域
let const 声明的变量存在暂时性死区
const声明的常量不能再赋值,声明必须赋值
let const声明的变量不能重复声明
#### Symbol的数据类型及特性？
基本数据类型
#### Symbol.iterator的作用？

#### Set的数据类型及特性？

#### Map的数据类型及特性？

#### iterator接口的作用？

#### for of与for in的区别？

#### 箭头函数与普通函数的区别？

#### 箭头函数的this的指向？

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
o();
obj.say();
obj.pro.getPro();
```

```js
var a = 10
var obj = {
  a: 20,
  say: () => {
    console.log(this.a)
  }
}
obj.say() 

var anotherObj = { a: 30 } 
obj.say.apply(anotherObj) 
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
```

#### class与构造函数的区别？