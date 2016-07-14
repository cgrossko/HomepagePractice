$('.fa-code').mouseenter(function () {
    $(this).css({border: '0 solid rgba(31,61,122,.6)'}).animate({
        borderWidth: 10
    }, 500);
}).mouseleave(function () {
     $(this).animate({
        borderWidth: 10
    }, 500);
});

$('.fa-windows').mouseenter(function () {
    $(this).css({border: '0 solid rgba(57,172,115,.6)'}).animate({
        borderWidth: 10
    }, 500);
}).mouseleave(function () {
     $(this).animate({
        borderWidth: 10
    }, 500);
});

        $(document).ready(function(){
            $('.menu-btn').click(function(){
                $('nav').toggleClass('open');
                $(this).toggleClass('close-btn');
                $('.container').toggle();
            })
        })

