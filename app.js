document.querySelector(".submit").addEventListener("click", function(){
    var email = document.querySelector(".email").value;
    if (email.includes("@")) {
        document.querySelector(".error").style.display="none";
        document.querySelector(".invalid").style.display="none";
        document.querySelector(".email").style.border="1px solid hsl(0, 36%, 70%)"
    }else{
        console.log("nie dziala");
        document.querySelector(".error").style.display="block";
        document.querySelector(".invalid").style.display="block";
        document.querySelector(".email").style.border="1px solid red";
    };
});

