// template literals / template string
const nama = 'Dimas M';
const umur = 22;
console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun`)

// Embedded Expression
console.log(`${1+1}`)
console.log(`${alert('Halooo')}`)
const x = 10
console.log(`${(x%2==0)?'genap':'ganjil'}`)

// HTMl Fragments
const mhs = {
    nama: 'Dimas Maulana Putra',
    umur: 22,
    npm: '50420379',
    email:'dimas.maulanaputra13@gmail.com'
};

const elemen = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.npm}</span>
<h1></h1>
<h2></h2>
</div>`;
        
console.log(elemen)