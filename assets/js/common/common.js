$(function() {
    $(".sidebar__toggle-btn").on('click', function() {
        const $sidebar = $(".sidebar");

        if ($sidebar.hasClass('sidebar--close')) {
            $sidebar.removeClass('sidebar--close').addClass('sidebar--open');
        } else {
            $sidebar.removeClass('sidebar--open').addClass('sidebar--close');
        }
    });
});
