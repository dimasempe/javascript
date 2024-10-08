// console.log('Halo Dimas!')

function cetakNama(nama){
    return `Halo, nama saya ${nama}`
}

const PI = 3.14

const mahasiswa = {
    nama: 'Doddy Ferdiansyah',
    umur: 21,
    // cetakMahasiswa: () =>{ //kalau pakai arraw function tidak bisa pakai this
    //     return `Halo, nama guee ${this.nama} dan saya ${this.umur} tahun`
    // }
    cetakMahasiswa(){
        return `Halo, nama guee ${this.nama} dan saya ${this.umur} tahun`
    }
}

class Orang{
    constructor(){
        console.log('Objek orang telah dibuat')
    }
}

// module.exports.cetakNama = cetakNama
// module.exports.PI = PI
// module.exports.mahasiswa = mahasiswa
// module.exports.Orang = Orang

// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang
// }

// kalau nama sama langsung aja
module.exports = {
        cetakNama,
        PI,
        mahasiswa,
        Orang
    }


