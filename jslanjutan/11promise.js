// ini klo pake ajax
// $.ajax({
//     url: 'http://www.omdbapi.com/?s=avengers&apikey=b9182b17',
//     success: movies => console.log(movies)
// })

// const movies = fetch('http://www.omdbapi.com/?s=avengers&apikey=b9182b17')           
// console.log(movies) //outputnya jadi promise

// ini pakai fetch dan promisenya dijadiin json
// fetch('http://www.omdbapi.com/?s=avengers&apikey=b9182b17')
//             .then(response => response.json())
//             .then(response => console.log(response))

// Promise
// adalah object yang merepresentasikan keberhasilan atau kegagalan dari sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// kalau di JS namanya: states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// Contoh 1
// let ditepati = false
// const janji1 = new Promise((resolve,reject) => {
//     if(ditepati){
//         resolve('Janji telah ditepati!')
//     }else{
//         reject('Ingkar janji..')
//     }
// })
// // console.log(janji1)

// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response))

// Contoh 2
// let ditepati = true
// const janji2 = new Promise((resolve,reject)=>{
//     if(ditepati){
//         setTimeout(()=>{
//             resolve('Ditepati setelah beberapa waktu!')
//         },2000)
//     }else{
//         setTimeout(()=>{
//             reject('Tidak ditepati setelah beberapa waktu!')
//         },2000)
//     }
// })
// console.log('mulai')
// // console.log(janji2.then(()=>console.log(janji2)).catch(()=>console.log(janji2)))
// janji2
//     .finally(()=>console.log('selesai menunggu!'))
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response))
// console.log('selesai')

// ada Promise.all()
const film = new Promise(resolve => {
    setTimeout(()=>{
        resolve([{
            judul: 'Avengers',
            sutradara: 'Dimas Maulana',
            pemeran: 'Andi, Erik'
        }])
    },1000)
})

const cuaca = new Promise(resolve=>{
    setTimeout(()=>{
        resolve([{
            "kota": 'Bandung',
            temp: 26,
            kondisi: 'Cerah Berawan'
        }])
    },500)
})

// film.then(response => console.log(response))
// cuaca.then(response => console.log(response))
// klo mau jalanin sekaligun

Promise.all([film,cuaca])
    // .then(response => console.log(response))
    .then(response => {
        const [film,cuaca] = response
        console.log(film)
        console.log(cuaca)
    })

