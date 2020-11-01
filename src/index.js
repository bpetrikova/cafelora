import './index.html';
import './style.css';

console.log('funguju!');

const navigace = () => {
  document.querySelector('nav').classList.toggle('nav-closed');
};

const hamburger = document.querySelector('#nav-btn');
hamburger.addEventListener('click', navigace);

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', navigace);
});
