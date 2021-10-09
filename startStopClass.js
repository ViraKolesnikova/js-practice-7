class StartStop{
  constructor() {
    this.timerID = 0;
    this.startTime = 0;
    this.distance = 0;
    this.timerRef = document.querySelector('.timer');
    this.startBtnRef = document.querySelector('.startBtn');
    this.stopBtnRef = document.querySelector('.stopBtn');
    this.clearBtnRef = document.querySelector('.clearBtn');
  }

  onStart=(event)=> {
  this.startTime = Date.now();
  this.timerID = setInterval(() => {
    if (this.distance === 0) {
      this.distance = Date.now() - this.startTime;      
    } else {
      this.distance += 1000;
    }
    this.displayTimer(this.distance);
    
  }, 1000)
  }
  
  onStop=(event) => {
  clearInterval(this.timerID)
  }
  
  onClear=(event)=> {
  this.onStop();
  this.distance = 0;
  this.startTime = 0;
  this.displayTimer(this.distance);
}

  displayTimer=(distance)=> {
  if (distance !== 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);
  
  this.timerRef.innerHTML = `days: ${days} hours: ${hours} mins: ${mins} secs: ${secs}`
  } else {
    this.timerRef.innerHTML = `days: 00 hours: 00 mins: 00 secs: 00`
  }
}

  addListeners = () => {
    this.startBtnRef.addEventListener('click', this.onStart);
    this.stopBtnRef.addEventListener('click', this.onStop);
    this.clearBtnRef.addEventListener('click', this.onClear);
  }
  init = () => {
    this.addListeners()
  }
}

const timer = new StartStop()

timer.init()