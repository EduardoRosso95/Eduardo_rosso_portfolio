function sendMail(){
    let parms = {
       
        email : document.getElementById('email').value,
        message : document.getElementById('message').value,
        
    };

    emailjs.send("service_3bk0j9n", "template_719ywsw", parms).then(alert("Email sent successfully!")); 
};