class MoviesApi {
  constructor({ url }) {
    this._url = url;
  }

  checRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getAllMovies() {
    return fetch(`${this._url}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => this.checRes(res));
  }
}

const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi;
