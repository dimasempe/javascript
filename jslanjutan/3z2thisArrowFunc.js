// Constructor Function
const Mahasiswa = function(){
    this.nama = 'Dimas';
    this.umur = 22;
    this.sayHello = function(){
        console.log(`Halo, nama saya ${this.nama}, dan saya berumur ${this.umur} tahun`)
    }
}
const dimas = new Mahasiswa()

// Arrow Function (untuk membedakan dari ekspresif/deklaratif)
// const Mahasiswa2 = function(){ //tidak bisa mengubah constructor function ke arrow function
//     this.nama = 'Dimas';
//     this.umur = 22;
//     this.sayHello = () => { //kalau method bisa //tidak mengenal this di object literal (arfunc)
//         console.log(`Halo, nama saya ${this.nama}, dan saya berumur ${this.umur} tahun`)
//     }

//     setInterval(function(){ //this yg ini langsung nembus ke window
//         console.log(this.umur++);
//     },500);

//     setInterval(()=>{ //arrow function tidak mengenal this
//         console.log(this.umur++);
//     },500);
// }
// const dimas2= new Mahasiswa2()

const box = document.querySelector('.box');
box.addEventListener('click', function(){
    // console.log(this);

    let satu = 'size'
    let dua = 'caption'

    if(this.classList.contains(satu)){
        [satu,dua] = [dua,satu] //tuker isi
    }

    this.classList.toggle('size')
    // setTimeout(function(){ //tidak bisa pake ini, harus pake arrow function
    //     this.classList.toggle('caption')
    // },600)

    setTimeout(()=>{ 
        this.classList.toggle('caption')
    },600)
});