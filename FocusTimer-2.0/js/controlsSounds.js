export default function ControlSounds() {

  var isPlaying = false;

  function playPause(audio) {
    isPlaying ? audio.pause() : audio.play();
 
    audio.onplaying = function() {
      isPlaying = true;
    };
    audio.onpause = function() {
      isPlaying = false;
    };
  };

   return {
    playPause
  }
}