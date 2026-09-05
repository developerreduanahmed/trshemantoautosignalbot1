const signal = document.getElementById("signal");
const countdown = document.getElementById("countdown");
const button = document.getElementById("generateBtn");
const timer = document.getElementById("timer");

let running = false;

button.addEventListener("click", generateSignal);

function generateSignal() {

    if (running) return;

    running = true;
    button.disabled = true;
    button.innerHTML = "⏳ Waiting...";

    let time = parseInt(timer.value);

    // ডেমো হিসেবে BUY/SELL দেখানো
    if (Math.random() < 0.5) {
        signal.innerHTML = "🟢 BUY ⬆️";
        signal.style.color = "#00ff55";
    } else {
        signal.innerHTML = "🔴 SELL ⬇️";
        signal.style.color = "#ff3333";
    }

    countdown.innerHTML = time + " ";

    let interval = setInterval(() => {

        time--;

        if (time > 0) {
            countdown.innerHTML = time + " ";
        } else {

            clearInterval(interval);

            signal.innerHTML = "Waiting...";
            signal.style.color = "#ffffff";

            countdown.innerHTML = "00";

            running = false;

            button.disabled = false;
            button.innerHTML = "⚡ Generate Signal";
        }

    }, 1000);

}
