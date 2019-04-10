//必须要引入express
//需要安装express  cnpm i express  安装完引入即可
const express = require('express');
const server = express();
//express提供post接口必须安装并引入body-parser
//安装完，如下引入
const bodyParser = require('body-parser');


//引入一个bodyparser的中间件，来接受post参数
server.use(bodyParser.urlencoded({}));

//监听2133端口
server.listen(2133);

var user = {
    leo: '111'
}

//定义post接口
server.post('/loginPost',(reqest,response)=>{
    console.log(reqest.body);
    if (user[reqest.body.user] == reqest.body.pass) {
        response.send({ok: 1, msg: '登陆成功'});
    } else {
        response.send({ok: 0, msg: '登陆失败'});
    }
})



server.use('', express.static('./'));
