var fs = require('fs')
// ES6 的 promise 是一个构造函数

// 第一步 创建 Promise 容器 里面有三种状态 Pending(执行中) Resolved(成功了) Rejected(失败了)
//      Promise 容器一旦创建 就开始执行内部代码
var p1 = new Promise((resolve, reject) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            // 第一种状态：失败了
            // console.log(err)
            //把容器的 Pending 状态修改为 Rejected
            reject(err)
        } else {
            // 第二种状态：成功了
            // console.log('成功了', data)
            //把容器的 Pending 状态修改为 Resolved
            resolve(data)
        }
    })
})
var p2 = new Promise((resolve, reject) => {
    fs.readFile('a.txt', 'utf8', (err, data) => {
        if (err) {
            // 第一种状态：失败了
            // console.log(err)
            //把容器的 Pending 状态修改为 Rejected
            reject(err)
        } else {
            // 第二种状态：成功了
            // console.log('成功了', data)
            //把容器的 Pending 状态修改为 Resolved
            resolve(data)
        }
    })
})
// 第二步
p1.then((res) => {
    console.log('第二层成功', res)
    return p2
}).catch(err=>{
    console.log('第二层失败', err)
}).then((res) => {
    console.log('第二层成功', res)
}).catch(err=>{
    console.log('第二层失败', err)
    
})