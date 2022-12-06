export class ModalBox {
  constructor() {
    this.modalBackdrop = '';
    this.modalBox = '';
    this.modal = '';
  }

  createModal() {
    if (document.querySelector('.js-modal')) {
      return;
    }
    //
    document.querySelector('main').insertAdjacentHTML(
      'beforeend',
      `<div class="js-modal modal">
        <div class="js-modal__box modal__box">
          <button class="modal__icon link button">
            </button>
        </div>
      </div >`
    );
    //
    this.modal = document.querySelector(`.js-modal`);
    this.modalBox = document.querySelector('.js-modal__box');
  }

  addListenerOnClickClose = () => {
    this.modal.addEventListener('click', e => {
      if (e.target.classList.contains('js-modal')) {
        this.closeModal();
      } else if (e.target.classList.contains('modal__icon')) {
        this.closeModal();
      }
    });
  };

  addListenerOnKeyClose = () => {
    document.addEventListener('keydown', this.onKeyClose);
  };

  onKeyClose = e => {
    if (e.code === 'Escape') {
      this.closeModal();
      document.removeEventListener('keydown', this.onKeyClose);
    }
  };
  closeModal = () => {
    this.modal.remove();
  };
}
