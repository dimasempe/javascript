// ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'))
console.log(videos)

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
// console.log(jsLanjut)

// ambil durasi masing-masing video
    .map(item => item.dataset.duration)
    // console.log(jsLanjut)
// ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        //10:33 -> [10,30]
        const parts = waktu.split(':').map(part => parseFloat(part))
        return (parts[0]*60) + parts[1]
    })
    // console.log(jsLanjut)


// jumlahkan semua detiknya
    .reduce((total, detik) => total+detik,0);
    // console.log(jsLanjut)

// ubah formatnya jadi jam menit detik
    const jam = Math.floor(jsLanjut/3600)
    // console.log(jam)
    jsLanjut = jsLanjut - jam * 3600
    const menit = Math.floor(jsLanjut / 60)
    const detik = jsLanjut - menit * 60

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`

const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo =  document.querySelector('.jumlah-video')
pJmlVideo.textContent = `${jmlVideo} video`