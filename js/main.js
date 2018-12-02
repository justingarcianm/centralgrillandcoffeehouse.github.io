
$(".dropdown-trigger").dropdown(
    {
        coverTrigger: false,
        hover: true
    }
);

$(document).ready(function () {
    $('.sidenav').sidenav();
});

$(document).ready(function () {
    $('.parallax').parallax();
});

$(document).ready(function () {
    $('.carousel').carousel(
        {
            fullWidth: true,
            duration: 100,
            indicators: true
        }
    );

});

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    duration: 100,
    indicators: true
});


$("a[href^='#']").click(function (e) {
    e.preventDefault();
    var page_url = window.location.href;
    var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);

    $("body, html").animate({
        scrollTop: $("#scroll-" + page_id).offset().top
    }, 1000);
});







