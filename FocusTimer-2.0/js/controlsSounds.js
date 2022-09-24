export default function ControlSounds() {
  let currentSoundPlaying = null

  function currentSounds(audio) {
    if (currentSoundPlaying) {
      currentSoundPlaying.pause()
      
      if (currentSoundPlaying !== audio) {
        currentSoundPlaying = audio
        audio.play()
      } else {
        currentSoundPlaying = null
      }
    } else {
      currentSoundPlaying = audio
      audio.play()
    }
  }

  function setVolume(soundReference, inputToChange) {
    soundReference.volume = inputToChange.value;
  } 

  return {
    currentSounds,
    setVolume
  }
}