function sendMail(){

    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    //verifico che i campi siano validi, se lo sono procedon con l'invio della mail
    if (emailField.validity.valid && messageField.validity.valid) {

        let parms = {
       
            email : document.getElementById('email').value,
            message : document.getElementById('message').value,
        
        };

        emailjs.send("service_3bk0j9n", "template_719ywsw", parms).then(alert("Email mandata correttamente!")); 
        
        emailField.value= "";
        messageField.value = "";

    }
};
  
