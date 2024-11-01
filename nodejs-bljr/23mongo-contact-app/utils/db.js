const mongoose =require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/wpu');

// Membuat Schema
// const Contact = mongoose.model('Contact',{
//     nama:{
//         type:String,
//         required:true
//     },
//     noHP:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String
//     }
// })

// Menambahkan 1 data
// const contact1 = new Contact({
//     nama:"Doddy",
//     noHP:'08139823043',
//     email:'doddy@gmail.com'
// })

// Simpan ke collection
// contact1.save().then((contact)=>console.log(contact))