export default function Controls ({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet
}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function reset() {
    buttonStop.classList.add('hide')
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonSet.classList.remove('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')//
    if (!newMinutes) {
      return false
    }

    return newMinutes
  }

  function getSeconds() {
    let newSeconds = prompt('Quantos segundos?')//
    if (!newSeconds) {
      return false
    }
    
    return newSeconds
  }

  return {
    play,
    pause,
    reset,
    getMinutes,
    getSeconds,
    }
}
