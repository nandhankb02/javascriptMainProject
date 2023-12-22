function validate() {
    var box1 = document.getElementById("name");
    var box2 =document.getElementById("email");
    var box3 = document.getElementById("password");
    if(box1.value==""){
        document.getElementById("p1").innerHTML="*NAME WILL NOT BE EMPTY"
        box1.focus();
        box1.style.border ="solid 1px red"
        return false
    }
     else if(box2.value==""){
        document.getElementById("p2").innerHTML="*ENTER THE VALID EMAIL"
        box2.focus();
        box2.style.border ="solid 1px red"
        return false
    }
    else if(box3.value==""){
        document.getElementById("p3").innerHTML="*PASSWORD SHOULD NEED"
        box3.focus();
        box3.style.border ="solid 1px red"
        return false
    }
    
    else{

        
     
     window.location.href = './signin.html';

    }
}