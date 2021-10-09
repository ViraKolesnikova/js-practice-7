const holidayDate = new Date("Oct 14, 2021 00:00:00")

const timerRef = document.querySelector('.timer');


const timerID = setInterval(() => {
  let distance = holidayDate-Date.now();
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);
  // console.log(days, hours, mins, secs);
  timerRef.innerHTML = `days: ${days} hours: ${hours} mins: ${mins} secs: ${secs}`
  if (distance < 0) {
    clearInterval(timerID);
    timerRef.innerHTML = "Свято закінчилось."
  }
}, 1000)

