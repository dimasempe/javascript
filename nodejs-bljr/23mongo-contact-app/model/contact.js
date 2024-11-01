const mongoose =require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/wpu');

const Contact = mongoose.model('Contact',{
    nama:{
        type:String,
        required:true
    },
    noHP:{
        type:String,
        required:true
    },
    email:{
        type:String
    }
})

module.exports = Contact