// Function Expression
const tampilNama = function(nama){
    return `Halo, ${nama}`;
}
console.log(tampilNama('Azriel'))

// Arrow Function
// const tampilNama2 = (nama) => {
//     return `Halaw, ${nama}`;
// }
// console.log(tampilNama2('Azriel2'))

// Arrow Function (klo 1 ga harus pake kurung, klo isinya return aja gaperlu returnnya)
// const tampilNama2 = nama => `Halaw, ${nama}`;
// console.log(tampilNama2('Azriel2'))

// Arrow Function tanpa parameter
const tampilNama2 = () => `Hallo World`;
console.log(tampilNama2())

// Contoh penggunaan function arrow
let mahasiswa = ['Dimas Maulana', 'Azriel','Najwan Nadiefs'];
// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// });
// console.log(jumlahHuruf)

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf)
//kalau mau mengembalikan dalam bentuk object
// let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length }));
// console.table(jumlahHuruf) //bagus buat object

let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length })); //klo properti sama kyk nilai, samain aja
console.table(jumlahHuruf) //bagus buat object

