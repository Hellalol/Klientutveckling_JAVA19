/*************************************
 * 
 *  Att arbeta med objekt i JavaScript
 * 
 *************************************/

// 1. Objektliteral (Object Literal)
let car = {};
console.log(car);

// 2. Objektkonstruktor (Object Constructor)
let person = new Object();

// Egenskaper
person.name = "Mahmud";
person.age  = 47;

// Metoder
person.info = function(){
  return this.name + " är " + this.age + " år gammal!";
};

// Skriv ut data från ett objekt
console.log(person.name);
console.log(person.age);

// Anropa en metod från ett objekt
console.log(person.info());

// Skapa en konstruktor (Constructor Function)
function Person(name, age){
  this.name = name;
  this.age = age;
  this.children = [];
  this.info = function(){
    return this.name + " är " + this.age + " år gammal!";
  };
}

// Klass-syntax i ES6
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.children = [];
    this.info = function () {
      return this.name + " är " + this.age + " år gammal!";
    };
  }
}

// Skapa ett antal objekt 
const mahmud = new Person("Mahmud" , 47);
const yasmin = new Person("Yasmin" , 45);
const mehdi  = new Person("Mehdi"  , 25);
const hoda   = new Person("Hoda"   , 23);
const mariam = new Person("Mariam" , 17);
const dania  = new Person("Dania"  , 13);
const yasir  = new Person("Yasir"  , 12);

// Ändra objektets egenskaper
mahmud.name = "Mahmud Al Hakim";

// Test
console.log(mahmud);
console.log(yasmin.name);
console.log(mehdi.info());

// Lägga in några barn i ett objekt
mahmud.children.push(mehdi);
mahmud.children.push(hoda);
mahmud.children.push(mariam);
mahmud.children.push(dania);
mahmud.children.push(yasir);

// Skapa en array av ett antal objekt
const persons = [mahmud, yasmin , mehdi];

console.log(persons);