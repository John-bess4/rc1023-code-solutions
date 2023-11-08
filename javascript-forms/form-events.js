function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name + ':', event.target.value);
}

const $nameInput = document.querySelector('#user-name');
const $emailInput = document.querySelector('#user-email');
const $messageInput = document.querySelector('#user-message');

$nameInput.addEventListener('focus', handleFocus);
$nameInput.addEventListener('input', handleInput);
$nameInput.addEventListener('blur', handleBlur);

$emailInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('input', handleInput);
$emailInput.addEventListener('blur', handleBlur);

$messageInput.addEventListener('focus', handleFocus);
$messageInput.addEventListener('input', handleInput);
$messageInput.addEventListener('blur', handleBlur);
