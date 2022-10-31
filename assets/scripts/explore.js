// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  let selectVoice = document.getElementById("voice-select");
  const voices = synth.getVoices();

  let voice = voices[0];

  function populateVoiceList() {
    
  
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      selectVoice.appendChild(option);
    }
  }
  
  populateVoiceList();
  
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }


  selectVoice.addEventListener('change', (event) => {

    voice = event.target.value;

        

  });

  synth.addEventListener('change', (event) => {

    if(synth.speaking == true){
      document.querySelector("img").src=`assets/images/smiling-open.png`;
    }
    else{
      document.querySelector("img").src=`assets/images/smiling.png`;
    }

  });
  

  const buttonPressToTalk = document.querySelector('button');
  const message = document.getElementById('text-to-speak').value

  buttonPressToTalk.addEventListener('click', (event) => {
    console.log(message);
    const utterThis = new SpeechSynthesisUtterance(message);
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === voice) {
        utterThis.voice = voices[i];
      }
    }
  
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
    
  });



}