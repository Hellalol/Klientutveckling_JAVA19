/*********************************
 * 
 *   Arbeta med jQuery 
 *   Arbeta med effekter
 * 
 ********************************/

$(document).ready(function(){
  
  console.log("Hello JQuery");

  $("#hide").click(function () {
    $("p").hide(300)
  });

  $("#show").click(function () {
    $("p").show(300)
  });


  // Metoden toggle()
  $("#toggle").click(function () {
    $("#demo").toggle(1000);
    $(this).text(function (i, text) {
      return text == "Visa" ? "Dölj" : "Visa";
    });
    // Mer om metoden text()
    // https://api.jquery.com/text/
});


}); // ready