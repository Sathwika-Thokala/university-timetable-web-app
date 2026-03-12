function signup(){

let username=document.getElementById("newuser").value;
let password=document.getElementById("newpass").value;

localStorage.setItem(username,password);

alert("Account Created Successfully");

window.location="login.html";

}

function login(){

let username=document.getElementById("username").value;
let password=document.getElementById("password").value;

let stored=localStorage.getItem(username);

if(stored==password){

alert("Login Successful");

window.location="timetable.html";

}

else{

alert("Invalid Login");

}

}
