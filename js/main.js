$(document).ready(function () {
    $('.sidenav').sidenav();

    $('.scrollspy').scrollSpy();
    $('.carousel.carousel-slider').carousel(
        {
            fullWidth: true,
            indicators: true
        }
    );
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    $(".dropdown-trigger").dropdown(
        {
            coverTrigger: false,
            hover: true
        }
    );
});



