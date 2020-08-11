
var before__button = document.querySelector(".example-cat__button--before");
var after__button = document.querySelector(".example-cat__button--after");
var before__image = document.querySelector(".example-cat__img--before");
var after__image = document.querySelector(".example-cat__img--after");
var navToggle = document.querySelector(".main-nav__toggle");
var mainNav = document.querySelector(".main-nav");
var catSelector = document.querySelector(".example-cat__in-selector--before");
let after_count = 0, before_count = 1;


$(window).resize(function() {
  if(document.documentElement.clientWidth > 767) {
    mainNav.style.display = "block";
  }
});

$(window).resize(function() {
  if(document.documentElement.clientWidth < 767) {
    mainNav.style.display = "none";
  }
});

navToggle.addEventListener('click', function(){
  if (navToggle.classList.contains('main-nav__toggle--after'))
  {
    navToggle.classList.remove('main-nav__toggle--after');
    mainNav.style.display = "none";
  }
  else{
    navToggle.classList.add('main-nav__toggle--after');
    mainNav.style.display = "block";
  }
});

after__button.addEventListener('click', function(){
  before__image.style.display = "none";
  after__image.style.display = "block";
  catSelector.classList.add("example-cat__in-selector--after");
})

before__button.addEventListener('click', function(){
  after__image.style.display = "none";
  before__image.style.display = "block";
  catSelector.classList.remove("example-cat__in-selector--after");
})
