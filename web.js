$(".home-icons ul li a span").hide();
$(".home-icons ul li a").hover(function(){
    $(this).children("span").show(1000);
    $(this).children("i").css("background-color" , "#ffb421");
    $(this).css("background-color" , "#ffb421");
    }, function(){
    $(this).children("span").hide(1000);
    $(this).children("i").css("background-color" , "#2b2a2a");
    $(this).css("background-color" , "#2b2a2a");
});


$(".plog .plog-hide").hide();
$(".plog").hover(function(){
    $(this).children("div").show(500);
    // $(this).css("background-image", 'linear-gradient(#ffb52179, #ffb52179), url("img/WhatsApp\ Image\ 2021-11-26\ at\ 12.41.33\ PM.jpeg")');
    }, function(){
    $(this).children("div").hide(500);
    // $(this).css("background-image", 'url("img/WhatsApp\ Image\ 2021-11-26\ at\ 12.41.33\ PM.jpeg")');
});
