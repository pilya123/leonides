let userName=document.getElementById("txtUserName");
let email=document.getElementById("txtEmail");
let tel=document.getElementById("txtTel");
let form=document.querySelector("form");


function validateInput(){
     
    if(userName.value.trim()===""){
       onError(userName,"Toto pole misu byt vplnene");
    }else{
        onSuccess(userName);
    }
   
    if(email.value.trim()===""){
        onError(email,"Toto pole misu byt vplnene");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Toto pole misu byt vplnene");
        }else{
            onSuccess(email);
        }
    }

     if(tel.value.trim()===""){
        onError(tel,"Toto pole misu byt vplnene");
    }else{
        if(!isValidEmail(tel.value.trim())){
            onError(tel,"Toto pole misu byt vplnene");
        }else{
            onSuccess(tel);
        }
    }

}



document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();

});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");  
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}

function isValidEmail(email){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isValidTel(tel){
    return /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/.test(tel);
}