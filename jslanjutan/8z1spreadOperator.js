// Spread Operator
// memecah iterables menjadi single element

const mhs=['Shandika','Dody','Erik'];
console.log(...mhs[0])

// Menggabungkan 2 array
const dosen =['Ade','Hendra','Wanda'];
const orang = [...mhs,...dosen]
console.log(orang)  
const orang2 = mhs.concat(dosen);
console.log(orang2)
const orang3 = [...mhs,'Aji',...dosen]
console.log(orang3)

// meng-copy array
// const mhs2 = mhs //bisa keubah mhs padahal mhs2 yg diubah
// console.log(mhs2) 
const mhs1 = [...mhs];
mhs1[0] = 'Fajar';
console.log(mhs1)

const liMhs = document.querySelectorAll('li');
console.log(liMhs[0].textContent)
// const mhs4 = [];
// for(let i=0;i<liMhs.length;i++){
//     mhs4.push(liMhs[i].textContent);
// }
// console.log(mhs4)
const mhs4 = [...liMhs].map(m=>m.textContent);
console.log(mhs4)

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h=>`<span>${h}</span>`).join('');
// console.log(huruf)
nama.innerHTML = huruf;
