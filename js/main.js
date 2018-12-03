$(document).ready(function () {
    $('.sidenav').sidenav();

    $('.scrollspy').scrollSpy();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        duration: 400
    });
    $(".dropdown-trigger").dropdown(
        {
            coverTrigger: false,
            hover: true
        }
    );
    $('#textarea1').val('New Text');
    M.textareaAutoResize($('#textarea1'));
    $('input#input_text, textarea#textarea2').characterCounter();

});

function showButton() {


    var button = $('#my-button'), //button that scrolls user to top
        view = $(window),
        timeoutKey = -1;

    $(document).on('scroll', function () {
        if (timeoutKey) {
            window.clearTimeout(timeoutKey);
        }
        timeoutKey = window.setTimeout(function () {

            if (view.scrollTop() < 100) {
                button.fadeIn();
            }
            else {
                button.fadeOut();
            }
        }, 100);
    });
}

$('#my-button').on('click', function () {
    $('html, body').stop().animate({
        scrollTop: 0
    }, 500, 'linear');
    return false;
});

//call function on document ready
$(function () {
    showButton();
});
