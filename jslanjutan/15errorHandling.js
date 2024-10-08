// menggunakan fetch tapi di refactor
const searchButton = document.querySelector('.search-button')
searchButton.addEventListener('click', async function(){
    try{
        const inputKeyword = document.querySelector('.input-keyword')
        const movies = await getMovies(inputKeyword.value)
        // console.log(movies)
        updateUI(movies)
    } catch(err){
        // console.log(err)
        alert(err)
    }
})
function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=b9182b17&s=' + keyword)
        // .then(response => console.log(response.json()))
        .then(response => {
            // console.log(response)
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response.json()
        })
        // .then(response => console.log(response.Search))
        .then(response =>{
            // console.log(response)
            if(response.Response === 'False'){
                throw new Error(response.Error)
            }
            // console.log(response)
            return response.Search
        })
}
function updateUI(movies){
    let cards = ''
    movies.forEach(movie => cards += showCards(movie))
    const movieContainer = document.querySelector('.movie-container')
    movieContainer.innerHTML = cards
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
                <li class="list-group-item"><h4>${detail.Title} (${detail.Year})</h4></li>
                <li class="list-group-item"><strong>Director : </strong>${detail.Director}</li>
                <li class="list-group-item"><strong>Actors : </strong>${detail.Actors}</li>
                <li class="list-group-item"><strong>Writer : </strong>${detail.Writer}</li>
                <li class="list-group-item"><strong>Plot : </strong><br>${detail.Plot}</li>
                </ul>
        </div>
    </div>`
}