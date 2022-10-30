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


AOS.init({
  duration: 2000
});


function animate(obj, initVal, lastVal, duration) {
  let startTime = null;

  //get the current timestamp and assign it to the currentTime variable
  let currentTime = Date.now();

  //pass the current timestamp to the step function
  const step = (currentTime ) => {

  //if the start time is null, assign the current time to startTime
  if (!startTime) {
      startTime = currentTime ;
  }

  //calculate the value to be used in calculating the number to be displayed
  const progress = Math.min((currentTime - startTime)/ duration, 1);

  //calculate what to be displayed using the value gotten above
  obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

  //checking to make sure the counter does not exceed the last value (lastVal)
  if (progress < 1) {
      window.requestAnimationFrame(step);
  } else {
        window.cancelAnimationFrame(window.requestAnimationFrame(step));
      }
  };
  //start animating
      window.requestAnimationFrame(step);
}
let text1 = document.getElementById('0101');
let text2 = document.getElementById('0102');
let text3 = document.getElementById('0103');
let text4 = document.getElementById('0104');
const load = () => {
    animate(text1, 0, 2, 1000);
    animate(text2, 0, 15, 2000);
    animate(text3, 0, 6, 1000);
    animate(text4, 0, 2135, 3000);
}
load()