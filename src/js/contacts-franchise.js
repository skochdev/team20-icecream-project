(() => {
    const refs = {
      openModalBtn: document.querySelector('[contacts-franchise-open]'),
      closeModalBtn: document.querySelector('[contacts-franchise-close]'),
      modal: document.querySelector('[contacts-franchise]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
