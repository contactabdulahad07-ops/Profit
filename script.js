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
const knife = document.getElementById("knife");

const promiseBtn = document.getElementById("promiseBtn");
const finishBtn = document.getElementById("finishBtn");

const typing = document.getElementById("typing");
const music = document.getElementById("birthdayMusic");

// ================= PASSWORD =================

const correctPassword = "Falak123";

unlockBtn.onclick = function () {

    if (password.value === correctPassword) {

        passwordScreen.classList.remove("active");
        welcomeScreen.classList.add("active");
        error.innerHTML = "";

    } else {

        error.innerHTML = "❌ Wrong Password";

        password.classList.add("shake");

        setTimeout(function () {
            password.classList.remove("shake");
        }, 500);
    }

};

password.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {
        unlockBtn.click();
    }

});

// ================= MUSIC =================

document.body.addEventListener("click", function () {

    music.play();

}, { once: true });
// ================= SURPRISE =================

surpriseBtn.onclick = function () {

    welcomeScreen.classList.remove("active");
    gameScreen.classList.add("active");

    startGame();

};

// ================= HEART GAME =================

let total = 0;

function startGame() {

    total = 0;
    score.innerHTML = "0 / 10";
    gameArea.innerHTML = "";

    let interval = setInterval(createHeart, 700);

    function createHeart() {

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 250 + "px";

        gameArea.appendChild(heart);

        heart.onclick = function () {

            total++;

            score.innerHTML = total + " / 10";

            heart.remove();

            if (total >= 10) {

                clearInterval(interval);

                setTimeout(function () {

                    openCakeScreen();

                }, 500);

            }

        };

        setTimeout(function () {

            if (heart.parentNode) {

                heart.remove();

            }

        }, 4000);

    }

}

function openCakeScreen() {

    gameScreen.classList.remove("active");
    cakeScreen.classList.add("active");

                   }
// ================= CAKE SCREEN =================

cutCakeBtn.onclick = function () {

    cake.classList.add("split");

    candles.innerHTML = "💨 💨 💨 💨 💨";

    knife.classList.add("cutAnimation");

    celebrate();

    setTimeout(function () {

        cakeScreen.classList.remove("active");
        promiseScreen.classList.add("active");

    }, 2200);

};

// Knife Click

knife.onclick = function () {

    cutCakeBtn.click();

};

// ================= CELEBRATION =================

function celebrate() {

    let emojis = ["🎉", "🎊", "🎈", "✨", "❤️", "💖"];

    for (let i = 0; i < 60; i++) {

        let item = document.createElement("span");

        item.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        item.style.position = "fixed";
        item.style.left = Math.random() * 100 + "vw";
        item.style.top = "-30px";
        item.style.fontSize = (20 + Math.random() * 20) + "px";
        item.style.transition = "4s linear";
        item.style.zIndex = "9999";

        document.body.appendChild(item);

        setTimeout(function () {

            item.style.top = "110vh";
            item.style.transform = "rotate(720deg)";

        }, 50);

        setTimeout
      // ================= PROMISE =================

promiseBtn.onclick = function () {

    promiseScreen.classList.remove("active");
    loveScreen.classList.add("active");

};

// ================= FINAL SCREEN =================

const message = `💌 My Dearest Falak ❤️

Happy Birthday Meri Jaan! 🎂❤️

Aaj ka din sirf tumhara nahi, meri khushiyon ka bhi din hai.

Tum meri zindagi ki sabse khoobsurat wajah ho.

Tumhari muskurahat meri har dua ka hissa hai.

Main dua karta hoon ke Allah tumhein hamesha khush rakhe. 🤲

Main hamesha tumhari respect, care aur support karunga.

Chahe jo bhi waqt aaye, main tumhara saath kabhi nahi chhorunga.

Tum meri life ki sabse pyari blessing ho.

I Love You So Much Falak ❤️

Happy Birthday My Love 🎂💕`;

let i = 0;

function typeLetter() {

    if (i < message.length) {

        typing.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeLetter, 40);

    }

}

finishBtn.onclick = function () {

    loveScreen.classList.remove("active");
    finalScreen.classList.add("active");

    fireworks();

    setTimeout(function () {

        typeLetter();

    }, 500);

};

// ================= FIREWORKS =================

function fireworks() {

    const area = document.getElementById("fireworks");

    let emojis = ["🎆", "✨", "🎉", "❤️", "💖"];

    for (let i = 0; i < 50; i++) {

        let fire = document.createElement("div");

        fire.className = "fire";
        fire.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        fire.style.left = Math.random() * 100 + "vw";
        fire.style.top = (60 + Math.random() * 30) + "vh";

        area.appendChild(fire);

        setTimeout(() => {

            fire.remove();

        }, 4000);

    }

}

// ================= PLAY AGAIN =================

window.playAgain = function () {

    location.reload();

};// ================= EXTRA EFFECTS =================

// Auto Focus Password
window.onload = function () {

    if (password) {
        password.focus();
    }

};

// Play Again Button
const playAgainBtn = document.querySelector("button[onclick]");

if (playAgainBtn) {

    playAgainBtn.onclick = function () {

        location.reload();

    };

}

// Prevent Music Error
if (music) {

    document.addEventListener("click", function () {

        music.play().catch(() => {});

    }, { once: true });

}

// Console Message ❤️
console.log("❤️ Happy Birthday Falak ❤️");

// ================= END =================
