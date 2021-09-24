//menu scroll
function openNav() {
  		document.getElementById("myNav").style.width = "40%";
        
  		document.getElementById("headermenu").style.top = "-50px";

		} 


function openNav1441(mw1441){
    if (window.matchMedia("(max-width: 1441px)").matches) {
        document.getElementById("myNav").style.width = "42%";
        document.getElementById("myNav").style.height = "50%";
        document.getElementById("headermenu").style.top = "-50px";
    }
}

function openNav1201(mw1201){
    if (window.matchMedia("(max-width: 1201px)").matches) {
        document.getElementById("myNav").style.width = "50%";
        document.getElementById("myNav").style.height = "60%";
        document.getElementById("headermenu").style.top = "-50px";
    }
}

function openNav2(mw7){
	if (window.matchMedia("(max-width: 768px)").matches) {
		document.getElementById("myNav").style.width = "95%";
		document.getElementById("myNav").style.height = "40%";
  		document.getElementById("headermenu").style.top = "-50px";
	}
}

function openNav3(mw4){
    if (window.matchMedia("(max-width: 425px)").matches) {
        document.getElementById("myNav").style.width = "95%";
        document.getElementById("myNav").style.height = "20%";
        document.getElementById("headermenu").style.top = "-50px";
    }
}

function openNav4(mw3){
    if (window.matchMedia("(max-width: 375px)").matches) {
        document.getElementById("myNav").style.width = "95%";
        document.getElementById("myNav").style.height = "500px";
        document.getElementById("headermenu").style.top = "-50px";
    }
}

function closeNav() {
  		document.getElementById("myNav").style.width = "0%";
  		document.getElementById("headermenu").style.top = "0px";
		}
// menu scroll end


function validateInput(){
     
    if(userName.value.trim()===""){
       onError(userName,"Toto pole musi byt vplnene");
    }else{
        onSuccess(userName);
    }
   
    if(email.value.trim()===""){
        onError(email,"Toto pole musi byt vplnene");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Toto pole musi byt vplnene");
        }else{
            onSuccess(email);
        }
    }

     if(tel.value.trim()===""){
        onError(tel,"Toto pole musi byt vplnene");
    }else{
        if(!isValidEmail(tel.value.trim())){
            onError(tel,"Toto pole misu byt vplnene");
        }else{
            onSuccess(tel);
        }
    }
    /**/
}

function validateTextArea () {
		if (length > (minLen-10)) {
				text = "Sprava musi obsahovat aspon 10 znakov";
			}else {
				text = "";
			}
			document.getElementById('textarea_message').innerHTML = text;
		}


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


// form error message end


//reveal function
function reveal() {
			 	let reveals = document.querySelectorAll('.reveal');

			 	for(let i = 0; i < reveals.length; i++) {

			 		let windowheight = window.innerHeight;
			 		let revealtop = reveals[i].getBoundingClientRect().top;
			 		let revealpoint = 200;

			 		if(revealtop < windowheight - revealpoint) {
			 			reveals[i].classList.add('active');
			 		}
			 		else {
			 			reveals[i].classList.remove('active');
			 		}
			 	}
			 }
// reveal end




// second reveal start
function revealsc() {
			 	let revealssc = document.querySelectorAll('.revealsc');

			 	for(let i = 0; i < revealssc.length; i++) {

			 		let windowheight = window.innerHeight;
			 		let revealsctop = revealssc[i].getBoundingClientRect().top;
			 		let revealscpoint = 200;

			 		if(revealsctop < windowheight - revealscpoint) {
			 			revealssc[i].classList.add('activesc');
			 		}
			 		else {
			 			revealssc[i].classList.remove('activesc');
			 		}
			 	}
			 }
// second reveal end 
