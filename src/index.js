import './index.html';
import './style.css';
import { Layer } from './Layer';

console.log('funguju!');

// Zprovoznění navigace
// Chceme zařídit, aby se na úzkých displejích po kliknutí na ikonku zobrazovala navigace. Zatím se to neděje a tím přichází ke slovu JavaScript.

const navigace = () => {
  document.querySelector('nav').classList.toggle('nav-closed');
};

const hamburgerElm = document.querySelector('#nav-btn');
hamburgerElm.addEventListener('click', navigace);

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', navigace);
});

// Objednávání
// Zařiďte, aby fungovalo objednávání jednotlivých nápojů. Zatím na stránce vidíme pouze jeden, poději jich však bude mnohem více.

let objednat = false;
// lze to inapsat jako objednat = !objednat - je to vlastně takový booleanovský toogle

const orderBtn = document.querySelector('.order-btn');
const drinkCup = document.querySelector('.drink__cup');
drinkCup.classList.toggle('drink__cup--selected');

orderBtn.addEventListener('click', () => {
  if (objednat) {
    orderBtn.textContent = 'Objednat';
    objednat = false;
  } else {
    orderBtn.textContent = 'Zrušit';
    objednat = true;
  }
});

// Ingredience jako komponenty
// Každý nápoj bude obsahovat seznam ingrediencí. Na stránce vidíme příklad pro cappuccino. Budeme chtít, aby ingredience byla komponenta.

const layer1 = {
  color: '#feeeca',
  label: 'mléčná pěna',
};

const layer2 = {
  color: '#fed7b0',
  label: 'teplé mléko',
};

const layer3 = {
  color: '#613916',
  label: 'espresso',
};

const drinkInfo = document.querySelector('.drink__info');
drinkInfo.innerHTML += Layer(layer1) + Layer(layer2) + Layer(layer3);
