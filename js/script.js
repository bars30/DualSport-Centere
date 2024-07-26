document.querySelector('.swipe-container').addEventListener('click', () => {
 const swipeInner = document.querySelector('.swipe-inner');
 const swipeArrow = document.querySelector('.swipe-arrow');

 swipeInner.style.transform = 'translateX(-100%)';
 swipeArrow.style.transform = 'translateX(260px)';

 setTimeout(() => {
     swipeInner.style.transform = 'translateX(0)';
     swipeArrow.style.transform = 'translateX(0)';
 }, 1000); // Reset after 1 second
});
