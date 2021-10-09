const timerRef = document.querySelector('.timer');
const startBtnRef = document.querySelector('.startBtn');
const stopBtnRef = document.querySelector('.stopBtn');
const clearBtnRef = document.querySelector('.clearBtn');

startBtnRef.addEventListener('click', onStart);
stopBtnRef.addEventListener('click', onStop);
clearBtnRef.addEventListener('click', onClear);

let timerID = 0;
let startTime = 0;
let distance = 0;

function onStart(event) {
  startTime = Date.now();
  timerID = setInterval(() => {
    if (distance === 0) {
      distance = Date.now() - startTime;      
    } else {
      distance += 1000;
    }
    displayTimer(distance);
    
  }, 1000)
}

function onStop(event) {
  clearInterval(timerID)
}

function onClear(event) {
  onStop();
  distance = 0;
  startTime = 0;
  displayTimer(distance);
}

function displayTimer(distance) {
  if (distance !== 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);
  
  timerRef.innerHTML = `days: ${days} hours: ${hours} mins: ${mins} secs: ${secs}`
  } else {
    timerRef.innerHTML = `days: 00 hours: 00 mins: 00 secs: 00`
  }
}

