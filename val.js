const userEmail = document.getElementById('email').value;
const password = document.getElementById('password');
const userForms = document.getElementById('userForm');

const EmailErrMessage= document.getElementById('email-message');
const PasswordErrMessage= document.getElementById('password-message');

/* VAlue declaration for Password*/
const isEmpty=/^\s+$|^$/gi ;
const isWhitespace = /^(?=.*\s)/;
const isContainsUppercase = /^(?=.*[A-Z])/;
const isContainsLowercase = /^(?=.*[a-z])/;
const isContainsNumber = /^(?=.*[0-9])/;
const isContainsSymbol =
/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
const isValidLength = /^.{6}$/;
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

function checkEmailAddress{

    
}


userForms.addEventListener('submit', function (e) {
    e.preventDefault();

    PasswordErrMessage.textContent= checkPasswordValidation(password.value);

});



