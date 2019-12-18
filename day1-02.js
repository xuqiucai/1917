//node.js内置api中引入http模块
var http = require('http'); 
//创建一台服务器http.createServer(API)
var server = http.createServer(function(req,res){
    //req请求对象 request
    //res响应对象response

    //向客户返回细信息
    res.end('hello s    ');
});
//监听端口号
server.listen(8080,function(){
    console.log('server in running on 8080');
})