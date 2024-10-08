//1. Contoh awal
// function init(){
//     let nama = 'Dimas';
//     function tampilNama(){ //inner function
//         console.log(nama); //closure karena ngambil data yg ada di fungsi atasnya
//         //ngambil dari lexical scope-nya
//     }
//     console.dir(tampilNama) //ini buat liat dia masuk closure atau bukan
//     tampilNama()
// }
// init()

// 2. Contoh pemanggilan function inner
// function init(){
//     let nama = 'Dimas';
//     function tampilNama(){ //inner function
//         console.log(nama); //closure karena ngambil data yg ada di fungsi atasnya
//         //ngambil dari lexical scope-nya
//     }
//     return tampilNama; //kalau dibuat return
// }
// let panggilNama = init();
// panggilNama()   

// 2. Contoh pemanggilan function inner (kalau pakai parameter)
// function init(){
//     function tampilNama(nama){ //inner function
//         console.log(nama); //closure karena ngambil data yg ada di fungsi atasnya
//         //ngambil dari lexical scope-nya
//     }
//     return tampilNama; //kalau dibuat return
// }
// let panggilNama = init();
// panggilNama('Galih')  

// 3. Contoh pakai anonymous function (mirip function ekspresi)
// function init(){
//     // let nama = 'Dimas';
//     return function (nama){ //inner function
//         console.log(nama); //closure karena ngambil data yg ada di fungsi atasnya
//         //ngambil dari lexical scope-nya
//     }
// }
// let panggilNama = init();
// panggilNama('Gali')  

// 4. Contoh penggunaan untuk factory function
// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`Halo ${nama}, selamat ${waktu}, Semoga harimu menyenangkan!`)
//     }
// }
// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');

// selamatPagi('Dimas')
// selamatSiang('Azriel')

// console.dir(selamatSiang)

// 5. agar tidak terganggu (function private)
// let add = function(){
//     let counter = 0;
//     return function(){
//         return ++counter
//     }
// }
// let a = add()
// counter = 100
// console.log(a())
// console.log(a())
// console.log(a())

// 5. Menggunakan cara agar langsung digunakan tanpa tampung di variable
let add = (function(){ //memakai imideitly invoke function 
    let counter = 0;
    return function(){
        return ++counter
    }
}()); // bisa juta: })(); 

counter = 100
console.log(add())
console.log(add())
console.log(add())