let lightOn = false;

const $lightBtn = document.querySelector('.lightBtn');
const $switchBtn = document.querySelector('.switchBtn');

$switchBtn.addEventListener('click', function (event) {
  lightOn = !lightOn;
  if (lightOn) {
    $lightBtn.className = 'lightBtn light-On';
    $switchBtn.className = 'switchBtn is-on';
  } else {
    $lightBtn.className = 'lightBtn';
    $switchBtn.className = 'switchBtn';
  }
});
