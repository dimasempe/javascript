// Callback

// 1. Synchronous Callback
// function halo(nama){
//     alert(`Halo, ${nama}`)
// }
// function tampilkanPesan(callback){
//     const nama = prompt('Masukkan Nama: ')
//     callback(nama)
// }
// tampilkanPesan(halo)

// 2. Anonymous Function
// function tampilkanPesan(callback){
//     const nama = prompt('Masukkan Nama: ')
//     callback(nama)
// }
// // tampilkanPesan(function(){
// // })
// // Bisa juga pakai Arrow Function
// tampilkanPesan(nama => alert(`Halo, ${nama}`))

// 3. Gambaran Synchronous Callback
// const mhs = [
//     {
//         "nama"          :"Dimas Maulana Putra",
//         "nrp"           :"50420379",
//         "email"         :"dimas.maulanaputra13@gmail.com",
//         "jurusan"       :"Informatika",
//         "idDosenWali"   :1,
//     },
//     {
//         "nama"          :"Dinda Aulia Putri",
//         "nrp"           :"14373574",
//         "email"         :"dinda@gmail.com",
//         "jurusan"       :"Teknik Mesin",
//         "idDosenWali"   :2,
//     },
//     {
//         "nama"          :"Julaeha",
//         "nrp"           :"37349833",
//         "email"         :"julaeha@gmail.com",
//         "jurusan"       :"Arsitektur",
//         "idDosenWali"   :3,
//     },
// ]
// console.log('mulai')
// mhs.forEach(m => {
//     for(let i = 0; i < 10000000; i++){
//         let date = new Date()
//     }
//     console.log(m.nama)
// })
// console.log('selesai')

// 4. Asynchronous Callback (pakai Javascript Murni)
// function getDataMahasiswa(url,success,error){
//     let xhr = new XMLHttpRequest()

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 success(xhr.response)
//             }
//             else if(xhr.status === 404){
//                 error()
//             }
//         }
//     }

//     xhr.open('get',url)
//     xhr.send()
// }
// console.log('mulai')
// getDataMahasiswa('data/mahasiswa.json',result=>{
//     // console.log(JSON.parse(result))
//     const mhs = JSON.parse(result)
//     mhs.forEach(m => console.log(m.nama))
// },)
// console.log('selesai')

// 5. Asyncronus pakai JQuery
console.log('mulai')
$.ajax({
    url: 'data/mahasiswa.json',
    success:(result)=>{
        result.forEach(m=>console.log(m.nama))
       
    },
    error:(e)=>{
        console.log(e.responseText)
    }
})
console.log('selesai')

// Ada juga gak pake JQuery, namanya Fetch