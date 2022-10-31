// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = speechSynthesis
  let selectVoice = document.getElementById("voice-select");
  const voices = synth.getVoices();

  const name = voices[0];

  for(var i = 0; i < voices.length; i++) {
    var opt = voices[i].name;
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectVoice.appendChild(el);
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