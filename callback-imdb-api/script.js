$.ajax({
  url: "http://www.omdbapi.com/?s=avengers&apikey=dedec85a",
  success: (results) => {
    const movies = results.Search;
    let card = "";
    movies.forEach((movie) => {
      card += `
      <div class="col-md-4 my-3">
        <div class="card" style="width: 18rem">
          <img src="${movie.Poster}" class="card-img-top" />
          <div class="card-body">
              <h5 class="card-title">${movie.Title}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
              <a href="#" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#MovieDetailModal">Show Details</a>
            </div>
        </div>
      </div>
      `;
    });
    $(".movie-card-container").html(card);
  },
  error: (error) => {
    console.log(error.responseJSON.Error);
  },
});
