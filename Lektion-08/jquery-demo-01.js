$(document).ready(function(){
  
  console.log("Hello JQuery");

  // Dölj alla p-taggar
  $('p').hide();

  // Dölj ett element med en ID-selektor
  $('#demo').hide();

  // Dölj flera element med en Klass-selektor
  $('.demo').hide();

  // Dölj ett element vid klick
  $('div').click(function() {
    $(this).hide();
  });
  
});

