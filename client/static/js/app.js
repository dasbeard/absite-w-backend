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



    /*======= Validate Form before Sending ========*/
  $("#contactForm").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: "Please enter a name for us to contact you by",
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {      
      var toSend = {
        name:$('input[name=name]').val(),
        email: $('input[name=email]').val(),
        phone: $('input[name=phone]').val(),
        interest: $("#interest").find(":selected").val(),
        question: $("#question").val(),
      };
           
      var $modal = new Foundation.Reveal($('#contactSuccess'));
      
      $.ajax({
        type: 'POST',
        url: "/form",
        data: toSend,
        success: function(){     
          console.log('Sent Email');
          $modal.open();
          form.reset();
        },

        error: function(){
          alert('Somehting went wrong, please try again')
          
        }
      });

      return false;
    }
  });







});


