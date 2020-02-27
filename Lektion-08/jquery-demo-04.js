/*********************************
 * 
 *   Arbeta med jQuery 
 *   Arbeta med events
 * 
 ********************************/

$(document).ready(function(){
  
  console.log("Hello JQuery");

    
  $("#demo1").mouseenter(function(){
    $(this).html("Demo på mouseenter!");
  });

  $("#demo1").mouseout(function(){
    $(this).html("Demo på mouseout!");
  });

  $("#demo2").mousedown(function(){
    $(this).html("Demo på mousedown!");
  });

  $("#demo2").mouseup(function(){
    $(this).html("Demo på mouseup!");
  });

  $("input").focus(function () {
    $(this).css("background-color", "gold");
  });

  $("input").blur(function () {
    $(this).css("background-color", "white");
  });

  // Övning - Visa lösenordet
  $('#showPass').change(function() {
  

    // Du kan testa checked på två olika sätt
    // 1. Använd jQuery-metoden is 
    // Då måste du använda jQuery-selektorn $(this) t.ex. 
    // if($(this).is(":checked")) 
    // 2. Använd vanilla JS 
    // this refererar till det aktuella objektet
    // checked är en egenskap som är true eller false.
    // console.log(this);
    // console.log(this.checked);
    
    
    if (this.checked) {
      $('#password').attr('type' , 'text' );
    } 
    else 
    {
      $('#password').attr('type' , 'password' );
    }
});

}); // ready