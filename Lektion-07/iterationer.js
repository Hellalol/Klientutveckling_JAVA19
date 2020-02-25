/*************************************
 * 
 * Arbeta med iterationer i JavaScript
 * 
 *************************************/ 

let os = ['Windows','Macintosh','Linux'];

// For-satsen
for (let i = 0 ; i < os.length ; i++) {
  console.log(os[i]);
}

let persons = [
  {name:'Mahmud', email:'mahmud@email.com'},
  {name:'Kalle' , email:'kalle@email.com'},
  {name:'Erik'  , email:'erik@email.com'}
];

// Iterera över en array av objekt
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i].name);
}

console.log("---- For-in-satsen ----");

// i = index
for (let i in persons) {
  console.log(persons[i].name);
}

console.log("---- For-of-satsen ----");

for (let person of persons) {
  // console.log(person);
  // console.log(person.name);
  console.log(person.email);
}

// While-satsen 

while (true) { // Hit kommer vi när continue exekveras

  let name = prompt("Vad heter du?");

  if (name == '')   continue;
  if (name == null) break;

  alert('Välkommen ' + name);

} // Hit kommer vi när break exekveras

// Do...While 
let again = true;
do{
  alert('Välkommen till spelet!');

  again = confirm('Vill du spela igen? ');

}while(again);

alert('Hejdå!');