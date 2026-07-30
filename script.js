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
// ================= HEART GAME =================

const gameScreen = document.getElementById("gameScreen");
const gameArea = document.getElementById("gameArea");
const score = document.getElementById("score");

let total = 0;

// Surprise Button

surpriseBtn.onclick = function(){

welcomeScreen.classList.remove("active");

gameScreen.classList.add("active");

startGame();

};

function startGame(){

total = 0;

score.innerHTML = "0 / 10";

gameArea.innerHTML = "";

let interval = setInterval(createHeart,700);

function createHeart(){

const heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = "❤️";

heart.style.left = Math.random()*250+"px";

gameArea.appendChild(heart);

heart.onclick = function(){

total++;

score.innerHTML = total+" / 10";

heart.remove();

if(total>=10){

clearInterval(interval);

setTimeout(function(){

openCakeScreen();

},500);

  }

// Part 5 mein Cake Screen open hogi.

},500);

}

};

setTimeout(()=>{

heart.remove();

},4000);

}

  }
// ================= CAKE =================

const cakeScreen = document.getElementById("cakeScreen");
const cutCakeBtn = document.getElementById("cutCakeBtn");
const cake = document.getElementById("cake");
const candles = document.getElementById("candles");

function openCakeScreen(){

gameScreen.classList.remove("active");
cakeScreen.classList.add("active");

}
cutCakeBtn.addEventListener("click",()=>{

cake.classList.add("cut");

candles.innerHTML="💨 💨 💨";

cutCakeBtn.innerHTML="🎉 Cake Cut Successfully";

setTimeout(()=>{

alert("🎂 Happy Birthday Falak My Love ❤️");

// Part 6 mein Promise Screen open hogi.

},1000);

});
// ================= FINAL SCENES =================

const promiseScreen = document.getElementById("promiseScreen");
const loveScreen = document.getElementById("loveScreen");
const finalScreen = document.getElementById("finalScreen");

const promiseBtn = document.getElementById("promiseBtn");
const finishBtn = document.getElementById("finishBtn");

// Cake Complete

cutCakeBtn.addEventListener("click",()=>{

setTimeout(()=>{

cakeScreen.classList.remove("active");

promiseScreen.classList.add("active");

},1000);

});

// Promise

promiseBtn.addEventListener("click",()=>{

promiseScreen.classList.remove("active");

loveScreen.classList.add("active");

});

// Finish

finishBtn.addEventListener("click",()=>{

loveScreen.classList.remove("active");

finalScreen.classList.add("active");

});
