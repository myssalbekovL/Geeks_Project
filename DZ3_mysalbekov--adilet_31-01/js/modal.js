let modalShown = false;

function showModal() {
  alert("Модальное окно!");
  modalShown = true;

  window.removeEventListener('scroll', checkModal);
}

function checkModal() {
  const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition + window.innerHeight >= document.documentElement.scrollHeight && !modalShown) {
    showModal();
  }
}

window.addEventListener('scroll', checkModal);


function delayedModal() {
  alert("Модальное окно через 10 секунд!");
}

setTimeout(delayedModal, 10000);