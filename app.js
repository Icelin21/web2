var botones = document.getElementsByClassName('cambiar-imagen');
var imagen1 = document.getElementById('imagen1');
var imagen2 = document.getElementById('imagen2');
var imagen3 = document.getElementById('imagen3');


for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener('click', function () {
    var nuevasImagenes = this.getAttribute('data-imagen').split(', ');

    imagen1.src = nuevasImagenes[0];
    imagen2.src = nuevasImagenes[1];
    imagen3.src = nuevasImagenes[2];

  });
}
