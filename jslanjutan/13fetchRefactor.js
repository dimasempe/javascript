// $('.search-button').on('click', function(){
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=b9182b17&s=' + $('.input-keyword').val(),
//         success: results => {
//             const movies = results.Search 
//             // console.log(movies)
//             let cards = ''
//             movies.forEach(movie => {
//                 cards += showCards(movie)
//             }); 
//             $('.movie-container').html(cards)
    
//             // Ketika tombol detail di klik
//             $('.modal-detail-button').on('click', function(){
//                 // console.log($(this).data('imdbid'))
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=b9182b17&i=' + $(this).data('imdbid'),
//                     success: detail => {
//                         const movieDetail = showMovieDetails(detail)
                    
//                         $('.modal-body').html(movieDetail)
//                     },
//                     error: (e)=>{
//                         console.log(e.responseText)
//                     }
//                 })
//             })
            
//         },
//         error: (e)=>{
//             console.log(e.responseText)
//         }
//     })
// })

// menggunakan fetch
// const searchButton = document.querySelector('.search-button')
// searchButton.addEventListener('click', function(){
//     const inputKeyword = document.querySelector('.input-keyword')
//     fetch('http://www.omdbapi.com/?apikey=b9182b17&s=' + inputKeyword.value)
//         // .then(response => console.log(response.json()))
//         .then(response => response.json())
//         // .then(response => console.log(response.Search))
//         .then(response => {
//             const movies = response.Search 
//             let cards = ''
//             movies.forEach(movie => cards += showCards(movie))
//             const movieContainer = document.querySelector('.movie-container')
//             movieContainer.innerHTML = cards

//             // Ketika tombol detail di klik
//             const modalDetailButton = document.querySelectorAll('.modal-detail-button')
//             modalDetailButton.forEach(btn => {
//                 btn.addEventListener('click',function(){
//                     const imdbid = this.dataset.imdbid
//                     // console.log(this)
//                     // console.log(imdbid)
//                     fetch('http://www.omdbapi.com/?apikey=b9182b17&i='+imdbid)
//                         .then(response => response.json())
//                         .then(detail => {
//                             const movieDetail = showMovieDetails(detail)
//                             const modalBody = document.querySelector('.modal-body')
//                             modalBody.innerHTML = movieDetail
//                         })
//                 })
//             })
//         })

// })

// function showCards(movie){
//     return `
// <div class="col-md-4 my-3">
//     <div class="card" style="width: 18rem;">
//         <img src="${movie.Poster}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${movie.Title}</h5>
//           <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
//           <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show Details</a>
//         </div>
//       </div>
// </div>`
// }

// function showMovieDetails(detail){
//     return `
//     <div class="container-fluid">
//         <div class="col-md-3">
//             <img src="${detail.Poster}" class="img-fluid" alt="">
//         </div>
//         <div class="col-md">
//             <ul class="list-group">
//                 <li class="list-group-item"><h4>${detail.Title} (${detail.Year})</h4></li>
//                 <li class="list-group-item"><strong>Director : </strong>${detail.Director}</li>
//                 <li class="list-group-item"><strong>Actors : </strong>${detail.Actors}</li>
//                 <li class="list-group-item"><strong>Writer : </strong>${detail.Writer}</li>
//                 <li class="list-group-item"><strong>Plot : </strong><br>${detail.Plot}</li>
//                 </ul>
//         </div>
//     </div>`
// }

// menggunakan fetch tapi di refactor
const searchButton = document.querySelector('.search-button')
searchButton.addEventListener('click', async function(){
    const inputKeyword = document.querySelector('.input-keyword')
    const movies = await getMovies(inputKeyword.value)
    // console.log(movies)
    updateUI(movies)
})

function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=b9182b17&s=' + keyword)
        // .then(response => console.log(response.json()))
        .then(response => response.json())
        // .then(response => console.log(response.Search))
        .then(response => response.Search)
}

// event binding
document.addEventListener('click', async function(element){
    if(element.target.classList.contains('modal-detail-button')){
        // console.log('ok')
        const imdbid = element.target.dataset.imdbid
        const movieDetail = await getMovieDetails(imdbid)
        updateUIDetail(movieDetail)
    }
})
function getMovieDetails(imdbid){
    return fetch('http://www.omdbapi.com/?apikey=b9182b17&i='+imdbid)
                        .then(response => response.json())
                        .then(detail => detail)
}
function updateUIDetail(movieDetail){
    const detail = showMovieDetails(movieDetail)
    const modalBody = document.querySelector('.modal-body')
    modalBody.innerHTML = detail
}

function updateUI(movies){
    let cards = ''
    movies.forEach(movie => cards += showCards(movie))
    const movieContainer = document.querySelector('.movie-container')
    movieContainer.innerHTML = cards
}

function showCards(movie){
    return `
<div class="col-md-4 my-3">
    <div class="card" style="width: 18rem;">
        <img src="${movie.Poster}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${movie.Title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
          <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show Details</a>
        </div>
      </div>
</div>`
}

function showMovieDetails(detail){
    return `
    <div class="container-fluid">
        <div class="col-md-3">
            <img src="${detail.Poster}" class="img-fluid" alt="">
        </div>
        <div class="col-md">
            <ul class="list-group">
                <li cass="list-group-item"><h4>${detail.Title} (${detail.Year})</h4></li>
                <li class="list-group-item"><strong>Director : </strong>${detail.Director}</li>
                <li class="list-group-item"><strong>Actors : </strong>${detail.Actors}</li>
                <li class="list-group-item"><strong>Writer : </strong>${detail.Writer}</li>
                <li class="list-group-item"><strong>Plot : </strong><br>${detail.Plot}</li>
                </ul>
        </div>
    </div>`
}