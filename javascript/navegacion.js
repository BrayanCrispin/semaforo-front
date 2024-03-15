document.addEventListener("DOMContentLoaded", function () {
  function login(event) {
    event.preventDefault();
    window.location.href = "actas.html";
  }

  function singin(event) {
    event.preventDefault();
    window.location.href = "singin.html";
  }

  document.getElementById("btnLogin").addEventListener("click", login);
  document.getElementById("btnSingin").addEventListener("click", singin);
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

  function usuarios(event) {
    event.preventDefault();
    window.location.href = "usuarios.html"
  }

  document.getElementById("btnLogout").addEventListener("click", logout);
  document.getElementById("btnActa").addEventListener("click", acta);
  document.getElementById("btnProyecto").addEventListener("click", proyecto);
  document.getElementById("btnCompromiso").addEventListener("click", compromiso);
  document.getElementById("btnUsuarios").addEventListener("click",usuarios);
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

document.addEventListener("DOMContentLoaded", function () {
  function login(event) {
    event.preventDefault();
    window.location.href = "login.html";
  }

  document.getElementById("btnCrearUsuario").addEventListener("click",login);
  document.getElementById("btnVolverLogin").addEventListener("click",login);
});

// document.addEventListener("DOMContentLoaded", function () {
//   function name(params) {
    
//   }  
// });