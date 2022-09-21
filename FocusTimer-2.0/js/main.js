import Timer from './timer.js'
import Sounds from './controlsSounds.js'

const initialTimeValue = document.querySelector('.timer')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')

const buttonForest = document.querySelector('.btn-forest')
const buttonRain = document.querySelector('.btn-rain')
const buttonCoffeeShop = document.querySelector('.btn-coffeeShop')
const buttonFireplace = document.querySelector('.btn-fireplace')

let minutes = Number(minutesDisplay.textContent);

const timer = Timer({
  minutesDisplay,
  secondsDisplay, 
  minutes
})

const sounds = Sounds()

initialTimeValue.addEventListener('click', function() {
  let newMinutes = prompt('Quantos minutos?')

  if (!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)

})

buttonPlay.addEventListener('click', function() {
  timer.countdown()
})

buttonStop.addEventListener('click', function() {
  timer.hold()
})

buttonIncrease.addEventListener('click', function() {
  timer.Increase5()
})

buttonDecrease.addEventListener('click', function() {
  timer.Decrease5()
})

buttonForest.addEventListener('click', function() {
  sounds.playForest()
})

buttonRain.addEventListener('click', function() {
  sounds.playRain()
})

buttonCoffeeShop.addEventListener('click', function() {
  sounds.playCoffeeShop()
})

buttonFireplace.addEventListener('click', function() {
  sounds.playFireplace()
})

