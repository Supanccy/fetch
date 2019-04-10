# 前言
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
