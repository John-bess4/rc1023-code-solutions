const $contactForm = document.querySelector('#contact-from');
console.dir($contactForm);

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const $messageData = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.vlaue,
    message: $contactForm.elements.message.value,
  };

  console.log('messageData:', $messageData);
  $contactForm.reset();
});
