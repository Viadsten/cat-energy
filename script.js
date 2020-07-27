
var before__button = document.querySelector(".example-cat__button--before");
var after__button = document.querySelector(".example-cat__button--after");
var before__image = document.querySelector(".example-cat__img--before");
var after__image = document.querySelector(".example-cat__img--after");

after__button.onclick = function() {
  after__image.style.display = "block";
  before__image.style.display = "none";
};

before__button.onclick = function() {
  before__image.style.display = "block";
  after__image.style.display = "none";
};


