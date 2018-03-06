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
    // $('#contactForm').validate({
    //   rules: {
    //     phone: {
    //       phoneUS: true
    //     },
    //   }
    // })
    

$('#formSubmit').on('click', function(){
  var toSend = {
    name:$('input[name=name]').val(),
    email: $('input[name=email]').val(),
    phone: $('input[name=phone]').val(),
    interest: $("#interest").find(":selected").val(),
    question: $("#question").val(),
  };

  $.ajax({
    type: 'POST',
    url: "/form",
    data: toSend,
    success: function(){     
      alert('Thanks for contact us, we will be in touch within 48 hours')
    },
    error: function(){
      alert('Somehting went wrong, please try again')
      
    }
  });


  
  return false;
});





    // function sendForm(){
    //   $.when($.ajax({
    //     url: "http://localhost:9000/form",
    //     type: 'json'
    //   }))
    //   .then(function(result) {
    //     console.log(result);

        
    //   })
    // }

});

