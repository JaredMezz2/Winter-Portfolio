$('.navTrigger').click(function() {
    if ($('.navTrigger').hasClass('col-md-12')){
        $(this).removeClass('col-md-12');
        $(this).addClass('col-md-4');
        $('.navHidden').fadeIn();
    } else {
        $('.navHidden').fadeOut('slow', function(){
            $('.navTrigger').removeClass('col-md-4');
            $('.navTrigger').addClass('col-md-12');
        });
    }
});

$('.submitButton').click(function() {
    $(this).addClass('afterButton');
    $(this).text("Thanks, Ill get back to you soon!");
    $(this).attr('disabled', true);
});
