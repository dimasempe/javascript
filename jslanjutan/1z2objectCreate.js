// 2. Function Declaration (untuk management memori yg bagus)

const methodMahasiswa = {
    makan: function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`)
    },
    main: function(jam){
        this.energi -= jam;
        console.log(`Aloo ${this.nama}, selamat main!`)
    },
    tidur: function(jam){
        this.energi += jam*2;
        console.log(`Hai ${this.nama}, selammat tidur!`)
    }
};

function Mahasiswa(nama,energi){
    let mahasiswa = Object.create(methodMahasiswa); //Object.create() sama dengan {}
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    //sudah bisa menggunakan methodMahasiswa
    return mahasiswa;
}
let dimas = Mahasiswa('Dimskuy',100)

