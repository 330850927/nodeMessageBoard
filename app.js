// app application 应用程序
var express = require('express')
var app = express()
// 提供静态资源服务
app.use(express.static('./public/'))

// 配置使用art-template 模板引擎
app.engine('html', require('express-art-template'))
// express 为 response 响应对象提供了 render 方法 
// res.render('html模板名称', {模板数据})
//  第一个参数不能写路径 默认会去项目中的views目录查找该模板文件

const componentd = [{
    name: '张三',
    message: '今天天气不错',
    dateTime: '201-5-9'
},
{
    name: '李四',
    message: '今天空气挺好',
    dateTime: '201-5-9'
},
{
    name: '王五',
    message: '今天也要开心',
    dateTime: '201-5-9'
}]
app.get('/', (req, res) => {
    res.render('index.html', {
        comments: componentd
    })
})
app.get('/post', (req, res) => {
    res.render('post.html')
})
app.listen(3000, () => {
    console.log('app is runing...')
})
