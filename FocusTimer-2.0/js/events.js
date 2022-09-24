export default function Events({
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
  buttonSonsFireplace,
  volumeForest,
  volumeRain,
  volumeCoffeeShop,
  volumeFireplace
}) {

  btnLightTheme.addEventListener('click', function() {
    controlTheme.themeChanger()
  })
  
  btnDarkTheme.addEventListener('click', function() {
    controlTheme.themeChanger()
  })

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

  buttonSonsForest.addEventListener('click', function() {
    controlSounds.currentSounds(sounds.soundForest)
  })
  
  buttonSonsRain.addEventListener('click', function() {
    controlSounds.currentSounds(sounds.soundRain)
  })
  
  buttonSonsCoffeeShop.addEventListener('click', function() {
    controlSounds.currentSounds(sounds.soundCoffeeShop)
  })
  
  buttonSonsFireplace.addEventListener('click', function() {
    controlSounds.currentSounds(sounds.soundFireplace)
  })

  volumeForest.addEventListener('change', function() {
    controlSounds.setVolume(sounds.soundForest, volumeForest)
  })
  
  volumeRain.addEventListener('change', function() {
    controlSounds.setVolume(sounds.soundRain, volumeRain)
  })
  
  volumeCoffeeShop.addEventListener('change', function() {
    controlSounds.setVolume(sounds.soundCoffeeShop, volumeCoffeeShop)
  })
  
  volumeFireplace.addEventListener('change', function() {
    controlSounds.setVolume(sounds.soundFireplace, volumeFireplace)
  })
}