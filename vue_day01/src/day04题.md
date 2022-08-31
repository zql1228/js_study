#### 常见的指令有哪些？
v-on v-if v-show v-text v-html  
v-once v-else v-for v-model v-bind
#### v-if 和 v-show的区别，有哪些运用场景？
v-if是动态的删除或添加dom元素v-show是设置元素的display属性
v-if具有更高的渲染消耗，v-show具有更高的切换渲染消耗
v-if适合页面初次渲染后状态不再改变的场景，v-show适合需要频繁切换的场景
<!--  -->
v-if 的渲染时惰性的，只有条件满足才会把代码内容进行渲染
v-show 开始就会把内容进行渲染，通过css样式来控制显示隐藏
#### v-for里key的作用？
跟踪每个节点的身份，从而重用和重新排列现有元素
#### v-html的弊端？
v-html会识别输入内容中的html标签,可能会造成xss攻击
<!-- 谨慎使用v-html用作用户输入信息的渲染，容易造成xss攻击 -->
#### 常见的修饰符有哪些？
事件修饰符 stopPropagination preventDefault
vue：
事件修饰符：.stop .once .prevent .self 
按键修饰符：keyup.enter
表单修饰符：.trim .number .lazy
<!--  -->
.sync 对属性进行双向绑定
<text-document 
v-bind:title="doc.title"
v-on:update:title="doc.title"
></text-document>
<text-document v-bind:title.sync="doc.title"></text-document>
<text-document v-bind:title.sync="doc.title"></text-document>
#### 动态class的写法？
三目， 数组，对象
#### 什么是双向绑定？
就是给input框绑定oninput事件,当输入内容改变的时候，就会将新值赋值给value,当data中数据改变，页面上的数据也会改变
视图更新数据随之更新，数据更新视图也会随之更新