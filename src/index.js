import './index.html';
import './style.css';

console.log('funguju!');

const navigace = () => {
  document.querySelector('nav').classList.toggle('nav-closed');
};

const hamburgerElm = document.querySelector('#nav-btn');
hamburgerElm.addEventListener('click', navigace);

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', navigace);
});

let objednat = false;

const orderBtn = document.querySelector('.order-btn');
const drinkCup = document.querySelector('.drink__cup');
orderBtn.addEventListener('click', () => {
  if (objednat) {
    drinkCup.classList.toggle('drink__cup--selected');
    orderBtn.textContent = 'Objednat';
    objednat = false;
  } else {
    drinkCup.classList.toggle('drink__cup--selected');
    orderBtn.textContent = 'Zrušit';
    objednat = true;
  }
});
