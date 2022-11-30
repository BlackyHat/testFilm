import { FilmsApiService } from './search-api';

const filmsApiService = new FilmsApiService();
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
const refs = {
  gallery: document.querySelector('.gallery'),
  spinner: document.querySelector('.loading'),
};

refs.gallery.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
  e.preventDefault();
  if (e.target.parentNode.dataset.id) {
    // refs.spinner.classList.remove('visually-hidden');
    createModal();
    addListenerOnClickClose();
    addListenerOnKeyClose();
    filmsApiService.movieId = e.target.parentNode.dataset.id;
    getFilmInfo();
    refs.gallery.removeEventListener('click', onGalleryItemClick);
  }
}

function createModal() {
  if (document.querySelector('.js-modal')) {
    return;
  }
  refs.gallery.insertAdjacentHTML(
    'beforeend',
    `<div class="js-modal modal">
        <div class="js-modal__box modal__box">
            
        </div>
      </div >`
  );
  refs.modal = document.querySelector('.js-modal');
  refs.modalBox = document.querySelector('.js-modal__box');
}

//====================================================================
function getFilmInfo() {
  filmsApiService.getInfoApi().then(data => {
    if (!data) {
      return;
    }
    makeMarkup(data);
    // refs.spinner.classList.add('visually-hidden');
  });
}

//====================================================================

function makeMarkup(data) {
  const {
    original_title,
    poster_path,
    title,
    vote_average,
    vote_count,
    overview,
    genres,
    popularity,
  } = data;

  const markup = `<button class="modal__icon link button">
            </button>
      <div class="film-detail">
    <img class="film-detail__poster" src="${
      IMAGE_URL + poster_path
    }" alt="${title}">
    <h3 class="film-detail__title">${title}</h3>
    <div class="film-detail__info">
    <ul class="film-detail__labels list">
        <li>
            <p class="film-detail__label">Vote / Votes</p>
            </li>
            <li>
            <p class="film-detail__label">Popularity</p>
            </li>
            <li>
            <p class="film-detail__label">Original Title</p>
            </li>
            <li>
            <p class="film-detail__label">Genre</p>
        </li>
    </ul>
        <ul class="film-detail__data list">
        <li>
        <p class="film-detail__meta del"><span class="vote">${vote_average.toFixed(
          1
        )}</span> / <span class="votes">${vote_count.toFixed()}</span></p>
            </li>
            <li>
            <p class="film-detail__meta">${popularity.toFixed(1)}</p>
            </li>
            <li>
            <p class="film-detail__meta title">${original_title}</p>
            </li>
            <li>
            <p class="film-detail__meta">${genres[0].name}</p>
        </li>
    </ul>
</div>

    <h4 class="film-detail__about">ABOUT</h4>
    <p class="film-detail__overview">${overview}</p>
    <ul class="film-detail buttons">
        <li><button type="button" class="film-detail__link">add to Watched</button>
        </li>
        <li><button  type="button" class="film-detail__link">add to queue</button>
        </li>
    </ul>
</div>`;

  document.querySelector('.js-modal__box').innerHTML = markup;
}

//====================================================================
function closeModal() {
  refs.gallery.addEventListener('click', onGalleryItemClick);
  refs.modal.remove();
}
function addListenerOnClickClose() {
  refs.modal.addEventListener('click', e => {
    if (e.target.classList.contains('js-modal')) {
      closeModal();
    } else if (e.target.classList.contains('modal__icon')) {
      closeModal();
    }
  });
}

function addListenerOnKeyClose() {
  document.addEventListener('keydown', onKeyClose);
}

function onKeyClose(e) {
  if (e.code === 'Escape') {
    closeModal();
    document.removeEventListener('keydown', onKeyClose);
  }
}
