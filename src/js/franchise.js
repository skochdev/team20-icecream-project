(() => {
  const refs = {
    openFranBtn: document.querySelector('[data-franchise-open]'),
    closeFranBtn: document.querySelector('[data-franchise-close]'),
    fran: document.querySelector('[data-franchise]'),
  };

  refs.openFranBtn.addEventListener('click', toggleModal);
  refs.closeFranBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open-franchise');
    refs.fran.classList.toggle('is-hidden-franchise');
  }
})();