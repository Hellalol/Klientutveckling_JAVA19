/*********************************
 * 
 *   Arbeta med jQuery 
 *   Manipulera innehåll
 * 
 ********************************/

$(document).ready(function(){
  
  console.log("Hello JQuery");

  // Metoden html()
  $('#demo1').html("Metoden <b>html()</b> ändrar text och HTML")

  // Metoden val()
  let $value = $('#demo2').val();
  console.log($value);

  // Metoden remove()
  $('#demo3').remove();

  // Metoden hide()
  $('#demo4').hide();

  // Metoden empty()
  $('#demo5').empty();
  
  // Infoga element
  let $ul = $('ul');
  $ul.prepend('<li>Start (prepend)</li>');
  $ul.append('<li>End (append)</li>');
  $ul.before('<p>Before</p>');
  $ul.after('<p>After</p>');

  // Arbeta med HTML-attribut 
  // Metoden attr()
  $('a').attr('target' , '_blank');
  $('a').attr('href' , 'https://w3schools.com');

  // Manipluera CSS
  // Metoden toggleClass()
  $('#btn1').click(function(){
    $('#demo6').toggleClass('hot');
    
    // Övning - Manipulera knappen
    let $btn = $(this);
    if($btn.text() == 'Hot'){
      $btn.text('Cold');
      $btn.toggleClass('btn-success');
      $btn.toggleClass('btn-danger');
    }
    else{
      $btn.text('Hot');
      $btn.toggleClass('btn-success');
      $btn.toggleClass('btn-danger');
    }
    
  });


  
});