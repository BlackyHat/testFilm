// import { Notify } from 'notiflix';
import { FilmsApiService } from './search-api';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
const filmsApiService = new FilmsApiService();

const refs = {
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  spinner: document.querySelector('.loading'),
  pagination: document.querySelector('.pagination'),
};
let renderFilmCards = 0;
let totalPages = 0;
let isSearchEnd = false;
let page = 1;
let setPages = 0;
let lastQuery = '';
//====================================================================== messages
// const END_MSG = () =>
//   Notify.info(`We're sorry, but you've reached the end of search results.`);
// const ERR_MSG = () =>
//   Notify.failure(
//     `Sorry, there are no images matching your search query. Please try again.`
//   );
// const SUCSESS_MSG = quantity =>
//   Notify.success(`Hooray! We found ${quantity} images.`);
//======================================================================

refs.form.addEventListener('submit', onSubmitSearch);
//======================================================================
getTrendingFilms(page);
//======================================================================
function onSubmitSearch(e) {
  clearResults();
  e.preventDefault();
  scrollToTop();
  //======================================================================
  refs.spinner.classList.remove('visually-hidden');
  //======================================================================
  renderFilmCards = 0;
  filmsApiService.query = e.currentTarget.elements.searchQuery.value.trim();
  filmsApiService.resetResultPage();
  markupPang(0);
  page = 1;
  getFilms(page);
}

function getFilms(page) {
  lastQuery = 'search';
  filmsApiService
    .getDataApi(page)
    .then(({ results, total_results, total_pages }) => {
      totalPages = total_pages;
      //===============================================================
      if (!total_results) {
        //======================================================================
        refs.spinner.classList.add('visually-hidden');
        //======================================================================
        refs.gallery.innerHTML = `<h2>Nothing finding, try some else...</h2>`;
        window.removeEventListener('scroll', loadNext);
        isSearchEnd = true;
        throw new Error();
        // throw new Error(ERR_MSG());
      }
      // searchResultMsg(filmsApiService.resultPage, total_results);
      createMarkup(results);
      //======================================================================
      refs.spinner.classList.add('visually-hidden');
      //======================================================================

      if (total_results > renderFilmCards) {
        filmsApiService.incrementResultPage();
      } else {
        isSearchEnd = true;
      }

      if (renderFilmCards === total_results && total_results > PER_PAGE) {
        // throw new Error(END_MSG());
        throw new Error();
      }
    })
    .catch(error => {
      //   markupError();
      return error;
    });
}

function getTrendingFilms(pageS) {
  lastQuery = 'trending';
  //======================================================================
  refs.spinner.classList.remove('visually-hidden');
  //======================================================================

  filmsApiService
    .getTrendingDataApi(pageS)
    .then(({ page, results, total_results, total_pages }) => {
      //
      totalPages = total_pages;
      renderFilmCards += results.length;
      //
      if (!total_results) {
        isSearchEnd = true;
        throw new Error();

        // throw new Error(ERR_MSG());
      }

      // searchResultMsg(filmsApiService.resultPage, total_results);
      createMarkup(results);
      //======================================================================
      refs.spinner.classList.add('visually-hidden');
      //======================================================================

      if (page === total_pages) {
        isSearchEnd = true;
        // throw new Error(END_MSG());
      }

      // if (renderFilmCards === total_results && total_results > PER_PAGE) {
      //   throw new Error();
      //   // throw new Error(END_MSG());
      // }
    })
    .catch(error => {
      //   markupError();
      return error;
    });
}

// function searchResultMsg(currentPage, total) {
//   if (currentPage === 1) {
//     // SUCSESS_MSG(total);
//   }
// }

function createMarkup(data) {
  const markup = data
    .map(el => {
      //
      const date = new Date(el.release_date);
      const genres_ids = [];
      //
      el.genre_ids.forEach(el => {
        const arr = filmsApiService.genres_ids_array.genres;
        arr.forEach(({ id, name }) => {
          if (id === el) {
            genres_ids.push(name);
          }
        });
      });

      return `<li class="gallery__item" id="${el.id}">
            <a class="film-card"">
                    <img src="${IMAGE_URL + el.poster_path}" 
                        class="film-poster__img" loading="lazy" />
                  

                <div class="info"">
                <p class="info__title">${el.title}</p>

                  <p class="info__genres">
                  ${genres_ids.join(', ')} | ${date.getFullYear()} 
                  <span class="info__rating">
                  ${el.vote_average.toFixed(1)}</span>
               </p>
            </div>

            </a>
</li>`;
    })
    .join('');
  //
  refs.gallery.innerHTML = markup;
}

// function markupError() {
//   return `<div class="film-card">  <p class="error-info">Ooops.... 404 error </p></div>`;
// }

function clearResults() {
  refs.gallery.innerHTML = '';
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
//==================================================================

/*
    {
      "poster_path": "/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
      "adult": false,
      "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
      "release_date": "2012-04-25",
      "genre_ids": [
        878,
        28,
        12
      ],
      "id": 24428,
      "original_title": "The Avengers",
      "original_language": "en",
      "title": "The Avengers",
      "backdrop_path": "/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg",
      "popularity": 7.353212,
      "vote_count": 8503,
      "video": false,
      "vote_average": 7.33
    },

    */

/*
adult: false
>>>>!!!!!!<<<<<< backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
belongs_to_collection: null
budget: 200000000
>>>   genres: [{id: 28, name: "Action"}, {id: 14, name: "Fantasy"}, {id: 878, name: "Science Fiction"}]
homepage: "https://www.dc.com/BlackAdam"
>>>   id: 436270
imdb_id: "tt6443346"
original_language: "en"
>>>   original_title: "Black Adam"
>>>   overview: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world."
>>>   popularity: 15314.93
>>>   poster_path: "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"
production_companies: [,…]
production_countries: [{iso_3166_1: "US", name: "United States of America"}]
release_date: "2022-10-19"
revenue: 368000000
runtime: 125
spoken_languages: [{english_name: "Danish", iso_639_1: "da", name: "Dansk"},…]
status: "Released"
tagline: "The world needed a hero. It got Black Adam."
>>>   title: "Black Adam"
video: false
>>>   vote_average: 7.29
>>>   vote_count: 2096
*/

refs.pagination.addEventListener('click', onPagination);

function onPagination(e) {
  if (e.target.classList.contains('pagination__link')) {
    page = e.target.dataset.value;
    //
    let action = e.target.dataset.action;
    // && totalPages >= setPages + 5 && !isSearchEnd
    if (action) {
      switch (action) {
        case 'increment':
          setPages += 1;
          break;
        case 'decrement':
          setPages > 0 ? (setPages -= 1) : setPages;
          break;
        case 'prev-five':
          setPages > 5 ? (setPages -= 5) : (setPages = 0);
          break;
        case 'next-five':
          setPages += 5;
          break;
        default:
          setPages;
          break;
      }
      markupPang(setPages);
    }

    if (!action) {
      let prevBtn = e.currentTarget.querySelector('.page-active');
      if (prevBtn) {
        prevBtn.classList.remove('page-active');
      }
      const nextBtn = e.target;
      nextBtn.classList.add('page-active');
      if (page > totalPages) {
        return;
      }
      switch (lastQuery) {
        case 'trending':
          getTrendingFilms(page);
          break;
        case 'search':
          getFilms(page);
          break;
      }
    }
  }
}

function markupPang(setPages) {
  const markup = ` <li class="pagination__item "><a class="pagination__link link" data-action="decrement">
                </a>
            </li>
            <li class="pagination__item"><a class="pagination__link link" data-action="prev-five">...</a>
            </li>
            <li class="pagination__item"><a class="pagination__link page-active link" data-value="${
              setPages + 1
            }">${setPages + 1}</a></li>
            <li class="pagination__item"><a class="pagination__link page link" data-value="${
              setPages + 2
            }">${setPages + 2}</a></li>
            <li class="pagination__item"><a class="pagination__link page link" data-value="${
              setPages + 3
            }">${setPages + 3}</a></li>
            <li class="pagination__item"><a class="pagination__link page link" data-value="${
              setPages + 4
            }">${setPages + 4}</a></li>
            <li class="pagination__item"><a class="pagination__link page link" data-value="${
              setPages + 5
            }">${setPages + 5}</a></li>
            <li class="pagination__item"><a class="pagination__link page link" data-action="next-five">...</a>
            </li>
            <li class="pagination__item"><a class="pagination__link link" data-action="increment">
                </a>
            </li>`;
  refs.pagination.innerHTML = markup;
}
