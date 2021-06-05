
var express = require('express')
var router = require('./router')
var bodyParser = require('body-parser')

var app = express()

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))


app.engine('html', require('express-art-template'))

// 获取 请求主体
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 把路由容器挂载道 app 服务器中
app.use(router)

app.listen(3000, () => {
    console.log('runing in 3000....')
})
