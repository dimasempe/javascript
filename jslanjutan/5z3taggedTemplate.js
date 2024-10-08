// Tagged Templates
const nama = 'Dimas Maulana';
const umur = 22;
const email = 'dimas.maulanaputra13@gmail.com'

// function coba(strings, nama,umur){ //harus urut
//     return strings;
// }
// const str = coba`Halo nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// function coba2(strings, ...values){ //ini yg otomatis
//     return values;
// }
// const str2 = coba2`Halo nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str2);

// function coba3(strings, ...values){ //ini dirangkai lagi
//     // let result = '';
//     // strings.forEach((str,i)=>{
//     //     result += `${str}${values[i] || ''}`
//     // })
//     // return result

//     return strings.reduce((result,str,i)=>`${result}${str}${values[i] || ''}`,'')
// }
// const str3 = coba3`Halo nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str3);

// Tagged Template (Highlight)
function highlight(strings, ...values){
    return strings.reduce((result,str,i)=>`${result}${str}<span class="hl">${values[i] || ''}</span>`,'')
}
const str4 = highlight`Halo nama saya ${nama}, saya ${umur} tahun. Email saya adalah ${email}`;
console.log(str4);

document.body.innerHTML = str4