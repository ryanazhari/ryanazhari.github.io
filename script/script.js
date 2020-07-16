
// Parallax Images
$(window).on('load', function() {
    $('#hero-image').addClass('show-parallax');
});

// Landing Element
$(window).scroll(function() {
    let hScroll = $(this).scrollTop();
    console.log(hScroll);

    if ( $(window).width() <= 326 ){
        var portfolio = 1700;
        var toolsUIUX = 1400;
        var features = 1600;
        var about = 3800;
        var program = 4400;
    } else if ( $(window).width() > 326 && $(window).width() <= 768 ){
        var portfolio = 1400;
        var toolsUIUX = 1400;
        var features = 1700;
        var about = 3900;
        var program = 4400;
    } else if ( $(window).width() > 768 && $(window).width() <= 991) {
        var portfolio = 1700;
        var toolsUIUX = 750;
        var features = 1050;
        var about = 2000;
        var program = 2500;
    }else {
        var portfolio =  1050;
        var toolsUIUX = 400;
        var toolsDev = 600;
        var about = 2300;
        var program = 2600;
    }

    if( hScroll >= toolsUIUX ) {
        $('section.skills .tools-uiux').each(function(i) {
           setTimeout(function() {
                $('section.skills .tools-uiux').eq(i).addClass('show-parallax');
           }, 300 * (i+1) );
        });
    }

    if( hScroll >= toolsDev ) {
        $('section.skills .tools-dev').each(function(i) {
           setTimeout(function() {
                $('section.skills .tools-dev').eq(i).addClass('show-parallax');
           }, 300 * (i+1) );
        });
    }

    if( hScroll >= portfolio ) {
        $('section.portfolio .card-post').each(function(i) {
           setTimeout(function() {
                $('section.portfolio .card-post').eq(i).addClass('show-parallax');
           }, 300 * (i+1) );
        });
    }

    // if( hScroll >= $('.web-online-order').offset().top - 300 ) {
    //     $('.brand-order img').addClass('show');
          
    // }

});

// event di klik
$('.nav-link').on('click', function(e) {

    var href = $(this).attr('href');

    var hrefTujuan = $(href);

    if ( $(window).width() <= 425 ){
        var margin = 320;
    } else if ( $(window).width() > 425 && $(window).width() <= 768 ){
        var margin = 240;
    } else {
        var margin = 120;
    }

    $('html, body').animate({
        scrollTop: hrefTujuan.offset().top - margin
    }, 1400, 'easeInOutExpo' );

    e.preventDefault();

 });
