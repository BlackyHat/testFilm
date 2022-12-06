// import { Notify } from 'notiflix';
import { ModalBox } from './pure_modal';
// FIREBASE
import { FireBaseApi } from './firebase';
//
//_DOM_REFS
const refs = {
  login: document.querySelector('.login'),
  main: document.querySelector('main'),
};
const fireBaseApi = new FireBaseApi();
// const formData = {};
let hasAccount = false;
//
refs.login.addEventListener('click', onLogin);
//
const modalBox = new ModalBox();
//
function onLogin(e) {
  e.preventDefault();
  //   refs.spinner.classList.toggle('visually-hidden');
  //_MARK_UP
  modalBox.createModal();
  createMarkup();
  //_SPINNER
  //_LISTENERS
  modalBox.addListenerOnClickClose();
  modalBox.addListenerOnKeyClose();
  //_CREATE REFS
  //   refs.spinner.classList.toggle('visually-hidden');
  refs.form.addEventListener('input', onFormInput);
  refs.form.addEventListener('submit', onFormSubmit);
}

// _GET_FORM_DATA

function onFormInput(e) {
  fireBaseApi.formData[e.target.name] = e.target.value;
}
function onFormSubmit(e) {
  e.preventDefault();
  //
  fireBaseApi.createAccount();
  //
  e.currentTarget.reset();
}

//_CREATE MARKUP

function createMarkup() {
  const markup = `<form class="login-form">
  <label for="user_email">Email</label>
  <input type="email" name="email" id="user_email" />

  <label for="user_password">Password</label>
  <input type="password" name="password" id="user_password" />
  <button type="submit" class="login-form__submit">Log In</button>
</form>`;
  //_MARK_UP
  //   refs.modalBox.innerHTML = markup;
  modalBox.modalBox.innerHTML += markup;
  modalBox.modalBox.classList.add('login__box');
  //_CREATE REFS
  refs.form = document.querySelector('.login-form');
}

//_FUNCTIONS TO CLOSE MODAL

function closeModal() {
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
//_FUNCTIONS TO CLOSE MODAL BE ESC BUTTON

function addListenerOnKeyClose() {
  document.addEventListener('keydown', onKeyClose);
}

function onKeyClose(e) {
  if (e.code === 'Escape') {
    closeModal();
    document.removeEventListener('keydown', onKeyClose);
  }
}
