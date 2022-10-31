// explore.js

window.addEventListener('DOMContentLoaded', init);
const synt = speechSynthesis
function init() {
  let selectVoice = document.getElementById("voice-select");
  let currChoice;
  voices = synth.getVoices();

  const name = voices[0];

  for(var i = 0; i < options.length; i++) {
    var opt = voices;
    var el = document.createElement("option");
    el.textContent = opt.name;
    el.value = opt;
    select.appendChild(el);
}

  selectVoice.addEventListener('change', (event) => {

    voice = event.target.value;
        

  });

  

  const buttonPressToTalk = document.querySelector('button');
  const message = document.getElementById('text-to-speak"')

  buttonPressToTalk.addEventListener('click', (event) => {
    
    const utterThis = new SpeechSynthesisUtterance(message.value);
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === name) {
        utterThis.voice = voice;
      }
    }
  
    synth.speak(utterThis);
    
  });

}