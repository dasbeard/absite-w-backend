const mongoose = require('mongoose');

var Message = mongoose.model('Message');

const sgMail = require('@sendgrid/mail');

module.exports = (function(){
  return {

    // reg: function(req,res){
    //   console.log('In server/controllers/messages'.cyan);
    //   res.json({message: 'In server/controllers/messages'})
    // }, //End Get All Messages

    form: function(req,res){
     
      var htmlStr = '<p>New request from ' + req.body.name + ' asking for info on a '+ req.body.interest + ' </p> <p>Phone numer ' + req.body.phone + '</p> <p>Email: ' + req.body.email +'</p> <p> Questions or Comments: '+ req.body.question + '</p>';

      const msg = {
        to: 'aandbwebmarketing@gmail.com',
        from: 'aandbwebmarketing@gmail.com',
        subject: 'New Inquiry',
        html: htmlStr,
      };
      sgMail.send(msg);
      
      console.log('New email sent' .cyan);
      res.json({success: 'cool Bro'})


    },





  }
})();
