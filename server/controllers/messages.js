const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = (function(){
  return {

    form: function(req,res){
     
      var htmlStr = '<p>New request from ' + req.body.name + ' asking for info on a '+ req.body.interest + ' </p> <p>Phone numer ' + req.body.phone + '</p> <p>Email: ' + req.body.email +'</p> <p> Questions or Comments: '+ req.body.question + '</p>';

      const msg = {
        to: 'aandbwebmarketing@gmail.com',
        from: 'aandbwebmarketing@gmail.com',
        subject: 'New Inquiry',
        html: htmlStr,
      };
      sgMail.send(msg);
      
      // console.log(req.body);
      
      // console.log('New email sent' .cyan);
      res.json({success: 'Request Sent'})


    },



  }
})();
