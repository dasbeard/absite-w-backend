$(document).foundation();


/*======= Scroll to About Us ========*/
$("a[href='#aboutUs']").click(function() {
    $("html, body").animate({scrollTop: $("#aboutUs").offset().top}, 'slow');
  });

/*======= Scroll to Contact Us ========*/
$("a[href='#contactUs']").click(function() {
  $("html, body").animate({scrollTop: $("#contactUs").offset().top}, 'slow');
});


