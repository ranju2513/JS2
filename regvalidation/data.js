function validate(){
let u=document.getElementById('username').value
let e=document.getElementById('email').value
let p=document.getElementById('password').value
let cp=document.getElementById('cpassword').value
if (u =="" || u.length<5){
    document.getElementById("usernamemessage").innerHTML="please enter valid user name"
}
if(e ==""){
    document.getElementById('emailmessage').innerHTML="please enter email id"
}
if(p ==""){
    document.getElementById('passwordmessage').innerHTML="please enter password"
}
if(p !=cp){
    document.getElementById('cpmessage').innerHTML="password and confirm password should be same"
}
return false
}