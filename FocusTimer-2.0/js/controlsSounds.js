export default function sounds() {
  const soundForest = new Audio('sounds/Floresta.wav');
  const soundRain = new Audio('sounds/Chuva.wav');
  const soundCoffeeShop = new Audio('sounds/Cafeteria.wav');
  const soundFireplace = new Audio('sounds/Lareira.wav');

  var isPlaying = false;

  function playForest() {
    isPlaying ? soundForest.pause() : soundForest.play();
  };
    soundForest.onplaying = function() {
      isPlaying = true;
    };
    soundForest.onpause = function() {
      isPlaying = false;
    };

  function playRain() {
    isPlaying ? soundRain.pause() : soundRain.play();
  };
    soundRain.onplaying = function() {
      isPlaying = true;
    };
    soundRain.onpause = function() {
      isPlaying = false;
    };


  function playCoffeeShop() {
    isPlaying ? soundCoffeeShop.pause() : soundCoffeeShop.play();
  };
    soundCoffeeShop.onplaying = function() {
      isPlaying = true;
    };
    soundCoffeeShop.onpause = function() {
      isPlaying = false;
    };

  function playFireplace() {
    isPlaying ? soundFireplace.pause() : soundFireplace.play();
  };
    soundFireplace.onplaying = function() {
      isPlaying = true;
    };
    soundFireplace.onpause = function() {
      isPlaying = false;
    };

  return {
    playForest,
    playRain,
    playCoffeeShop,
    playFireplace
  }
}