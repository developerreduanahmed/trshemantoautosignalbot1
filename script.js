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

    // Step 1: Analyzing চালু করা (ঘোরার আইকন সহ)
    signal.className = "";
    signal.classList.add("bg-analyzing");
    signal.innerHTML = `<span class="spinner-icon"><i class="fa-solid fa-spinner"></i></span> Analyzing...`;
    countdown.innerHTML = "--";

    // ৩ সেকেন্ড পর BUY/SELL দেখাবে
    setTimeout(() => {
        let time = parseInt(timer.value) || 60;

        signal.className = ""; // Analyzing ক্লাস সরানো হলো

        // Step 2: BUY নাকি SELL তা নির্ধারণ করা
        if (Math.random() < 0.5) {
            signal.innerHTML = "🟢 BUY ⬆️";
            signal.classList.add("bg-buy");
        } else {
            signal.innerHTML = "🔴 SELL ⬇️";
            signal.classList.add("bg-sell");
        }

        countdown.innerHTML = time + " ";

        // Step 3: কাউন্টডাউন শুরু
        let interval = setInterval(() => {
            time--;

            if (time > 0) {
                countdown.innerHTML = time + " ";
            } else {
                clearInterval(interval);

                // সময় শেষ হলে রিসেট
                signal.className = "";
                signal.classList.add("bg-default");
                signal.innerHTML = "Waiting...";

                countdown.innerHTML = "00";

                running = false;

                button.disabled = false;
                button.innerHTML = "⚡ Generate Signal";
            }
        }, 1000);

    }, 3000); // ৩ সেকেন্ডের ডিলে
}
