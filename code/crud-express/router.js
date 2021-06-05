var express = require('express')
var router = express.Router()
var Student = require('./student')

router.get('/students', (req, res) => {
    // redFire 第二个参数 文件格式转换
    Student.find((err, students) => {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.render('index.html', {
            fruits: [
                '苹果',
                '香蕉',
                '芒果'
            ],
            students: students
        })
    })
})
router.get('/students/new', (req, res) => {
    res.render('new.html')
})
router.post('/students/new', (req, res) => {
    Student.add(req.body, (err) => {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.redirect('/students')
    })
})
router.get('/students/edit', (req, res) => {
    Student.findById(parseInt(req.query.id), (err, student) => {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.render('edit.html', {
            student: student
        })
    })
})
router.post('/students/edit', (req, res) => {
    Student.upDataById(req.body, (err) => {
        if(err){
           return res.status(500).send('Server error')
        }
        res.redirect('/students')
    })
})
router.get('/students/delete', (req, res) => {
    Student.delete(req.query.id, (err) => {
        if(err){
            return res.status(500).send('Server error')
         }
         res.redirect('/students')
    })
})

module.exports = router