const $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', function (event) {
  console.log('Event target:', event.target);
  console.log('tag-name:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    const $taskListItem = event.target.closest('.task-list-item');
    console.log('Task List Item:', $taskListItem);
    $taskListItem.remove();
  }
});
