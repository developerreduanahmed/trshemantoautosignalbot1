*{
    margin:auto;
    padding: 5px;
    box-sizing:border-box;
    font-family:'Times New Roman', Times, serif
}

body {
    position: relative;
    background: #020101;
}

body::before {
    content: "";
    position: fixed;
    inset: 0;
    background-image: url("tr.jpeg");
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    z-index: -1;
}

.container{

    width:350px;
    height: 550px;

    padding:0px;

    border-radius:25px;

    text-align:center;


 
}

h1{

    color:#f600f6;
    font-size:50px;
    font-weight:bold;

    text-shadow:
    0 0 5px #f308f3,
    0 0 0px #ff00ff;

}

h2{

    margin-top:15px;

    margin-bottom:30px;

    color:rgb(32, 4, 251);

    font-size:40px;

}

.input-box{

    margin:18px 0;

    display:flex;

    justify-content:space-between;

    align-items:center;

}

label{

    color:rgb(255, 254, 254);

    font-size:30px;

    font-weight:bold;

}

select{

    width:160px;

    padding:10px;

    border-radius:12px;

    border:2px solid #45ff70;

    outline:none;

    background:#032d0d;

    color:white;

    font-size:18px;

}

#signal{

    margin-top:0px;

    font-size:35px;

    font-weight:bold;

    color:#54ff72;

   
}

#countdown{

    margin-top:0px;

    font-size:50px;

    color:rgb(63, 245, 2);

    font-weight:bold;

}

button{

    margin-top:3px;

    width:75%;

    padding:5px;

    border:none;

    border-radius:10px;

    cursor:pointer;

    font-size:25px;

    font-weight:bold;

    color:white;

    background:linear-gradient(90deg,#00ff66,#00b33c);

    box-shadow:
    0 0 0px #00ff66,
    0 0 0px #00ff66;

    transition:.3s;

}

button:hover{

    transform:scale(1.05);

    box-shadow:
    0 0 5px #00ff66,
    0 0 0px #00ff66;

}

button i{

    margin-right:10px;

    color:yellow;

}

@media(max-width:450px){

.container{

    width:95%;

}

h1{

    font-size:40px;

}

h2{

    font-size:25px;

}

label{

    font-size:20px;

}

select{

    width:180px;

}

#signal{

    font-size:40px;

}
}
a{
    font-size:20px;
    background-color: #18d7d7;
    border: 2px solid ;
    border-radius: 10px;
    text-decoration: none;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    word-spacing: 10px;
    letter-spacing: 0px;
    padding: 10px;
    
}
/* লাফানোর (Pulse/Blink) অ্যানিমেশন */
@keyframes pulseAnimation {
    0% {
        transform: scale(1);
        box-shadow: 0 0 10px rgba(15, 6, 6, 0.3);
    }
    50% {
        transform: scale(1.05); /* হালকা বড় হয়ে লাফাবে */
        box-shadow: 0 0 25px currentColor; /* চারপাশে গ্লো করবে */
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
}

/* সিগন্যাল বক্সের মূল স্টাইল */
#signal {
    padding: 15px 30px;
    border-radius: 12px;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    transition: all 0.3s ease;
    display: inline-block;
}

/* BUY সিগন্যালের ব্যাকগ্রাউন্ড স্টাইল */
.bg-buy {
    background-color: #00e676 !important;
    color: #000000 !important;
    animation: pulseAnimation 0.8s infinite ease-in-out;
}

/* SELL সিগন্যালের ব্যাকগ্রাউন্ড স্টাইল */
.bg-sell {
    background-color: #ff1744 !important;
    color: #ffffff !important;
    animation: pulseAnimation 0.8s infinite ease-in-out;
}

/* Analyzing এবং ডিফল্ট স্টেটের স্টাইল */
.bg-analyzing {
    background-color: #fbb503 !important;
    color: #000000 !important;
}

.bg-default {
    background-color: transparent;
    color: #ffffff;
}
/* ঘুরার (Spin) অ্যানিমেশন */
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* লাফানোর (Pulse) অ্যানিমেশন */
@keyframes pulseAnimation {
    0% {
        transform: scale(1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
    50% {
        transform: scale(1.05);
        box-shadow: 0 0 25px currentColor;
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
}

/* ঘোরার আইকন کلاس */
.spinner-icon {
    display: inline-block;
    animation: spin 1s linear infinite;
    margin-right: 8px;
}

/* সিগন্যাল বক্সের মূল স্টাইল */
#signal {
    padding: 15px 30px;
    border-radius: 12px;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    transition: all 0.3s ease;
    display: inline-block;
}

/* Analyzing ব্যাকগ্রাউন্ড স্টাইল */
.bg-analyzing {
    background-color: #ffc107 !important;
    color: #000000 !important;
}

/* BUY সিগন্যালের ব্যাকগ্রাউন্ড + অ্যানিমেশন */
.bg-buy {
    background-color: #00e676 !important;
    color: #000000 !important;
    animation: pulseAnimation 0.8s infinite ease-in-out;
}

/* SELL সিগন্যালের ব্যাকগ্রাউন্ড + অ্যানিমেশন */
.bg-sell {
    background-color: #ff1744 !important;
    color: #ffffff !important;
    animation: pulseAnimation 0.8s infinite ease-in-out;
}

/* ডিফল্ট স্টেট */
.bg-default {
    background-color: transparent;
    color: #ffffff;
}


