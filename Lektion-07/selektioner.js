/*************************************
 * 
 * Arbeta med selektioner i JavaScript
 * 
 *************************************/ 

let date = new Date();
console.log(date);

let hour = date.getHours();
console.log(hour);

let greeting = "";
if (hour < 11) {
  greeting = "God morgon";
} else if (hour < 20) {
  greeting = "God dag";
} else {
  greeting = "God kväll";
}
console.log(greeting);


// Ternary-operatorn
function getFee(isMember) {
  return isMember ? "20kr" : "100kr";
}
console.log(getFee(true));  // 20kr
console.log(getFee(false)); // 100kr

// Mer om Ternary-operatorn
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator


// Switch-satsen
function getDay(){
  let day;
  switch (new Date().getDay()) {
    case 0: day = "söndag" ; break;
    case 1: day = "måndag" ; break;
    case 2: day = "tisdag" ; break;
    case 3: day = "onsdag" ; break;
    case 4: day = "torsdag"; break;
    case 5: day = "fredag" ; break;
    case 6: day = "lördag" ; break;
  }
  return day; 
}
console.log('Det är ' + getDay() + ' idag!');