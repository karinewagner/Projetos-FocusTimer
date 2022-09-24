export default function Sounds() {
  const soundForest = new Audio('sounds/Floresta.wav');
  const soundRain = new Audio('sounds/Chuva.wav');
  const soundCoffeeShop = new Audio('sounds/Cafeteria.wav');
  const soundFireplace = new Audio('sounds/Lareira.wav');

  soundForest.loop = true;
  soundRain.loop = true;
  soundCoffeeShop.loop = true;
  soundFireplace.loop = true;

  soundForest.volume = 0.5;
  soundRain.volume = 0.5;
  soundCoffeeShop.volume = 0.5;
  soundFireplace.volume = 0.5;

  return {
    soundForest,
    soundRain,
    soundCoffeeShop,
    soundFireplace
  }
}
