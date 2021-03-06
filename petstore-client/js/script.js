//declare variables for password validations
var pswd=document.getElementById("password");
var confirm_password=document.getElementById("confirm_password");
var errorMessage = document.getElementById('error_password');
var errorMessageConfirm = document.getElementById('error_confirm');
var register=document.getElementById('register');

var password_value;
var confirm_password_value;

//declare variables for phone number validation

var phone=document.getElementById("phone");
var phone_value;
var errorMessagePhone = document.getElementById('error_phone');

//declare variables for phone number validation
 var email=document.getElementById("email");
 var errorMessageEmail = document.getElementById('error_email');
 
 //declare variables for zip code validation
 var zip=document.getElementById("zip");
 var errorMessageZip = document.getElementById('error_zip');



//Adding event listeners
try {
pswd.addEventListener("keyup", passwordChecker, false);
confirm_password.addEventListener("keyup", passwordChecker, false);
}catch(e){

}
phone.addEventListener("keyup", phone_checker, false);
email.addEventListener("keyup", email_checker, false);
zip.addEventListener("keyup", zip_checker, false);


//Function to check password

function passwordChecker(){
console.log("Function is working");
password_value=pswd.value;
var password_length=password_value.length;
console.log(password_value);
console.log(password_length);

if (password_length<8){
   console.log("Password is too short");
    errorMessage.innerText = "Password is too short";
	register.setAttribute("disabled", "disabled");
}
else {
   if (password_length>12){
       console.log("Password is too long");
	   errorMessage.innerText = "Password is too long";
	   register.setAttribute("disabled", "disabled");
   }else {
   if (password_value.match(/\d/)===null) {
      
      console.log("Password has to contain at leat one number");
	  errorMessage.innerText = "Password has to contain at leat one number";
	  register.setAttribute("disabled", "disabled");
   }else{
   if (password_value.match(/[#%\-@_&*!]/)){
   console.log("Password is good");
    errorMessage.innerText = "";
	passwordCompare();
	
   }else{
   console.log("Password has to contain at leat one special character: #%-@_");
    errorMessage.innerText = "Password has to contain at leat one special character: #%-@_&*!";
	register.setAttribute("disabled", "disabled");
   }
  
   }
}

}

}

//Function to compare passwords

function passwordCompare(){
   confirm_password_value=confirm_password.value;
   if (password_value!==confirm_password_value){
   errorMessageConfirm.innerText = "Passwords are not the same";
   register.setAttribute("disabled", "disabled");
   }else{
    errorMessageConfirm.innerText = "";
	//document.getElementById("login").disabled = false;
	
	register.removeAttribute("disabled");
   }

}

//Function to check phone number

function phone_checker() {
	console.log("function is working");
	var phone_value=phone.value;
	console.log(phone_value);
	
	if (phone_value.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)){
		errorMessagePhone.innerText = "";
		register.removeAttribute("disabled");
		
	}else {
		errorMessagePhone.innerText = "Invalid phone number.";
		register.setAttribute("disabled", "disabled");
	}
		
}

//Function to check email address

function email_checker(){
	console.log("function is working");
	var email_value=email.value;
	console.log(email_value);
	
	if (email_value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/)){
		errorMessageEmail.innerText = "";
		register.removeAttribute("disabled");
		
	}else {
		errorMessageEmail.innerText = "Invalid Email address.";
		register.setAttribute("disabled", "disabled");
	}
}


// Function to check zip code
function zip_checker(){
	console.log("function is working");
	var zip_value=zip.value;
	console.log(zip_value);
	
	if (zip_value.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/)){
		errorMessageZip.innerText = "";
		register.removeAttribute("disabled");
		
	}else {
		errorMessageZip.innerText = "Invalid Zip Code.";
		register.setAttribute("disabled", "disabled");
	}
}
