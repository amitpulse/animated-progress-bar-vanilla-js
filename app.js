const circle = document.querySelector(".circleProgress");
const centValue = document.querySelector(".counterValue");

const btnProgress = document.querySelector(".btn-progress");
const btnText = document.querySelector(".btn-text");
const startBtn = document.getElementById("btn");

let centStartValue = 0;


startBtn.addEventListener("click", () => {
  startCounter();
  

});


function startCounter() {
  let startCounter = setInterval(() => {

    centStartValue++;
    centValue.textContent = `${centStartValue}%`;
    circle.style.background = `conic-gradient(rgb(192, 145, 59) ${
      centStartValue * 3.6
    }deg, white 0deg)`;

    btnProgress.style.width = `${centStartValue}%`;
    btnProgress.style.background = `rgba(0, 0, 0, 0.2)`;
  
    if(centStartValue >=0 && centStartValue <=40){
      btnText.innerHTML ="Authorising Payment...";

    }else if (centStartValue >=40 && centStartValue <=80) {
       btnText.innerHTML = "Processing Payment...";
    } else if (centStartValue == 100) {
      clearInterval(startCounter);
      btnText.innerHTML = "Payment Successful!";
     setTimeout(() => {
      alert("Thanks for buying from us.");
      
     }, 100);
     
     centStartValue =0;
    }


  }, 50);
}


