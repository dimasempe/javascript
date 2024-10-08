// destructuring
function penjumlahanPerkalian(a,b){
    return [a+b,a*b]
}
const jumlah = penjumlahanPerkalian(2,3)[0]
console.log(jumlah)
const perkali = penjumlahanPerkalian(2,3)[1]
console.log(perkali)

const [jumlah2,kali2] = penjumlahanPerkalian(2,3)
console.log(jumlah2)
console.log(kali2)
// return value array
// function kalkulasi(a,b){
//     return [a+b,a-b,a*b,a/b]
// }
// const [tambah,kurang,kali,bagi] = kalkulasi(6,4)
// console.log(bagi)

// return value object
function kalkulasi(a,b){
    return {
        tambah: a+b,
        kurang: a-b,
        kali: a*b,
        bagi:a/b
    }
}
const {kali,tambah,bagi,kurang} = kalkulasi(6,4)
console.log(kali)

// Destructuring function arguments
// const mhs1 = {
//     nama: 'Dimas Maulana Putra',
//     umur: 22,
//     email: 'dimas.maulanaputra13@gmail.com'
// }
// function cetakMhs(nama,umur){
//     return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
// }
// console.log(cetakMhs(mhs1.nama,mhs1.umur))

const mhs1 = {
    nama: 'Dimas Maulana Putra',
    umur: 22,
    email: 'dimas.maulanaputra13@gmail.com',
    nilai:{
        tugas:80,
        uts:85,
        uas:75
    }
}
function cetakMhs({nama,umur,nilai:{tugas,uas}}){
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.
    Nilai UAS saya adalah ${uas} `;
}
console.log(cetakMhs(mhs1))