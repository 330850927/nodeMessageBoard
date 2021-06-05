/**
 * studen.js
 * 数据操作文件模块
 * 操作文件中的数据 只处理数据 不关心业务
 */
var fs = require('fs')
const { param } = require('./router')
var dbPath = './db.json'
// 获取所有学生列表
exports.find = function (callback) {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }
        // 第一个参数 如果不是null  就代表报错 err
        callback(null, JSON.parse(data).students)
    })
}

/**
 * 根据id获取对应学生信息
 * @param {number} id 学生id
 * @param {function} callback  回调函数
 */
exports.findById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        var stu = students.find((item) => {
            return item.id === parseInt(id)
        })
        // 第一个参数 如果不是null  就代表报错 err
        callback(null, stu)
    })
}
// 添加学生
exports.add = function (student, callback) {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }
        // callback(null, JSON.parse(data).students)
        var students = JSON.parse(data).students
        // 处理学生id
        student.id = students[students.length - 1].id + 1
        student.age = parseInt(student.age)
        student.gender = parseInt(student.gender)
        students.push(student)
        var ret = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, ret, (err) => {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}
// 更新学生
exports.upDataById = function (student, callback) {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        var stu = students.find((item) => {
            return item.id === parseInt(student.id)
        })
        for (var key in student) {
            if (key === 'id' || key === 'age' || key === 'gender') {
                stu[key] = parseInt(student[key])
            } else {
                stu[key] = student[key]
            }
        }

        var ret = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, ret, (err) => {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}
// 删除学生
exports.delete = function (id, callback) {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        students.splice(students.findIndex((item) => {
            return item.id === parseInt(id)
        }), 1)
        var ret = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, ret, (err) => {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}