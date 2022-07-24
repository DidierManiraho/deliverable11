const userEmail = document.getElementById('email');
const password = document.getElementById('password');
const userForms = document.getElementById('userForm');

const EmailErrMessage= document.getElementById('email-message');
const PasswordErrMessage= document.getElementById('password-message');

/* Value declaration for Password*/
const isEmpty=/^\s+$|^$/gi ;
const isWhitespace = /^(?=.*\s)/;
const isContainsUppercase = /^(?=.*[A-Z])/;
const isContainsLowercase = /^(?=.*[a-z])/;
const isContainsNumber = /^(?=.*[0-9])/;
const isContainsSymbol =
/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
const isValidLength = /^.{6}$/;

/* Value declaration for Email*/ 
const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function checkPasswordValidation(value) {
    if(isEmpty.test(value)){
        return "The Password can not be blank.";
    }
 
    if (isWhitespace.test(value)) {
      return "Password must not contain Whitespaces.";
    }
   
    if (!isContainsUppercase.test(value)) {
      return "Password must have at least one Uppercase Character.";
    }

    if (!isContainsLowercase.test(value)) {
      return "Password must have at least one Lowercase Character.";
    }
  
    if (!isContainsNumber.test(value)) {
      return "Password must contain at least one Digit.";
    }

    if (!isContainsSymbol.test(value)) {
      return "Password must contain at least one Special Symbol.";
    }

    if (!isValidLength.test(value)) {
      return "Password must be 10-16 Characters Long.";
    }
  return null;
}

function checkEmailAddress(value){
 //!isValidEmail.test(value) ?  console.log("Valid email address") : console.log("Invalid email address provided.");
    if(isEmpty.test(value)){
        return "Email can not be blank.";
    }
if(!isValidEmail.test(value)){
    return "Invalid email address provided.";
}
    return null;
    
}


userForms.addEventListener('submit', function (e) {
    e.preventDefault();
    EmailErrMessage.textContent = checkEmailAddress(userEmail.value);

    PasswordErrMessage.textContent= checkPasswordValidation(password.value);

});



