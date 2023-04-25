$(document).ready(function() {
  // Mostrar las imágenes cuando se haga clic en el botón "Mostrar imágenes"
  $("#mostrar-imagenes").click(function() {
    $("img").show();
  });

  // Ocultar las imágenes cuando se haga clic en el botón "Ocultar imágenes"
  $("#ocultar-imagenes").click(function() {
    $("img").hide();
  });
});


// Obtener todas las secciones de la página
const secciones = document.querySelectorAll('.seccion');

// Función para detectar si una sección está visible en la pantalla
function estaVisible(elemento) {
  const rect = elemento.getBoundingClientRect();
  const altura = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= altura && rect.bottom >= 0;
}

// Función para agregar una clase de animación cuando una sección está visible
function animarSeccion() {
  for (let i = 0; i < secciones.length; i++) {
    if (estaVisible(secciones[i])) {
      secciones[i].classList.add('animar');
    }
  }
}

// Agregar un listener para detectar cuando el usuario hace scroll por la página
window.addEventListener('scroll', animarSeccion);

// Ejecutar la función una vez para animar las secciones que están visibles al cargar la página
animarSeccion();
