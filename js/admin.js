$(document).ready(function () {
    $(".xp-menubar").on('click', function () {
        $("#sidebar").toggleClass('active');
        $("#content").toggleClass('active');
    });

    $('.xp-menubar,.body-overlay').on('click', function () {
        $("#sidebar,.body-overlay").toggleClass('show-nav');
    });

    $('.list-unstyled li').on('click', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.col-md-12.tabel-container > .table-wrapper').hide();
        $($(this).data('content')).fadeIn();
    })
});