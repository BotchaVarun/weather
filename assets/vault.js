function validation(){ 
    var form=document.getElementById("form");
    var email=document.getElementById("email").value;
    var text=document.getElementById("text");
    let result=email.endsWith("@gmail.com");
    if(result==true)
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML="Your Email Address in Valid";
        text.style.color="#00ff00";
    }
    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML="Please Enter Valid Email Address";
        text.style.color="#ff0000";
    }
    if(email == "")
    {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML="";
        text.style.color="#00ff00"
    }
}
function pass(){
var box1=document.getElementById("box1");
var box2=document.getElementById("box2");
box1.style.display="none";
box2.style.display="block";
}