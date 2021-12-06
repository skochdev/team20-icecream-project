(() => {
    const refs = {
      openModalBtn: document.querySelector('[header-buy-open]'),
      closeModalBtn: document.querySelector('[header-buy-close]'),
      modal: document.querySelector('[header-buy]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
