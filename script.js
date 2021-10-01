$(function(){
    $('.burger-btn').click(function(){
        $(this).toggleClass('active');
        
        $('.nav-wrapper').fadeToggle(500);

        $('body').toggleClass('noscroll');
    });


    if($(window).width() < 768){
        $('.nav-item').click(function(){
            $('.nav-wrapper').fadeOut(500);
            $('.burger-btn').removeClass('active');
            $('body').removeClass('noscroll');
        });
    }
});