import axios from 'axios';
//CONSTANTS
const URL = 'https://api.themoviedb.org/3';
const API_KEY_TMDb = '174cdfa11f0283dda9735618fe57e2fe';
const QUERY_MOVIE_SEARCH = '/search/movie';
const GET_TRENDING = '/trending/movie/week';
const GET_GENRE_LIST = '/genre/movie/list';
const GET_FILM_INFO = '/movie/';

export class FilmsApiService {
  constructor() {
    this.searchQuery = '';
    this.resultPage = '';
    this.genres_ids_array;
    this.movieId = '';
  }

  async getDataApi(currentPage) {
    try {
      const searchParams = new URLSearchParams({
        api_key: API_KEY_TMDb,
        query: this.searchQuery,
        include_adult: false,
        language: 'en',
        page: currentPage,
      });

      const url = `${URL}${QUERY_MOVIE_SEARCH}?${searchParams}`;
      const response = await axios.get(url);
      if (!response.status) {
        throw new Error('Something goes wrong');
      }
      // this.resultPage += 1;
      return response.data;
    } catch (error) {
      console.log(error.message);
      //   Notify.failure(error.message);
    }
  }

  async getTrendingDataApi(currentPage) {
    try {
      const searchParams = new URLSearchParams({
        api_key: API_KEY_TMDb,
        language: 'en',
        page: currentPage,
      });
      const url = `${URL}${GET_TRENDING}?${searchParams}`;
      const response = await axios.get(url);
      //
      if (!this.genres_ids_array) {
        const genres_ids = await axios.get(
          `${URL}${GET_GENRE_LIST}?${searchParams}`
        );
        this.genres_ids_array = genres_ids.data;
      }
      if (!response.status) {
        throw new Error('Something goes wrong');
      }
      // this.resultPage += 1;

      return response.data;
    } catch (error) {
      console.log(error);
      // Notify.failure(error.message);
    }
  }

  // async getTokenApi() {
  //   try {
  //     const getToken = new URLSearchParams({
  //       api_key: API_KEY_TMDb,
  //     });
  //     const urlToken = `${URL}/authentication/token/new?${getToken}`;
  //     const token = await axios.get(urlToken);
  //     this.REQUEST_TOKEN = token.data.request_token;
  //     const request = await axios.get(
  //       `https://www.themoviedb.org/authenticate/${this.REQUEST_TOKEN}`
  //     );
  //     console.log(request);
  //     const urlSession = `${URL}/authentication/session/new?${getToken}`;
  //     const opt = {
  //       body: JSON.stringify(this.token),
  //       Headers: { 'Content-Type': 'application/ json; charset=UTF-8' },
  //     };

  //     const response = await axios
  //       .post(
  //         'https://api.themoviedb.org/3/authentication/session/new?api_key=174cdfa11f0283dda9735618fe57e2fe',
  //         { request_token: this.token }
  //       )
  //       .them(r => console.log(r));
  //     // if (!response.status) {
  //     //   throw new Error('Something goes wrong');
  //     // }

  //     // return response.data;
  //   } catch (error) {
  //     console.log(error.message);
  //     //   Notify.failure(error.message);
  //   }
  // }
  async getInfoApi() {
    try {
      const searchParams = new URLSearchParams({
        api_key: API_KEY_TMDb,
        language: 'en',
      });
      const url = `${URL}${GET_FILM_INFO}${this.movieId}?${searchParams}`;
      const response = await axios.get(url);
      if (!response.status) {
        throw new Error('Something goes wrong');
      }
      return response.data;
    } catch (error) {
      console.log(error.message);
      //   Notify.failure(error.message);
    }
  }

  resetResultPage() {
    this.resultPage = 1;
  }
  incrementResultPage() {
    this.resultPage += 1;
  }

  // async addFav(id) {
  //   try {
  //     const favParams = new URLSearchParams({
  //       api_key: API_KEY_TMDb,
  //       session_id: '2022',
  //     });
  //     const film = {
  //       media_type: 'movie',
  //       media_id: 550,
  //       favorite: true,
  //     };
  //     const opt = {
  //       method: 'POST',
  //       body: JSON.stringify(film),
  //       Headers: { 'Content-Type': 'application/ json; charset=UTF-8' },
  //     };

  //     // const options = {
  //     //   method: 'POST',
  //     //   body: JSON.stringify(postToAdd),
  //     //   headers: {
  //     //     'Content-Type': 'application/json; charset=UTF-8',
  //     //   },
  //     // };
  //     const url = `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=174cdfa11f0283dda9735618fe57e2fe&session_id=615d007269e1c739e17243c7fd663948`;
  //     const response = await axios.post(url, opt);
  //     if (!response.status) {
  //       throw new Error('Something goes wrong');
  //     }
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error.message);
  //     //   Notify.failure(error.message);
  //   }
  // }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  //   set movieId(newMovieId) {
  //     this.movieId = newMovieId;
  //   }
}
