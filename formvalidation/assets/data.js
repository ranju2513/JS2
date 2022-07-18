function validate(){
//ui business logic
let email=document.getElementById('email').value
//console.log(email)
let password=document.getElementById('password').value
//console.log(password)
if (email=="") {
    console.log("test case123")
    document.getElementById('emailmessage').innerHTML="Please Enter Email Id"
}
if(password == ""){
    document.getElementById('passwordmessage').innerHTML="Please enter Password"
}
return false
}