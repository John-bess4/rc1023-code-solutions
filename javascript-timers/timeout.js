const $heading = document.querySelector('.message');

function helloThere() {
  $heading.textContent = 'Hello There';
}

setInterval(helloThere);
