const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// click and validate login button


var uname=document.getElementById("uname-login");
var passw=document.getElementById("password-login")

function klik1(){
  if (!uname.checkValidity()||!passw.checkValidity()){
    document.getElementById("demo").innerHTML="You entered wrong username or password.";
  } else{
    document.location.href="../menu/menu(loggedin).html";
  }
}

//click and validate signup button

var un=document.getElementById("uname-signup")
var email=document.getElementById("email-signup")
var pw=document.getElementById("passw-signup")

function klik2(){
  if (!un.checkValidity()||!pw.checkValidity() || !email.checkValidity()){
    document.getElementById("wrong").innerHTML="Invalid input.";
  } else{
    document.location.href="../menu/menu(loggedin).html";
  }
}

// if uname{
//   const name=uname;
// } else{
//   const name=un
// }