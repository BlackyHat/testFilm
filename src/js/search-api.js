import axios from 'axios';
// import { Notify } from 'notiflix';
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
    this.resultPage = 5;
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
      Notify.failure(error.message);
    }
  }

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

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  //   set movieId(newMovieId) {
  //     this.movieId = newMovieId;
  //   }
}
