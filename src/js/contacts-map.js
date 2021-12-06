(() => {
    const refs = {
      openModalBtn: document.querySelector('[contacts-map-open]'),
      closeModalBtn: document.querySelector('[contacts-map-close]'),
      modal: document.querySelector('[contacts-map]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
