// konsep this (keyword special)
var a = 11
console.log(this.a) //this bisa diganti dengan window
// console.log(this) 





// membuat object

// cara 1 - function declaration
// function halo(){
//     console.log('haloy');
// }
// this.halo(); /this mengembalikan object global

// cara 2 - object literal
// var obj = {a : 10, nama : 'Dimas'}; //buat object dulu
// obj.halo = function(){
//     console.log(this)
//     console.log('haloi');
// }
// obj.halo(); //this mengembalikan object yang bersangkutan

// cara 3 - constructor
// function Halo(){
//     console.log(this)
//     console.log('halo');
// }
// var obj1 = new Halo();
// var obj2 = new Halo(); //this mengembalikan object yang baru dibuat


