
function Validatedata(name,email,cNumber,dob,countryDdl,stateDdl){
    var msg = '"Success": "All fields are valid."'
    var msgChanges = false;
    if(name != undefined && !msgChanges){
        if(name.value.length < 4 || name.value.length > 10){
            msg = '"Name":{"error": "length should be between 4-10 characters."}';
            msgChanges = true;
        }
    }
    if(cNumber != undefined && !msgChanges){
        if(cNumber.value.length < 10 || cNumber.value.length > 10){
            msg = '"Contact":{"error": "Contact number must be of 10 digits."}';
            msgChanges = true;

        }
    }
    if(email != undefined && !msgChanges){
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       if(!email.value.match(validRegex)){
            msg = '"Email":{"error": "Email not valid."}';
            msgChanges = true;
       }
    }
    UpdateMessage(msg);
    console.log(name);
}

function UpdateMessage(msg){
    var message = document.getElementById("message");
    if(message != undefined){
        message.innerText = msg;
    }
}