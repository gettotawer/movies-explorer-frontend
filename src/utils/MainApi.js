class MainApi {
  constructor({ url }) {
    this._url = url;
  }

  checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => this.checkRes(res),
      // return res.json();
    );
  }

  saveFilm(film) {
    return fetch(`${this._url}/movies`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        country: film.country,
        director: film.director,
        duration: film.duration,
        year: film.year,
        description: film.description,
        image: `https://api.nomoreparties.co${film.image.url}`,
        trailerLink: film.trailerLink,
        thumbnail: `https://api.nomoreparties.co${film.image.formats.thumbnail.url}`,
        movieId: film.id.toString(),
        nameRU: film.nameRU,
        nameEN: film.nameEN,
      }),
    }).then((res) => this.checkRes(res));
  }

  deleteFilm(id) {
    return fetch(`${this._url}/movies/${id}`, {
      credentials: 'include',
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => this.checkRes(res));
  }
}

const mainApi = new MainApi({
  url: 'https://api.gettotawer-diploma.nomoredomains.icu',
});

export default mainApi;
