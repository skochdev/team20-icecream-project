(() => {
  const refs = {
    openModalBtn: document.querySelector('[mobile-menu-buy-open]'),
    closeModalBtn: document.querySelector('[mobile-menu-buy-close]'),
    modal: document.querySelector('[mobile-menu-buy]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
