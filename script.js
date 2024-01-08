const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

noButton.addEventListener('mouseover', () => {
  const randomX = Math.random() * (window.innerWidth - noButton.clientWidth);
  const randomY = Math.random() * (window.innerHeight - noButton.clientHeight);
  
  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener('click', () => {
  alert('Yo también te amo mucho ;)');
});

