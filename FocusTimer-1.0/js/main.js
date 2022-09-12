import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sounds.js'
import { elements } from './elements.js'

//Refatoração: mudar um código para deixá-lo mais entendível, 
//para deixar o código mais perfomático e SEM ALTERAR suas funcionálidades

const {
  buttonSoundOn,
  buttonSoundOff,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay,
} = elements


const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound()

buttonSoundOn.addEventListener('click', function () {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
  sound.bgAudio.pause()
})

buttonSoundOff.addEventListener('click', function() {
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
  sound.bgAudio.play()
})

buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
  sound.pressButton()
})

buttonPause.addEventListener('click', function() {
  controls.pause()
  timer.hold()
  sound.pressButton()
})

buttonStop.addEventListener('click', function() {
  controls.reset()
  timer.reset()
  sound.pressButton()
})

buttonSet.addEventListener('click', function() {
  let newMinutes = controls.getMinutes()
  if (!newMinutes) {
    timer.reset()
    return
  }

  let newSeconds = controls.getSeconds()
  if (!newSeconds){
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, newSeconds)
  timer.updateMinutes(newMinutes)
  timer.updateSeconds(newSeconds)
})