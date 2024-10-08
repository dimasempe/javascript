// const nama = 'Dimas Maulana Putra'
// const cetakNama = (nama)=>`Hai, nama saya ${nama}`
// console.log(cetakNama(nama))
// console.log(window)

// const fs = require('fs') //untuk core modul
// const cetakNama = require('./coba') //mengimport local module
const coba = require('./coba')
// const moment = require('moment') //third party module / npm module / node_modules

require('./coba') // untuk manggil yg ada di coba.js
// console.log('Halawww Dimss')
// console.log(cetakNama('Dimas Maulans'))

console.log(coba.cetakNama('Dimskuy'),
                coba.PI, 
                coba.mahasiswa.cetakMahasiswa(), 
                new coba.Orang()
                )

