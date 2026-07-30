// ================= ELEMENTS =================

const passwordScreen = document.getElementById("passwordScreen");
const welcomeScreen = document.getElementById("welcomeScreen");

const password = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const surpriseBtn = document.getElementById("surpriseBtn");
const error = document.getElementById("error");

// ================= PASSWORD =================

const correctPassword = "Falak123";

unlockBtn.addEventListener("click", unlockWebsite);

password.addEventListener("keypress", function(e){

if(e.key==="Enter"){

unlockWebsite();

}

});

function unlockWebsite(){

if(password.value===correctPassword){

passwordScreen.classList.remove("active");

welcomeScreen.classList.add("active");

error.innerHTML="";

}

else{

error.innerHTML="❌ Wrong Password";

password.classList.add("shake");

setTimeout(()=>{

password.classList.remove("shake");

},500);

}

}

// ================= SURPRISE =================

surpriseBtn.addEventListener("click",()=>{

alert("🎉 Welcome Falak ❤️");

// Part 4 mein Heart Game open hogi.

});
