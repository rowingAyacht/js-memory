//memory
console.log('helloo')

//define a name and show on the screen
const name = "Vini";
const nameElement = document.getElementById('name');
nameElement.textContent = name;
console.log('name element', nameElement);

//define age and show that on screen
const age = '22';
const ageElement = document.getElementById('age');
ageElement.textContent = age;

//create css classes for pro
//show the right league and style on screen depending
const isPro = true;
const proClass = isPro ? 'pro' :'not-pro'
const isProElement = document.getElementById('is-pro');
isProElement.textContent = isPro;
isProElement.className = proClass;