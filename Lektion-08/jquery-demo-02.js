/*********************************
 * 
 *   Arbeta med jQuery 
 *   Caching och Chaining
 * 
 ********************************/

$(document).ready(function(){
  
  console.log("Hello JQuery");

  // Caching
  let $myListItems = $('li');
  $myListItems.addClass('hot');

  // Chaining
  $('h1').hide().show(500);

  // Utan Chaining
  $('h1').hide();
  $('h1').show(500);
  
});