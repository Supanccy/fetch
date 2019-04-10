//必须要引入express
//需要安装express  cnpm i express  安装完引入即可
const express = require('express');
const server = express();

//监听2133端口
server.listen(2133);

var user = {
    leo: '111'
}

server.use('/login', (reqest, response) => {
    console.log(reqest.query);
    if (user[reqest.query.user] == reqest.query.pass) {
        response.send({ok: 1, msg: '登陆成功'});
    } else {
        response.send({ok: 0, msg: '登陆失败'});
    }
});

server.use('', express.static('./'));
