const $tabContainer = document.querySelector('.tab-container');
const $tabList = document.querySelectorAll('.tab');
const $viewList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    $tabList.forEach(function (tab) {
      if (tab === event.target) {
        tab.className = 'tab active';
      } else {
        tab.className = 'tab';
      }
    });

    const $dataView = event.target.getAttribute('data-view');

    $viewList.forEach(function (view) {
      if (view.getAttribute('data-view') === $dataView) {
        view.classList.remove('hidden');
      } else {
        view.classList.add('hidden');
      }
    });
  }
});
