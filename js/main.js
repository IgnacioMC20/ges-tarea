



$(document).ready(function() {
  $("#mostrar-imagenes").hide();
  
  $("#mostrar-imagenes").click(function() {
    $("img").show();
    $(this).hide();
    $("#ocultar-imagenes").show();
    $(".fab-container").addClass("active");
  });
  
  $("#ocultar-imagenes").click(function() {
    $(this).hide();
    $("img").hide();
    $("#mostrar-imagenes").show();
    $(".fab-container").removeClass("active");
  });
});
