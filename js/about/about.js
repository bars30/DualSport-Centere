let hamburg = document.getElementsByClassName('toolbar_hamburg')[0]
let sp1 = document.getElementsByClassName('sp1')[0]
let sp2 = document.getElementsByClassName('sp2')[0]
let sp3 = document.getElementsByClassName('sp3')[0]
let routing = document.getElementsByClassName('routing')[0]
let body = document.getElementsByTagName('body')[0]
console.log(body);
let state = false;

// sp1[0].classList.add('nerv')
hamburg.addEventListener("click", function handelHamburg()  {
 console.log('Clicked');
 state = !state;
 if (state) {
  sp1.classList.add('sp1-hamburg')
  sp2.classList.add('sp2-hamburg')
  sp3.classList.add('sp3-hamburg')
  routing.classList.add('routing-mobile')
  body.style.overflowY = 'hidden';
 } else {
  sp1.classList.remove('sp1-hamburg')
  sp2.classList.remove('sp2-hamburg')
  sp3.classList.remove('sp3-hamburg')
  routing.classList.remove('routing-mobile')
  body.style.overflowY = "scroll"
 }
 
})


