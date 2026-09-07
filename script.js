const signal = document.getElementById("signal");
const countdown = document.getElementById("countdown");
const button = document.getElementById("generateBtn");
const timer = document.getElementById("timer");

const marketSearch = document.getElementById("marketSearch");
const marketList = document.getElementById("marketList");
const marketOptions = document.querySelectorAll(".market-option");

let running = false;

/* =================================================
MARKET SEARCH + MANUAL MARKET LIST
================================================= */

marketSearch.addEventListener("focus", function () {
    marketList.classList.add("show");
});

marketSearch.addEventListener("input", function () {
    const searchText = this.value.toLowerCase().trim();
    marketList.classList.add("show");

    marketOptions.forEach(option => {
        const marketName = option.textContent.toLowerCase();
        if (marketName.includes(searchText)) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    });
});

/* Market select করলে */
marketOptions.forEach(option => {
    option.addEventListener("click", function () {
        marketSearch.value = this.textContent;
        marketList.classList.remove("show");

        /* Warning সরিয়ে দেওয়া */
        signal.className = "bg-default";
        signal.innerHTML = "Waiting...";
    });
});

/* বাইরে ক্লিক করলে dropdown বন্ধ */
document.addEventListener("click", function (event) {
    if (!event.target.closest(".market-select-container")) {
        marketList.classList.remove("show");
    }
});

/* =================================================
SIGNAL SYSTEM
================================================= */

button.addEventListener("click", generateSignal);

function generateSignal() {
    /* =============================================
       MARKET CHECK
    ============================================= */
    const selectedMarket = marketSearch.value.trim();

    if (selectedMarket === "") {
        signal.className = "bg-warning";
        signal.innerHTML = "⚠️ Select Market First";
        countdown.innerHTML = "00";
        return;
    }

    /* =============================================
       RUNNING CHECK
    ============================================= */
    if (running) return;

    running = true;
    button.disabled = true;
    button.innerHTML = "⏳ Waiting...";

    /* =============================================
       STEP 1 — ANALYZING
    ============================================= */
    signal.className = "";
    signal.classList.add("bg-analyzing");
    signal.innerHTML = `<span class="spinner-icon"><i class="fa-solid fa-spinner"></i></span> Analyzing...`;
    countdown.innerHTML = "--";

    /* =============================================
       3 SECOND DELAY
    ============================================= */
    setTimeout(() => {
        let time = parseInt(timer.value) || 60;
        signal.className = "";

        /* =========================================
           STEP 2 — BUY / SELL
        ========================================= */
        if (Math.random() < 0.5) {
            signal.innerHTML = "🟢 BUY ⬆️";
            signal.classList.add("bg-buy");
        } else {
            signal.innerHTML = "🔴 SELL ⬇️";
            signal.classList.add("bg-sell");
        }

        /* =========================================
           COUNTDOWN
        ========================================= */
        countdown.innerHTML = time;

        let interval = setInterval(() => {
            time--;

            if (time > 0) {
                countdown.innerHTML = time;
            } else {
                clearInterval(interval);

                /* =============================
                   RESET
                ============================= */
                signal.className = "bg-default";
                signal.innerHTML = "Waiting...";
                countdown.innerHTML = "00";

                running = false;
                button.disabled = false;
                button.innerHTML = `<i class="fa-solid fa-bolt"></i> Get Signal`;
            }
        }, 1000);

    }, 3000);
}
