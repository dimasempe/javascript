const { rejects } = require("assert");
const fs = require("fs");
const readline = require("node:readline");
const { resolve } = require("path");
const chalk = require("chalk");
const validator = require("validator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Membuat folder data jika belum ada
if (!fs.existsSync("./data")) {
  fs.mkdirSync("./data");
}

// Membuat file contacts.json jika belum ada
if (!fs.existsSync("./data/contacts.json")) {
  fs.writeFileSync("./data/contacts.json", "[]", "utf-8");
}

const pertanyaan1 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukkan nama Anda: ", (nama) => {
      resolve(nama);
    });
  });
};

const pertanyaan2 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukkan nomor HP Anda: ", (noHP) => {
      resolve(noHP);
    });
  });
};

const pertanyaan3 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukkan email Anda: ", (email) => {
      resolve(email);
    });
  });
};

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (jawaban) => {
      resolve(jawaban);
    });
  });
};

const loadContact = () => {
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts
};

const simpanContact = (nama, email, noHP) => {
  const contact = {
    //ini object
    nama,
    noHP,
    email,
  };

  const contacts = loadContact()

  //   cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(
      chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama lain!")
    );
    return;
  }
  //   cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Email tidak valid!"));
      return;
    }
  }

  //   cek nohp
  if (!validator.isMobilePhone(noHP, "id-ID")) {
    console.log(chalk.red.inverse.bold("Nomor HP tidak valid!"));
    return;
  }
  contacts.push(contact);
  console.log(contacts);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  console.log(chalk.green.inverse.bold("Terima kasih telah mengisi data"));
};

const listContact = () => {
    const contacts = loadContact()
    console.log(chalk.cyan.inverse.bold("Daftar Kontak"));
    contacts.forEach((contact,i) => {
        console.log(`${i+1}. ${contact.nama} - ${contact.noHP} -${contact.email}`)
    });
};

const detailContact = (nama)=> {
    const contacts = loadContact()
    const contact = contacts.find((contact)=>contact.nama.toLowerCase() === nama.toLowerCase())

    if(!contact){
        console.log(chalk.red.inverse.bold("Nama ini tidak ditemukan"));
        return
    }
    console.log(chalk.blue.inverse.bold(contact.nama));
    console.log(contact.noHP)
    if(contact.email){
        console.log(contact.email)
    }
}   

const deleteContact = (nama)=> {
    const contacts = loadContact()
    const newContacts = contacts.filter((contact)=>contact.nama.toLowerCase() !== nama.toLowerCase())

    if(contacts.length === newContacts.length){
        console.log(chalk.red.inverse.bold("Nama ini tidak ditemukan"));
        return
    }
    fs.writeFileSync("data/contacts.json", JSON.stringify(newContacts));
    console.log(chalk.red.inverse.bold(`Data contact ${nama} berhasil dihapus!`));

}


module.exports = { tulisPertanyaan, simpanContact, listContact, detailContact, deleteContact };
