const links = document.querySelectorAll('nav ul li a');
const sunButton = document.querySelector('button>i.fa-regular.fa-sun');
const moonButton = document.querySelector('button>i.fa-solid.fa-moon');
const logo = document.querySelector('nav>a>img');
const body = document.body;


sunButton.addEventListener('click', () => {
  body.classList.remove('dark-mode');
  logo.style.filter = 'none';
});

moonButton.addEventListener('click', () => {
  body.classList.add('dark-mode');
  logo.style.filter = 'invert(1)';
});

links.forEach(function (link) {
  link.addEventListener('click', function (event) {
    links.forEach(function (link) {
      link.classList.remove('active');
    });
    link.classList.add('active');
    event.preventDefault();
  });

  if (link.classList.contains('classItem')) {
    link.addEventListener('click', function (event) {
      link.classList.add('active');
    });
  }
})

links.forEach(function (link) {

  link.addEventListener('click', function (event) {

    links.forEach(function (link) {
      link.classList.remove('active');
    });

    link.classList.add('active');

    event.preventDefault();
  });


  if (link.classList.contains('classItem')) {

    link.addEventListener('click', function (event) {
      link.classList.add('active');
    });
  }
});

function togglePasswordVisibility(){
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.querySelector(".fa-eye");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}