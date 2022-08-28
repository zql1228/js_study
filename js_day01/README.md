## 1.作用域 
作用域：执行环境中变量和函数的作用范围
    1.全局作用域：
        页面打开时被创建，页面关闭时被销毁
        编写在script标签中的函数，作用域为全局，在页面的任意位置都可以访问到
        全局作用域可以认为是window,因为所有全局的变量和函数都是作为window对象的属性和方法创建的
    2.局部(函数)作用域
        函数调用时，函数作用域被创建，函数执行完毕，函数作用域被销毁
        每调用一次函数，会创建一个新的函数作用域，它们之间是独立的
        函数作用域可以访问到上层作用域，但是函数的作用域是相互独立的
    3.块级作用域 ：通过let和const声明的变量会形成块级作用域，在块的外部访问不到。
## 2.作用域链
用途：保证对执行环境中的有权访问的变量和函数的有序访问

## 3.预编译
预编译是上下文创建之后，js执行前的一段时期，会对js进行预处理

全局上下文创建后，会生成对象VO,VO首先会寻找变量声明，将var声明的变量作为VO对象的属性名，值为undefined
,然后寻找函数声明，属性值为函数本身，如果函数与变量名冲突，函数声明会将变量声明覆盖

函数预编译：
    寻找变量声明，变量名作为VO对象的属性名，值为undefined
    寻找形参，形参名作为VO对象的属性名，值为undefined
    将实参值赋值给形参，即替换VO对象属性中的值
    寻找函数声明，函数名作为AO对象的属性名，属性值为函数本身，如果函数名与变量名冲突，函数声明会将变量声明覆盖
## 4.数据类型
基本数据类型：undefined null string boolean number symbol bigint
引用数据类型：Object,Array,Function等

## 5.浅拷贝域深拷贝
浅拷贝：只拷贝引用数据类型的地址，当某个数据类型被修改后，也会影响到另一个拷贝的数据
深拷贝：对于每一级的数据都会拷贝 可以使用lodash的cloneDeep()方法
## 6.闭包
定义：能够访问到其他函数作用域中对象的函数，称为闭包
## 7. this指向
 1.在一般函数调用时，this指向window
 2.在构造函数中this指向实力实例化出来的对象
 3.作为对象的方法，this指向调用对象
 4.call和applay调用，this指向第一个被调用的对象
## 8.event Loop (事件循环)
js是单线程语言，它的异步和多线程都是通过event Loop实现的
## 9.ajax
1.创建Ajax对象
2.传入请求方式和请求地址
3.发送请求
4.获取服务端和客户端响应数据
<script>
    const xhr=new XMLHTTPRequest()
    xhr.open('请求方式','请求地址')
    //发送请求
    xhr.send()
    //监听xhr的请求状态
    xhr.onreadstatechange=function(){
        //readState 0 请求未初始化，1，服务器连接已建立，
        //2 请求已接收 3 请求处理中，4 请求已完成，响应已就绪
        if(xhr.readState===4 || xhr.status===200){
            console.log(xhr.responseText)
        }
    }
    xhr.onload=function(){
         console.log(xhr.responseText)
    }
</script>
 
 ## 10 . 同源策略
 协议域名端口号相同
 跨源网络访问 ：
 跨域写操作一般是被允许的，例如链接links 重定向及表单提交
 跨域资源嵌入一般是被允许
 跨域读操作一般不被允许，但通常可以通过内嵌资源来读取访问，例如script标签 link标签 img，video audio媒体标签
通过iframe载入的资源，通过@font-face引入的字体

## 如何解决跨域
1.cors 跨源资源共享
    const cors=require('cors')
    app.use(cors({origin:'*'}))
    简单请求：
        请求方法 ：get head post
        请求头的内容：无自定义头，Content-Type为以下几种：text/plain,multipart/format data ,application/x www from urlencoded
    非简单请求
        put delete post 
        有自定义请求头 如 {header:{"token":''}}
2.jsonp
<script>
    const script=document.createElement('script')
    script.type="text/javascript"
    script.src="http://localhost:3000/jsonp"
    document.head.appendChild(script)
    script.onload=function(){
        //script标签加载完后销毁
        document.head.removeChild('script')
    }
    function jsonpCallback(data){
        console.log(data)
    }
</script>
后端
const Koa=require('Koa')
const app=new Koa()
app.use((ctx,next)=>{
    ctx.path='/jsonp'
    ctx.body=jsonpCallback({msg:'hello world'})
})
app.listen(3000)
## 11. 面向对象
面向过程：首先分析出解决问题的步骤，然后通过代码实现
面向对象：功能封装在功能内部，实现功能通过调用对象方法实现
面向对象的三大特性 ：封装 继承 多态 
封装的方式：
    1.工厂模式
    function createCar(color,style){
        const obj=new Object(
            obj.color=color
            obj.style=style
        )
        return obj
    }
    const car=createCar('red','xxx')
    2.构造函数模式
    function createCar(color,style){
        this.color=color
        this.style=style
    }
      const car=new createCar('red','xxx')
    构造函数与工厂函数的区别
        1.没有显示的创建对象
        2.直接将属性和方法赋值给this对象
        3.没有return 语句
    构造函数创建对象内部的处理
        1，创建一个新对象，2.将构造函数的作用域赋值给新对象，3.执行构造函数的代码4.返回新对象
    3. 原型模式
        1.原型和原型链
        原型：构造函数的原型：prototype属性的值
              构造函数创建的实例的原型是构造函数(constructor)的protoType属性
        原型链：对象在访问属性和调用方法时首先在对象自身查找，找不到就会去对象的原型上查找，再找不到就去对象的原型的原型上查找，直到原型链的顶端。