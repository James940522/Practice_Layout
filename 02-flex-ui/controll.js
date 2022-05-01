const button = document.querySelector('button');
const modal = document.querySelector('.modal');

if (button) {
  button.addEventListener('click', () => {
    if (modal) {
      modal.style.display = 'flex';
    }
  });
}

if (modal) {
  modal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}
