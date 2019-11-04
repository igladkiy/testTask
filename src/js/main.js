"use strict";

var slideIndex = 1;
showSlides(slideIndex);
document.querySelector('.prev').addEventListener('click', function () {
  showSlides(slideIndex -= 1);
});
document.querySelector('.next').addEventListener('click', function () {
  showSlides(slideIndex += 1);
});
var dot = document.querySelectorAll('.dot');
dot.forEach(function (dots) {
  dots.addEventListener('click', function (e) {
    if (e.target == dot[0]) {
      showSlides(slideIndex = 1);
    } else if (e.target == dot[1]) {
      showSlides(slideIndex = 2);
    } else {
      showSlides(slideIndex = 3);
    }
  });
});

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (var _i = 0; _i < dots.length; _i++) {
    dots[_i].className = dots[_i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var slideIndexTeam = 1;
showTeamSlides(slideIndexTeam);
document.querySelector('.prev2').addEventListener('click', function () {
  showTeamSlides(slideIndexTeam -= 1);
});
document.querySelector('.next2').addEventListener('click', function () {
  showTeamSlides(slideIndexTeam += 1);
});

function showTeamSlides(n) {
  var mySlidesTeam = document.querySelectorAll(".mySlidesTeam");
  var about = document.querySelectorAll('.about');
  var nextPhoto = document.querySelectorAll('.nextPhoto');
  var nextName = document.querySelectorAll('.nextName');

  if (n > about.length) {
    slideIndexTeam = 1;
  }

  if (n < 1) {
    slideIndexTeam = about.length;
  }

  for (var i = 0; i < about.length; i++) {
    mySlidesTeam[i].style.display = 'none';
    about[i].style.display = "none";
    nextPhoto[i].style.display = "none";
    nextName[i].style.display = 'none';
  }

  mySlidesTeam[slideIndexTeam - 1].style.display = "block";
  about[slideIndexTeam - 1].style.display = "flex";
  nextPhoto[slideIndexTeam - 1].style.display = 'block';
  nextName[slideIndexTeam - 1].style.display = 'block';
}

var adressMap = document.querySelectorAll('.adressMap');
var linkMap = document.querySelectorAll('.linkMap');

var _loop = function _loop(i) {
  linkMap[i].addEventListener('mouseenter', function (e) {
    adressMap.forEach(function (x) {
      return x.style.display = 'none';
    });

    if (e.target == linkMap[i]) {
      adressMap[i].style.display = 'block';
    }
  });
};

for (var i = 0; i < linkMap.length; i++) {
  _loop(i);
}

var main = document.getElementById('main');

function upGoHome() {
  document.getElementById('goHome').addEventListener('click', function () {
    main.animate({
      scrollTop: this.attributes('href').offset().top
    }, 1000, 'linear');
  });
}

function goServices() {
  document.getElementById('services').addEventListener('click', function () {
    main.animate({
      scrollTop: this.attributes('href').offset().top
    }, 1000, 'linear');
  });
}

function goTeam() {
  document.getElementById('team').addEventListener('click', function () {
    main.animate({
      scrollTop: this.attributes('href').offset().top
    }, 1000, 'linear');
  });
}

function goContactUs() {
  document.getElementById('contactUs').addEventListener('click', function () {
    main.animate({
      scrollTop: this.attributes('href').offset().top
    }, 1000, 'linear');
  });
}