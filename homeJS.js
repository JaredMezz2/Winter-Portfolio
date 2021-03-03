$('.navTrigger').click(function() {
    if ($('.navTrigger').hasClass('col-sm-12')){
        $(this).removeClass('col-sm-12');
        $(this).addClass('col-sm-4');
        $('.navHidden').fadeIn();
    } else {
        $('.navHidden').fadeOut('slow', function(){
            $('.navTrigger').removeClass('col-sm-4');
            $('.navTrigger').addClass('col-sm-12');
        });
    }
});

$('.submitButton').click(function() {
    $(this).addClass('afterButton');
    $(this).text("Thanks, Ill get back to you soon!");
    $(this).attr('disabled', true);
});

$('.siteView').hover(function() {
    $(this).toggleClass("col-md-3 col-md-4");

});