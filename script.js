$(document).ready(function() {
    // Smooth scroll for navigation links
    $('.navigation a').click(function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 600);
    });

    // Example: Show/hide sections
    $('.navigation a').click(function() {
        $('.hidden-content').hide();
        var target = $(this).attr('href');
        $(target).show();
    });
});
