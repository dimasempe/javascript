const { type } = require("os");
const contacts = require("./contacts.js");
const yargs = require("yargs");
// const {tulisPertanyaan,simpanContact} = require('./contacts.js') //bisa menggunakan file destructuring

// const main = async () => {
//   //   const nama = await pertanyaan1();
//   //   const noHP = await pertanyaan2();
//   //   const email = await pertanyaan3()

//   const nama = await contacts.tulisPertanyaan("Masukkan nama Anda: ");
//   const noHP = await contacts.tulisPertanyaan("Masukkan nomor HP Anda: ");
//   const email = await contacts.tulisPertanyaan("Masukkan email Anda: ");

//   contacts.simpanContact(nama, email, noHP);
// };
// main();


// console.log(process.argv[2])
// console.log(yargs.argv)
// yargs.command('add','Menambahkan contact baru',()=>{},(argv)=>{
//     console.log(argv.nama)
// })


yargs.command({
  command: "add",
  describe: "menambahkan contact baru",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Email",
      demandOption: false,
      type: "string",
    },
    noHP: {
      describe: "Nomor Telepon",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.simpanContact(argv.nama,argv.email,argv.noHP)
    // const contact = {
    //     nama:argv.nama,
    //     email:argv.email,
    //     noHP:argv.noHP
    // }
    // console.log(contact)
  },
}).demandCommand();


// menampilkan daftar semua nama kontak
yargs.command({
    command:'list',
    describe: "Menampilkan semua nama & no HP contact",
    handler(){
        contacts.listContact()
    }
}).demandCommand()

yargs.parse();

// menampilkan detail sebuah contact
yargs.command({
    command:'detail',
    describe: "Menampilkan detail sebuah contact berdasarkan nama",
    builder:{
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: "string",
          },
    },
    handler(argv){
        contacts.detailContact(argv.nama)
    }
}).demandCommand()

// menghapus contact berdasarkan nama
yargs.command({
    command:'delete',
    describe: "Menghapus sebuah contact berdasarkan nama",
    builder:{
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: "string",
          },
    },
    handler(argv){
        contacts.deleteContact(argv.nama)
    }
}).demandCommand()

yargs.parse();


// akan terjadi callback hell, gantinya memakai promise (async await)
// rl.question('Masukkan nama anda: ', (nama)=>{
//     rl.question('Masukkan nomor HP Anda: ', (noHP)=>{
//         rl.question('Masukkan email anda: ',(email)=>{
//         // console.log(`Terima kasih ${nama}, sudah menambahkan nomor hp ${noHP}`)
//         const contact = {
//             nama,
//             noHP,
//             email
//         }
//         const file = fs.readFileSync('data/contacts.json','utf-8')
//         // console.log(file)
//         const contacts = JSON.parse(file)
//         contacts.push(contact)
//         console.log(contacts)

//         fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
//         console.log('Terima kasih telah memasukkan data')
//         rl.close()
//         })
//     })
// })
