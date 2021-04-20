// app application 应用程序
var http = require('http')
var fs = require('fs')
http
    .createServer((req, res) => {
        var url=req.url
        if(url === '/'){
            fs.readFile('./views/index.html', (err, data) => {
               if(err){
                   return res.end('404')
               }
               res.end(data)
            })
        }
    })
    .listen(3000, () => {
        console.log('3000:runing...')
    })