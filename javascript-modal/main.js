const $btn = document.querySelector('.btn');
const $exit = document.querySelector('.exit');
const $modalContainer = document.querySelector('.modal-cont');
let isOpen = false;

function toggleModal() {
  isOpen = !isOpen;
  if (isOpen) {
    $modalContainer.classList.remove('hidden');
  } else {
    $modalContainer.classList.add('hidden');
  }
}

$btn.addEventListener('click', toggleModal);
$exit.addEventListener('click', toggleModal);
