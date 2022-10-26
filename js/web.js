
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

$(".plog .plog-hide").hide();
$(".plog").hover(function(){
    $(this).children("div").show(500);
    }, function(){
    $(this).children("div").hide(500);
});


const links = document.querySelectorAll('.user i');
const sections = document.querySelectorAll('.forJS');

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove('active'));

  // add the active class if within visible height of the element
  if (scrollY - sections[index].offsetHeight <
        sections[index].offsetTop) {
    links[index].classList.add('active');
  }
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);



function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
  showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

var slides = document.getElementsByClassName("mySlides");
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
var elem = slides[slideIndex-1]

