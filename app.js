document.getElementById('Sobreyo').addEventListener('click', evento => {
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('yo').style.display = 'block';
});

document.getElementById('Htecnicas').addEventListener('click', evento => {
  document.getElementById('yo').style.display = 'none';
  document.getElementById('Habilidades Tecnicas').style.display = 'block';
});

document.getElementById('experiencias').addEventListener('click', evento => {
  document.getElementById('Habilidades Tecnicas').style.display = 'none';
  document.getElementById('mis Experiencias').style.display = 'block';
});
