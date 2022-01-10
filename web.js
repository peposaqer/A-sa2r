$(".home-icons ul li a span").hide();
$(".home-icons ul li a").hover(function(){
    $(this).children("span").show(500);
    $(this).children("i").css("background-color" , "#ffb421");
    $(this).css("background-color" , "#ffb421");
    $(this).css("padding-left" , "0.6rem");
    }, function(){
    $(this).children("span").hide(500);
    $(this).children("i").css("background-color" , "#2b2a2a");
    $(this).css("background-color" , "#2b2a2a");
    $(this).css("padding-left" , "0rem");
});


$(".plog .plog-hide").hide();
$(".plog").hover(function(){
    $(this).children("div").show(500);
    // $(this).css("background-image", 'linear-gradient(#ffb52179, #ffb52179), url("img/WhatsApp\ Image\ 2021-11-26\ at\ 12.41.33\ PM.jpeg")');
    }, function(){
    $(this).children("div").hide(500);
    // $(this).css("background-image", 'url("img/WhatsApp\ Image\ 2021-11-26\ at\ 12.41.33\ PM.jpeg")');
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

