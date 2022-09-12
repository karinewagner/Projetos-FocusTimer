import sounds from "./sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  function updateDisplay(newMinutes, newSeconds) {
    newMinutes = newMinutes === undefined ?  minutes : newMinutes
    newSeconds = newSeconds === undefined ? seconds : newSeconds
    //1º coloca o resultado dentro da string, 2º usar o método padstar (preencher no início) ele necessita de com dois argumentos:
    // -> 1º informa o total de caracter na string e 2º o caracter que será usado para preencher o espaço
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(newSeconds).padStart(2, "0")
  }
  
  function reset() {
    updateDisplay(minutes, seconds)
    clearTimeout(timerTimeOut)
  }
  
  //Função de contagem regressiva: depois de 1000segundos, ele irá executar a função
  //Recursão: é quando uma função chama ela mesmo, gerando um loop
  function countdown() {
    timerTimeOut = setTimeout(function() {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
      updateDisplay(minutes, seconds)
  
      if ( isFinished ) {
        resetControls()
        updateDisplay()
        sounds().timeEnd()
        return
      }
  
      if ( seconds <= 0) {
        seconds = 60
        --minutes  
      }
  
      updateDisplay(minutes, String(seconds -1))
  
      countdown()
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function updateSeconds(newSeconds) {
    minutes = newSeconds
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    updateDisplay,
    reset,
    countdown,
    updateMinutes,
    updateSeconds,
    hold
  }
}