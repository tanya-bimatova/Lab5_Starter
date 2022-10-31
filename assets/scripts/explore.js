// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let selectVoice = document.getElementById("voice-select");
  let currChoice;
  voices = synth.getVoices();

  const name = '';

  selectVoice.addEventListener('change', (event) => {

    name = event.target.value;
        

  });

  

  const buttonPressToTalk = document.querySelector('button');
  const message = document.getElementById('text-to-speak"')

  buttonPressToTalk.addEventListener('click', (event) => {
    
    const utterThis = new SpeechSynthesisUtterance(message.value);
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === name) {
        utterThis.voice = voices[i];
      }
    }
  
    synth.speak(utterThis);
    
  });

}