(() => {
  const refs = {
    openFranBtn: document.querySelector('[contacts-franchise-open]'),
    closeFranBtn: document.querySelector('[contacts-franchise-close]'),
    fran: document.querySelector('[contacts-franchise]'),
  };

  refs.openFranBtn.addEventListener('click', toggleModal);
  refs.closeFranBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open-franchise');
    refs.fran.classList.toggle('is-hidden');
  }
})();


