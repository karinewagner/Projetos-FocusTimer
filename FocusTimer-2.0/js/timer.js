export default function Timer({
  minutesDisplay,
  secondsDisplay, 
  minutes
}) {

  let timerTimeOut;

  function updateMinutes() {
    minutes = Number(minutesDisplay.textContent)
  }

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }
  
  function reset() {
    updateDisplay(minutes, 0)
    hold()
  }
  
  function countdown() {
    timerTimeOut = setTimeout(function() {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
  
      updateDisplay(minutes, 0)
  
      if ( minutes <= 0 && seconds <= 0) {
        return
      }
  
      if ( seconds <=0 ) {
        seconds = 10
        --minutes
      }
  
      updateDisplay(minutes, String(seconds -1))
      countdown()
  
    }, 1000)
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function Increase5() {
    updateDisplay(minutes + 5, 0)
    updateMinutes(minutes)
  }

  function Decrease5() {
    if (minutes == 0) {
      return;
    }

    updateDisplay(minutes - 5, 0)
    updateMinutes(minutes)
  }

  return {
    updateMinutes,
    updateDisplay,
    reset,
    countdown,
    hold,
    Increase5,
    Decrease5
  }
}

