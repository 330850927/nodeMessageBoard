const mongoose = require("mongoose")
const { Schema } = mongoose
/**
 * 链接数据库
 */
mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
// 设计文档结构
const UserSchame = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: String
})

// 将文档结构发布为模型
var User = mongoose.model('User', UserSchame)
// 新增数据
// var admin = new User({
//     userName: 'admin',
//     password: '123456'
// })

// admin.save().then((res) => {
//     console.log('保存成功', res)
// })


// 查询数据
User.find({
    userName: 'admin'
}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

// 删除数据
// User.remove({
//     userName: 'admin'
// }).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

// 更新数据

User.findByIdAndUpdate('60a3b4c369edaa7798678883',{
    password: '789456'
}).then((res) => {
    console.log('更新成功', res)
})