import gravitationalBeep from '../assets/audios/gravitational_beep.mp3';

export function loadBeep() {
  const audio = new Audio(gravitationalBeep);
  audio.load();

  /* Para o safari */
  return () => {
    audio.currentTime = 0;
    audio.play();
  };
}
