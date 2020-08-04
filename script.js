
var before__button = document.querySelector(".example-cat__button--before");
var after__button = document.querySelector(".example-cat__button--after");
var before__image = document.querySelector(".example-cat__img--before");
var after__image = document.querySelector(".example-cat__img--after");
var navToggle = document.querySelector(".main-nav__toggle");
var mainNav = document.querySelector(".main-nav");

after__button.onclick = function() {
  after__image.style.display = "block";
  before__image.style.display = "none";
};

before__button.onclick = function() {
  before__image.style.display = "block";
  after__image.style.display = "none";
};


navToggle.addEventListener('click', function(){
  if (navToggle.classList.contains('main-nav__toggle--after'))
  {
    navToggle.classList.remove('main-nav__toggle--after');
    mainNav.classList.add('visually-hidden')
  }
  else{
    navToggle.classList.add('main-nav__toggle--after');
    mainNav.classList.remove('visually-hidden')
  }
});
