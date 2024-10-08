// core module
// file system
const fs = require('fs')
const readline = require('node:readline');
// console.log(fs)

// menuliskan string ke file (synchronous)
// try{
//     fs.writeFileSync('data/test.txt','Hallo Dimas secara synchronous di dalam folder data!') //akan membuat file test.txt di folder yang sama
// }catch(err){ //kalau sinchronouse pakenya try dan catch
//     console.log(err)
// }

// menuliskan string kd file (asynchronous)
// fs.writeFile('data/test.txt','Dimas kalo yg ini dibuat pakai asynchronous',(err)=>{
//     // console.log(err)
//     if (err) {
//         console.log('Error writing file:', err);
//         return;
//     }
//     console.log('File successfully written');
// })

// membaca isi file (synchronous)
// const data = fs.readFileSync('data/test.txt','utf-8')
// console.log(data)

// membaca isi file (asynchronous)
// fs.readFile('data/test.txt','utf8',(err,data)=>{
//     try{
//         if (err) throw err
//         console.log(data)
//     }catch(err){
//         console.log('error bro')
//     }
// })

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Masukkan nama anda: ', (nama)=>{
    console.log(`Terima kasih ${nama}`)
    rl.close()
})
