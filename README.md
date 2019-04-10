## 本demo主要练习如下技术点：
1. fetch方法的使用
2. node express发布后端服务（get，post）
3. fetch与后端服务的交互

## 运行说明
### 1. node express及后台几个组件的安装
````
npm i express        //express用户发布后端服务
npm i body-parser    //body-parser用于解析post提交的字符串参数
npm i multer         //用户node后端接受图片数据
node app.js          //启动后端服务
````

### 2. 三个demo的运行说明
1. 访问feth.html 需要运行 feth.js(命令 node fetch)
2. 访问feth-post.html 需要运行 feth-post.js(命令 node fetch-post)
3. 访问feth-post2.html 需要运行 feth-post2.js(命令 node fetch-post2)
4. 如果要一起运行以上三个服务则可以直接运行app.js(命令 node app) 

## fetch语法
1.fetch的好处
 IE8+ 以上浏览器，在生产环境使用 Fetch 是可行的
 Fetch API 是基于 Promise 设计
 用于解决XMLHttpRequest的设计粗糙api,不符合关注分离（Separation of Concerns）的原则,配置和调用混乱的问题
 语法简洁，更加语义化
 基于标准 Promise 实现，支持 async/await
 同构方便，使用 isomorphic-fetch
2. 从传统ajax演化到fetch
传统的ajax用法如下：
````
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';

xhr.onload = function() {
  console.log(xhr.response);
};

xhr.onerror = function() {
  console.log("Oops, error");
};

xhr.send();
````
使用fetch如下：
````
fetch(url).then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
}).catch(function(e) {
  console.log("Oops, error");
});
````
使用es6的箭头函数后如下：
````
fetch(url).then(response => response.json())
  .then(data => console.log(data))
  .catch(e => console.log("Oops, error", e))
````
现在看起来好很多了，但这种 Promise 的写法还是有 Callback 的影子，而且 promise 使用 catch 方法来进行错误处理的方式有点奇怪。不用急，下面使用 async/await 来做最终优化：
````
try {
  let response = await fetch(url);
  let data = response.json();
  console.log(data);
} catch(e) {
  console.log("Oops, error", e);
}
// 注：这段代码如果想运行，外面需要包一个 async function
````
使用 await 后，写异步代码就像写同步代码一样爽。await 后面可以跟 Promise 对象，表示等待 Promise resolve() 才会继续向下执行，如果 Promise 被 reject() 或抛出异常则会被外面的 try...catch 捕获。

 
