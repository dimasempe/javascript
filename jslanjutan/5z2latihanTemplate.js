// 1. HTMl Fragments
const mhs = {
    nama: 'Dimas Maulana Putra',
    umur: 22,
    npm: '50420379',
    email:'dimas.maulanaputra13@gmail.com'
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="npm">${mhs.npm}</span>
</div>`;
// document.body.innerHTML = el;

// 2. looping
const mhs2 = [
    {
        nama: "Dimas Maulana Putra",
        email: 'dimas.maulanaputra13@gmail.com'
    },
    {
        nama: "Doddy Firman",
        email: 'doddyfirman@gmail.com'
    },
    {
        nama: "Erikson Jayanto",
        email: 'erikson@gmail.com'
    }
];
const el2 = `<div class="mhs">
${mhs2.map(m => `<ul>
    <li>${m.nama}</li>
    <li>${m.email}</li>
</ul>`).join('')}
</div>`
// document.body.innerHTML = el2;

// 3. Conditionals
// ternary
const lagu = {
    judul: 'Tetap Dalam Jiwa',
    penyanyi: 'Isyana Sarasvati',
    feat: 'Rayi Putra'
}
const el3 = `<div class="lagu">
<ul>
<li>${lagu.penyanyi}</li>
<li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})`:``}</li>
</ul>
</div>`;
// document.body.innerHTML = el3;

// 4. Nested
// HTML Fragments bersarang
const mhs4 = {
    nama:'Dimas Maulana',
    semester: 8,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
};
function cetakMataKuliah(mataKuliah){
    return `
    <ol>
    ${mataKuliah.map(mk=>`<li>${mk}</li>`).join('')}
    </ol>
    `;
}
const el4 = `<div class="mhs">
<h2>${mhs4.nama}</h2>
<span class="semester">Semester: ${mhs4.semester}</span>
<h4>Mata Kuliah: </h4>
${cetakMataKuliah(mhs4.mataKuliah)}
</div>`;
document.body.innerHTML = el4;
