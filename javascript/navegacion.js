document.addEventListener("DOMContentLoaded", function () {
  function login(event) {
    event.preventDefault();
    window.location.href = "actas.html";
  }

  document.getElementById("btnLogin").addEventListener("click", login);
});

document.addEventListener("DOMContentLoaded", function () {
  function logout(event) {
    event.preventDefault();
    window.location.href = "login.html";
  }

  function acta(event) {
    event.preventDefault();
    window.location.href = "actas.html";
  }

  function proyecto(event) {
    event.preventDefault();
    window.location.href = "proyectos.html";
  }

  function compromiso(event) {
    event.preventDefault();
    window.location.href = "compromisos.html";
  }

  document.getElementById("btnLogout").addEventListener("click", logout);
  document.getElementById("btnActa").addEventListener("click", acta);
  document.getElementById("btnProyecto").addEventListener("click", proyecto);
  document.getElementById("btnCompromiso").addEventListener("click", compromiso);
});

document.addEventListener("DOMContentLoaded", function () {
  function prueba(event) {
    window.location.href = "acta-ejemplo.html";
  }

  document.getElementById("otras-actas").addEventListener("click",prueba);

});

document.addEventListener("DOMContentLoaded", function () {
  function actaNueva(event) {
    window.location.href = "actas.html";
  }

  document.getElementById("nueva-acta").addEventListener("click",actaNueva);
});