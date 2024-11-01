const fs = require("fs");

//Membuat folder data jika belum ada
if (!fs.existsSync("./data")) {
  fs.mkdirSync("./data");
}

// Membuat file contacts.json jika belum ada
if (!fs.existsSync("./data/contacts.json")) {
  fs.writeFileSync("./data/contacts.json", "[]", "utf-8");
}

// Ambil semua contact di contacts.json
const loadContacts = () => {
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

// Mencari contact yang dipilih
const findContact = (nama) => {
  const contacts = loadContacts();
  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );
  return contact;
};

// Menulis / menimpa file contacts.json dengan data baru
const saveContacts = (contacts)=>{
  fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
}

// Menambahkan contact
const addContact = (contact)=>{
  const contacts = loadContacts()
  contacts.push(contact)
  saveContacts(contacts)
}

// Cek nama yang duplikat
const cekDuplikat = (nama)=>{
  const contacts = loadContacts()
  return contacts.find((contact)=>contact.nama.toLowerCase() === nama.toLowerCase())
}

module.exports = { loadContacts, findContact, addContact, cekDuplikat };
