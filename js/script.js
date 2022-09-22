let wrapper = document.getElementById("wrapper_rotate");
let startTimer;


let myHours = document.getElementById("hours");
let myMinutes = document.getElementById("minutes");
let mySeconds = document.getElementById("seconds");

let zeroBeforeHours = document.getElementById("zero_h");
let zeroBeforeMinutes = document.getElementById("zero_m");
let zeroBeforeSeconds = document.getElementById("zero_s");

let btnStart = document.getElementById("btn-start");
let btnStop = document.getElementById("btn-stop");
let btnPause = document.getElementById("btn-pause");


function start() {

    wrapper.style.animation = "tic-tac 60s linear infinite";

    btnStart.style.opacity = "0";
    btnPause.style.opacity = "1";
    btnStop.style.opacity = "1";

    btnStart.style.pointerEvents = "none";
    btnPause.style.pointerEvents = "auto";
    btnStop.style.pointerEvents = "auto";

    startTimer = setInterval(() => {

        if (mySeconds.innerHTML < 59) {

            mySeconds.innerHTML++;
            mySeconds.innerHTML >= 10 ? zeroBeforeSeconds.innerHTML = "" : zeroBeforeSeconds;

            if (myMinutes.innerHTML == 60) {

                zeroBeforeMinutes.innerHTML = "0";
                myMinutes.innerHTML = "0";
                myHours.innerHTML++;
                myHours.innerHTML >= 10 ? zeroBeforeHours.innerHTML = "" : zeroBeforeHours;
    
            }

        } else  {

            zeroBeforeSeconds.innerHTML = "0";
            mySeconds.innerHTML = "0";
            myMinutes.innerHTML++;
            myMinutes.innerHTML >= 10 ? zeroBeforeMinutes.innerHTML = "" : zeroBeforeMinutes;

        } 

    }, 1000);

}

function stop() {

    wrapper.style.animation = "none";

    btnStart.style.opacity = "1";
    btnPause.style.opacity = "0";
    btnStop.style.opacity = "0";

    btnStart.style.pointerEvents = "auto";
    btnPause.style.pointerEvents = "none";
    btnStop.style.pointerEvents = "none";

    btnStart.style.transform = "translateX(0%)";

    zeroBeforeHours.innerHTML = "0";
    zeroBeforeMinutes.innerHTML = "0";
    zeroBeforeSeconds.innerHTML = "0";

    myHours.innerHTML = "0";
    myMinutes.innerHTML = "0";
    mySeconds.innerHTML = "0";

    clearInterval(startTimer);

}

function pause() {

    wrapper.style.animationPlayState = "paused";

    btnPause.style.opacity = "0";
    btnPause.style.pointerEvents = "none";

    btnStart.style.transform = "translateX(100%)";

    btnStart.style.opacity = "1";
    btnStart.style.pointerEvents = "auto";

    clearInterval(startTimer);
    
}

btnStart.addEventListener('click', start);
btnStop.addEventListener('click', stop);
btnPause.addEventListener('click', pause);