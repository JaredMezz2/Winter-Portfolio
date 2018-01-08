$('.navTrigger').click(function() {
    $('.navHidden').fadeToggle();
    $('.arrow').fadeToggle();
})

$('.submitButton').click(function() {
    $(this).addClass('afterButton');
    $(this).text("Thanks, Ill get back to you soon!")
    $(this).attr('disabled', true)
})
