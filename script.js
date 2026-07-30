// ================= ELEMENTS =================

const passwordScreen = document.getElementById("passwordScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const gameScreen = document.getElementById("gameScreen");
const cakeScreen = document.getElementById("cakeScreen");
const promiseScreen = document.getElementById("promiseScreen");
const loveScreen = document.getElementById("loveScreen");
const finalScreen = document.getElementById("finalScreen");

const password = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const surpriseBtn = document.getElementById("surpriseBtn");
const error = document.getElementById("error");

const gameArea = document.getElementById("gameArea");
const score = document.getElementById("score");

const cutCakeBtn = document.getElementById("cutCakeBtn");
const cake = document.getElementById("cake");
const candles = document.getElementById("candles");

const promiseBtn = document.getElementById("promiseBtn");
const finishBtn = document.getElementById("finishBtn");

// ================= PASSWORD =================

const correctPassword = "Falak123";

unlockBtn.onclick = function(){

if(password.value === correctPassword){

passwordScreen.classList.remove("active");
welcomeScreen.classList.add("active");
error.innerHTML="";

}else{

error.innerHTML="❌ Wrong Password";

password.classList.add("shake");

setTimeout(function(){

password.classList.remove("shake");

},500);

}

};

// Enter Key

password.addEventListener("keypress",function(e){

if(e.key==="Enter"){

unlockBtn.click();

}

});

// ================= SURPRISE =================

surpriseBtn.onclick=function(){

welcomeScreen.classList.remove("active");

gameScreen.classList.add("active");

startGame();

};
// ================= HEART GAME =================

let total = 0;

function startGame(){

total = 0;

score.innerHTML = "0 / 10";

gameArea.innerHTML = "";

let interval = setInterval(createHeart,700);

function createHeart(){

const heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = "❤️";

heart.style.left = Math.random()*250 + "px";

gameArea.appendChild(heart);

// Heart Click

heart.onclick = function(){

total++;

score.innerHTML = total + " / 10";

heart.remove();

if(total >= 10){

clearInterval(interval);

setTimeout(function(){

openCakeScreen();

},500);

}

};

// Remove Heart

setTimeout(function(){

if(heart.parentNode){

heart.remove();

}

},4000);

}

}

// ================= OPEN CAKE SCREEN =================

function openCakeScreen(){

gameScreen.classList.remove("active");

cakeScreen.classList.add("active");

}

// ================= CUT CAKE =================

cutCakeBtn.onclick = function(){

cake.classList.add("cut");

candles.innerHTML = "💨 💨 💨";

cutCakeBtn.innerHTML = "🎉 Cake Cut Successfully";

setTimeout(function(){

cakeScreen.classList.remove("active");

promiseScreen.classList.add("active");

},1500);

};
// ================= PROMISE =================

promiseBtn.onclick = function(){

promiseScreen.classList.remove("active");

loveScreen.classList.add("active");

};

// ================= FINISH =================

finishBtn.onclick = function(){

loveScreen.classList.remove("active");

finalScreen.classList.add("active");

createConfetti();

};

// ================= CONFETTI =================

function createConfetti(){

for(let i=0;i<80;i++){

let confetti=document.createElement("div");

confetti.innerHTML="🎉";

confetti.style.position="fixed";
confetti.style.left=Math.random()*100+"vw";
confetti.style.top="-20px";
confetti.style.fontSize=(20+Math.random()*20)+"px";
confetti.style.zIndex="9999";
confetti.style.transition="4s linear";

document.body.appendChild(confetti);

setTimeout(function(){

confetti.style.top="110vh";
confetti.style.transform="rotate(720deg)";

},50);

setTimeout(function(){

confetti.remove();

},4500);

}

}

// ================= PLAY AGAIN =================

window.playAgain=function(){

location.reload();

};
