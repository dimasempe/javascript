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
    rl.question('Masukkan nomor HP Anda: ', (noHP)=>{
        // console.log(`Terima kasih ${nama}, sudah menambahkan nomor hp ${noHP}`)
        const contact = {
            nama,
            noHP
        }
        const file = fs.readFileSync('data/contacts.json','utf-8')
        // console.log(file)
        const contacts = JSON.parse(file)
        contacts.push(contact)
        console.log(contacts)

        fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
        console.log('Terima kasih telah memasukkan data')
        rl.close()
    })
    
})
