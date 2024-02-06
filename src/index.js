// Catalog Modal here when clicking images
(() => {
  const refs = {
    modalx: document.querySelector('.modal-me'),
    modalCloseBtn: document.querySelector('.closed-me'),
    modalTriggers: document.querySelectorAll('.modal-showme'),
  };

  // Add event listener to close modal button
  refs.modalCloseBtn.addEventListener('click', closeModal);

  // Add event listeners to each modal trigger (image)
  refs.modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', openModal);
  });

  function openModal() {
    if (window.innerWidth > 1157) {
      refs.modalx.classList.remove('is-hidden');
    }
  }

  function closeModal() {
    refs.modal.classList.add('is-hidden');
  }

  // Prevent modal trigger when clicking certain images
  var imageTriggers = document.querySelectorAll('.image-trigger');
  imageTriggers.forEach(function (image) {
    image.addEventListener('click', function (event) {
      if (window.innerWidth <= 1157) {
        event.preventDefault();
      }
    });
  });
})();

// Catalog Modal here when clicking button
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// page watches animation here
window.addEventListener('scroll', function () {
  var images = document.querySelectorAll('.catalog-img');
  images.forEach(function (image) {
    var bounding = image.getBoundingClientRect();
    if (bounding.top < window.innerHeight) {
      image.style.animationPlayState = 'running';
    }
  });
});
