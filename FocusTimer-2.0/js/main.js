import Timer from './timer.js'
import Sounds from './sounds.js'
import ControlSounds from './controlsSounds.js'
import ControlTheme from './controlsTheme.js'
import Events from './events.js'

const initialTimeValue = document.querySelector('.timer')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')

const buttonSonsForest = document.querySelector('.sons-forest')
const buttonSonsRain = document.querySelector('.sons-rain')
const buttonSonsCoffeeShop = document.querySelector('.sons-coffeeShop')
const buttonSonsFireplace = document.querySelector('.sons-fireplace')

const buttonForest = document.querySelector('.btn-forest')
const buttonRain = document.querySelector('.btn-rain')
const buttonCoffeeShop = document.querySelector('.btn-coffeeShop')
const buttonFireplace = document.querySelector('.btn-fireplace')

const volBtnForest = document.querySelector('.volume-Forest')
const volBtnRain = document.querySelector('volume-rain')
const volBtncoffeeShop = document.querySelector('volume-coffeeShop')
const volBtnfireplace = document.querySelector('volume-fireplace')

const pageBody = document.querySelector('body')
const btnLightTheme = document.querySelector('#light-theme')
const btnDarkTheme = document.querySelector('#dark-theme')

let minutes = Number(minutesDisplay.textContent)

const timer = Timer({
  minutesDisplay,
  secondsDisplay, 
  minutes
})

const sounds = Sounds()

const controlSounds = ControlSounds()

const controlTheme = ControlTheme({
    pageBody,
    btnLightTheme,
    btnDarkTheme
})

const events = Events({
  controlTheme,  
  btnLightTheme,
  btnDarkTheme,
  initialTimeValue,
  timer,
  buttonPlay,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  controlSounds,
  sounds,
  buttonSonsForest,
  buttonSonsRain,
  buttonSonsCoffeeShop,
  buttonSonsFireplace
})