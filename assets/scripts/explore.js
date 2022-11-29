// explore.js

window.addEventListener('DOMContentLoaded', init);
function populateVoiceList() {
  if (typeof speechSynthesis === 'undefined') {
    return;
  }

  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voiceSelect").appendChild(option);
  }
}

function init() {
  const synth = window.speechSynthesis;
  let selectVoice = document.getElementById("voice-select");
  let voices = [];

  
  const voiceSelect = document.getElementById("voice-select")
  function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
      return;
    }
  
    voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
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
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
 
  const buttonPressToTalk = document.querySelector('button');
  const message = document.getElementById('text-to-speak')
  buttonPressToTalk.addEventListener('click', (event) => {
    const voice = voiceSelect.selectedOptions[0].getAttribute('data-name');
    const utterThis = new SpeechSynthesisUtterance(message.value);
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === voice) {
        utterThis.voice = voices[i];
      }
    }
    

    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
    document.querySelector("img").src=`assets/images/smiling-open.png`
    utterThis.addEventListener("end", (event)=>{
      document.querySelector("img").src=`assets/images/smiling.png`;
  
    });
  });
  

}