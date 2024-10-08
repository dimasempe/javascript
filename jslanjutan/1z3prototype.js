// 2. Function Declaration (untuk management memori yg bagus)

// const methodMahasiswa = {
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     },
//     main: function(jam){
//         this.energi -= jam;
//         console.log(`Aloo ${this.nama}, selamat main!`)
//     },
//     tidur: function(jam){
//         this.energi += jam*2;
//         console.log(`Hai ${this.nama}, selammat tidur!`)
//     }
// };

// function Mahasiswa(nama,energi){
//     let mahasiswa = Object.create(methodMahasiswa); //Object.create() sama dengan {}
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     //sudah bisa menggunakan methodMahasiswa
//     return mahasiswa;
// }
// let dimas = Mahasiswa('Dimskuy',100)

// pakai konstruktor
function Mahasiswa(nama,energi){
    // let mahasiswa = Object.create(methodMahasiswa); //Object.create() sama dengan {}
    // let this = Object.create(Mahasiswa.prototype);
    this.nama = nama;
    this.energi = energi;
    //sudah bisa menggunakan methodMahasiswa
    // return mahasiswa;
    // return this

}
//membuat prototype (prototype itu sama dengan method pada class di php)
Mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi;
    return `Halooo ${this.nama}, selamat makan!`;
}
Mahasiswa.prototype.main = function(jam){
    this.energi -= jam;
    return `Alloo ${this.nama}, selamat bermain!`
}
Mahasiswa.prototype.tidur = function(jam){
    this.energi += jam * 2;
    return `Hai ${this.nama}, selamat tidur!`
}


let dimas = new Mahasiswa('Dimskuy',100)

// Hoisting dinaikan dulu variabelnya tapi dieksekusi belakangan
// function satu(){
//     var nama = 'Dimas';
//     console.log(nama);
// }
// function dua(){
//     console.log(nama);
// }
// console.log(nama);
// var nama = 'Erik';
// satu();
// dua('Doddy');
// console.log(nama);

