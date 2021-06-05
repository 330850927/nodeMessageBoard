const mongoose = require('mongoose')

const {Schema} = mongoose
mongoose.connect('mongodb://localhost:27017/itcast', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

let studentSchame = new Schema({
    name:{
        type: String,
        required: true
    },
    gender:{
        type: Number,
        enum: [0, 1],
        default: 0,
        require: true
    },
    age:{
        type: Number   
    },
    hobbies:{
        type: String   
    }
})

module.exports = mongoose.model('Student', studentSchame)