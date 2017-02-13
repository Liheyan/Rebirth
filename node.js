1、npm install 下载下方所有写在文件里面的依赖包
2、cd 进入文件夹名字
3、npm install 　表示下载
４、ｌｓ可以查看此文件夹的内容
5、修改完之后输入node server.js(文件在应用文件夹下面)，之后输入server  start，之后进入网站localhost：3000/

首先安装Express应用生成器（网址：http://www.expressjs.com.cn/starter/generator.html）
之后在把NPM用淘宝NPM镜像变成cnpm（这样做可以加快下载速度毕竟node是国外的）（网址http://npm.taobao.org/）
在创建完一个项目之后需要建立一个server.js
代码为:vim server.js   或者在项目中手动创建一个server.js的文件 加入其代码，下方为实例：
（
var app = require('./app');
var http = require('http');
var config = require('./config/index');
http.createServer(app).listen(config.server.port, function () {
    console.log('soway  server start :'+config.server.port);
});
）

运行结束之后会生成应用，其中routes好像activity   ，   views好像视图 ，css在public下面的style.css（自身理解）
另附带微信公众号开发文档和HTML相关文档加成
微信公众开发文档https://mp.weixin.qq.com/wiki
HTML相关文本教程http://www.w3school.com.cn/h.asp
