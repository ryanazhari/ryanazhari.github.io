// event di klik
$('.nav-link').on('click', function(e) {

    var href = $(this).attr('href');

    var hrefTujuan = $(href);

    // console.log(hrefTujuan.offset().top);
    // console.log($('body').scrollTop());

    $('body').animate({
        scrollTop: hrefTujuan.offset().top() - 50
    }, 3000 );

    e.preventDefault();

});