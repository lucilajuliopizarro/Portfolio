function inicializacion() {
  document.getElementById("inicio").style.display = "block";
  document.getElementById('Habilidades-Tecnicas').style.display = 'none';
  document.getElementById('mis Experiencias').style.display = 'none';
  document.getElementById('yo').style.display = 'none';
  document.getElementById('proyectos').style.display = 'none';
  document.getElementById('contacto').style.display = 'none';

}

window.onload = inicializacion;


document.getElementById('logo').addEventListener('click', event => {
  inicializacion()
})

document.getElementById('Sobreyo').addEventListener('click', evento => {
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('yo').style.display = 'block';
  document.getElementById('mis Experiencias').style.display = 'none';
  document.getElementById('Habilidades-Tecnicas').style.display = 'none';
  document.getElementById('proyectos').style.display = 'none';
  document.getElementById('contacto').style.display = 'none';

});




document.getElementById('Htecnicas').addEventListener('click', evento => {
  document.getElementById('yo').style.display = 'none';
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('mis Experiencias').style.display = 'none';
  document.getElementById('Habilidades-Tecnicas').style.display = 'block';
  document.getElementById('proyectos').style.display = 'none';
  document.getElementById('contacto').style.display = 'none';
});

document.getElementById('experiencias').addEventListener('click', evento => {
  document.getElementById('Habilidades-Tecnicas').style.display = 'none';
  document.getElementById('mis Experiencias').style.display = 'block';
  document.getElementById('proyectos').style.display = 'none';
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('contacto').style.display = 'none';
});

document.getElementById('Proyectos').addEventListener('click', evento => {
  document.getElementById('Habilidades-Tecnicas').style.display = 'none';
  document.getElementById('mis Experiencias').style.display = 'none';
  document.getElementById('proyectos').style.display = 'block';
  document.getElementById('yo').style.display = 'none';
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('contacto').style.display = 'none';
});

document.getElementById('Contacto').addEventListener('click', evento => {
  document.getElementById('Habilidades-Tecnicas').style.display = 'none';
  document.getElementById('mis Experiencias').style.display = 'none';
  document.getElementById('proyectos').style.display = 'none';
  document.getElementById('yo').style.display = 'none';
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('contacto').style.display = 'block';

});



