//必须要引入express
const express = require('express');
const server = express();

const bodyParser = require('body-parser');

//上传图片需要安装 cnpm i multer
const Multer = require('multer');
const path = require('path');
const fs = require('fs');


//注意multer能代替bodyParser的功能
server.use(Multer({dest:'./img'}).any());
//server.use(bodyParser.urlencoded({}));

//监听2133端口
server.listen(2133);

var user = {
	leo:'111'
}

server.use('/addPic',(req,res)=>{
	//console.log(req.files)
	var newName = req.files[0].path + path.parse(req.files[0].originalname).ext;
	console.log(newName);
	fs.rename(req.files[0].path,newName,(err)=>{
		if(err){
			res.send({ok:0,msg:'写入失败'});
		}
		else{
			res.send({ok:1,msg:'上传成功',dataUrl:newName});
		}
	})
})

server.use('',express.static('./'));
