document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('header');
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('nav');
  var typewriter = document.getElementById('typewriter');
  var form = document.getElementById('contactForm');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.textContent = '☰';
      });
    });
  }

  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  if (typewriter) {
    var text = typewriter.getAttribute('data-text') || 'Deutschlandweit im Einsatz';
    var i = 0;
    var speed = 50;
    typewriter.textContent = '';

    function type() {
      if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    setTimeout(type, 400);
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var btn = form.querySelector('.btn-submit');
      var fields = document.getElementById('formFields');
      var success = document.getElementById('formSuccess');

      btn.disabled = true;
      btn.textContent = 'Wird gesendet...';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
      }).then(function () {
        fields.style.display = 'none';
        success.style.display = 'block';
      }).catch(function () {
        fields.style.display = 'none';
        success.style.display = 'block';
      });
    });
  }
});
