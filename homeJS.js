$('.navTrigger').click(function() {
    if ($('.navTrigger').hasClass('col-md-12')){
        $(this).addClass('fakeIt');
        $(this).toggleClass('col-md-12');
        $(this).toggleClass('col-md-4');
        $('.navHidden').fadeToggle();
        $(this).removeClass('fakeIt');
    } else {
        $('.navTrigger').toggleClass('nameEmph');
        $(this).addClass('fakeIt');
        $('.navHidden').fadeToggle();
        $(this).toggleClass('col-md-4');
        $('.navTrigger').toggleClass('col-md-12')
        $(this).removeClass('fakeIt');
        $(this).toggleClass('nameEmph');
    }
});

$('.submitButton').click(function() {
    $(this).addClass('afterButton');
    $(this).text("Thanks, Ill get back to you soon!");
    $(this).attr('disabled', true);
});
