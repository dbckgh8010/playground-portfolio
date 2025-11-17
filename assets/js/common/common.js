$(function() {
    $(".nav-toggle").on('click', function() {
        const $sidebar = $(".sidebar");

        if ($sidebar.hasClass('close')) {
            $sidebar.removeClass('close').addClass('open');
        } else {
            $sidebar.removeClass('open').addClass('close');
        }
    });
});