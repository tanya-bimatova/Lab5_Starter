// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = speechSynthesis
  let selectVoice = document.getElementById("voice-select");
  const voices = synth.getVoices();

  const name = voices[0];

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();
  
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }


  selectVoice.addEventListener('change', (event) => {

    voice = event.target.value;
        

  });

  

  const buttonPressToTalk = document.querySelector('button');
  const message = document.getElementById('text-to-speak"')

  buttonPressToTalk.addEventListener('click', (event) => {
    
    const utterThis = new SpeechSynthesisUtterance(message.value);
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === voice) {
        utterThis.voice = voices[i];
      }
    }
  
    synth.speak(utterThis);
    
  });

}