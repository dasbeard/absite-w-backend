$(document).foundation();

$(document).ready(function(){

    /*======= Scroll to About Us ========*/
    $("a[href='#aboutUs']").click(function() {
      $("html, body").animate({scrollTop: $("#aboutUs").offset().top}, 'slow');
    });

    /*======= Scroll to Contact Us ========*/
    $("a[href='#contactUs']").click(function() {
    $("html, body").animate({scrollTop: $("#contactUs").offset().top}, 'slow');
    });





    /*======= Validate Form ========*/
    $('#contactForm').validate({
      rules: {
        phone: {
          phoneUS: true
        },
        name: {
          lettersonly:true
        },
      }
    });


    /*======= Gather Form Information ========*/
    var form = $('#contactForm');

    form.submit(function(event){

    var toSend = {
      name:$('input[name=name]').val(),
      email: $('input[name=email]').val(),
      phone: $('input[name=phone]').val(),
      interest: $("#interest").find(":selected").val(),
      question: $("#question").val(),
    };

    console.log(toSend);

    return false;



    /* =~=~=~=~=~= Need to get to back-end and varify its not sending not valid forms =~=~=~=~=~= */
    })


});

