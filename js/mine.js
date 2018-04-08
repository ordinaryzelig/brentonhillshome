jQuery(function($) {

  // smooth scroll room nav links.
  $('a.smooth-scroll').on('click', function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 700);
  });

});
