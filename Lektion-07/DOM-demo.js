/*************************************
 * 
 * Arbeta med DOM i JavaScript
 * 
 *************************************/ 

// Metoder för att hitta ett enda element

// 1. Metoden getElementById()
let h1 = document.getElementById('one');
console.log(h1);

// Manipulera HTML
h1.innerHTML = "Arbeta med DOM i JavaScript";

// Manipulera CSS-egenskaper
h1.style.color = 'maroon'; // Eller hex-kod t.ex. #FF0000
h1.style.fontSize = '3em';

// 2. Metoden querySelector()
h1 = document.querySelector('one'); 
console.log(h1); 
// OBS! null = elementet saknas

// OBS! Argumentet måste vara en CSS-selektor
h1 = document.querySelector('#one'); 

let p = document.querySelector('p');
console.log(p);
// OBS! Första p-tagg returneras

/**************************************
 * Metoder för att hitta flera element
 *************************************/ 

// 1. Metoden querySelectorAll
// OBS! Argumentet måste vara en CSS-selektor
p = document.querySelectorAll('p');
console.log(p);

// Hämta alla element som har class="demo"
p = document.querySelectorAll('.demo');
// Metoden returnerar en NodeList
console.log(p);

// Det finns en forEach-metod i en NodeList :-)
p.forEach(function(element){
  console.log(element);
  element.style.color = 'green';
})

// Modern JavaScript
// En arrow-funktion (pil-funktion)
p.forEach(element => element.className = 'cool')

// Hämta ett element som har id="one"
h1 = document.querySelector('#one');
console.log(h1);
// OBS! Vi får en collection som innehåller ett element

// 2. Metoden getElementsByTagName()
p = document.getElementsByTagName('p');

// Metoden returnerar en HTMLCollection
console.log(p);

// OBS! forEach-metoden saknas i en HTMLCollection
// Men vi får itererar över alla element med en for-sats!
for (const element of p) {
  console.log(element);
  element.style.color = 'red';
}

// 3. Metoden getElementsByClassName
p = document.getElementsByClassName('demo');
console.log(p);

for (const element of p) {
  console.log(element);
  element.style.color = 'blue';
}