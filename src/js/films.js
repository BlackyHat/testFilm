import { Notify } from 'notiflix';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
import { FilmsApiService } from './search-api';
// import debounce from 'lodash.debounce';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
const filmsApiService = new FilmsApiService();
// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 100,
// });
const refs = {
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  moreBtn: document.querySelector('.load-more'),
};
let renderImgs = 0;
let isSearchEnd = false;
//====================================================================== messages
const END_MSG = () =>
  Notify.info(`We're sorry, but you've reached the end of search results.`);
const ERR_MSG = () =>
  Notify.failure(
    `Sorry, there are no images matching your search query. Please try again.`
  );
const SUCSESS_MSG = quantity =>
  Notify.success(`Hooray! We found ${quantity} images.`);
//======================================================================

refs.form.addEventListener('submit', onSubmitSearch);
// refs.moreBtn.addEventListener('click', getFilms);
getTrendingFilms();
// hideMoreBtn();
function onSubmitSearch(e) {
  clearResults();
  e.preventDefault();
  scrollToTop();
  renderImgs = 0;
  filmsApiService.query = e.currentTarget.elements.searchQuery.value.trim();
  filmsApiService.resetResultPage();
  //   window.addEventListener('scroll', loadNext);

  getFilms();
}

function getFilms() {
  filmsApiService
    .getDataApi()
    .then(({ results, total_results }) => {
      renderImgs += results.length;
      //===============================================================
      //   console.log(filmsApiService.genres_ids_array);
      if (!total_results) {
        window.removeEventListener('scroll', loadNext);
        isSearchEnd = true;
        throw new Error(ERR_MSG());
      }
      searchResultMsg(filmsApiService.resultPage, total_results);
      createMarkup(results);

      if (total_results > renderImgs) {
        filmsApiService.incrementResultPage();
        // showMoreBtn();
      } else {
        window.removeEventListener('scroll', loadNext);
        isSearchEnd = true;
      }

      if (renderImgs === total_results && total_results > PER_PAGE) {
        throw new Error(END_MSG());
      }
    })
    .catch(error => error);
}

function getTrendingFilms() {
  filmsApiService
    .getTrendingDataApi()
    .then(({ results, total_results }) => {
      renderImgs += results.length;
      if (!total_results) {
        window.removeEventListener('scroll', loadNext);
        isSearchEnd = true;
        throw new Error(ERR_MSG());
      }
      searchResultMsg(filmsApiService.resultPage, total_results);
      createMarkup(results);

      if (total_results > renderImgs) {
        filmsApiService.incrementResultPage();
      } else {
        window.removeEventListener('scroll', loadNext);
        isSearchEnd = true;
      }

      if (renderImgs === total_results && total_results > PER_PAGE) {
        throw new Error(END_MSG());
      }
    })
    .catch(error => error);
}

function searchResultMsg(currentPage, total) {
  if (currentPage === 1) {
    SUCSESS_MSG(total);
  }
}

function createMarkup(data) {
  const markup = data
    .map(el => {
      const date = new Date(el.release_date);
      const genres_ids = [];
      el.genre_ids.forEach(el => {
        const arr = filmsApiService.genres_ids_array.genres;
        arr.forEach(({ id, name }) => {
          if (id === el) {
            genres_ids.push(name);
          }
        });
      });

      return `<div class="film-card">  <a class="film-poster__link link" href="${
        IMAGE_URL + el.poster_path
      }">
  <img src="${
    IMAGE_URL + el.poster_path
  }" class="film-poster__img" loading="lazy" />
          </a>
  <div class="info">
    <p class="info__title">
      ${el.title}
    </p>
    <p class="info__genres">
    ${genres_ids.join(
      ', '
    )} | ${date.getFullYear()} <span class="info__rating">${
        el.vote_average
      }</span>
    </p>
  </div>
</div>`;
    })
    .join('');
  refs.gallery.insertAdjacentHTML('beforeEnd', markup);
}

function clearResults() {
  refs.gallery.innerHTML = '';
}
//==================================================================show/hide Load More
// function showMoreBtn() {
//   refs.moreBtn.classList.remove('visually-hidden');
// }
// function hideMoreBtn() {
//   refs.moreBtn.classList.add('visually-hidden');
// }
//==================================================================add smooth scroll

// const smoothScroll = debounce(() => {
//   const { height: cardHeight } = document
//     .querySelector('.gallery')
//     .firstElementChild.getBoundingClientRect();
//   window.scrollBy({
//     top: cardHeight * 2,
//     behavior: 'smooth',
//   });
// }, 300);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
//==================================================================infinite scroll

// const loadNext = debounce(() => {
//   const beforeEndPx = 100;
//   if (
//     window.scrollY + window.innerHeight >
//       document.documentElement.scrollHeight - beforeEndPx &&
//     !isSearchEnd
//   ) {
//     getFilms();
//   }
// }, 150);

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
