// expose.js

window.addEventListener('DOMContentLoaded', init);

const jsConfetti = new JSConfetti();

function init() {
  
  let selectHorn = document.getElementById("horn-select");
  let currChoice;
  let audioFile = document.querySelector(".hidden");
  
  selectHorn.addEventListener('change', (event) => {

    currChoice = event.target.value;
        
    //set the corresponding image
    document.querySelector("img").src=`assets/images/${currChoice}.svg`;

    //set the corresponding audio file
    audioFile.setAttribute('src', `assets/audio/${currChoice}.mp3`);
  });

  const buttonPlaySound = document.querySelector('button');
  
  buttonPlaySound.addEventListener('click', (event) => {
    document.querySelector(".hidden").play();
    if(currChoice == 'party-horn') {
      jsConfetti.addConfetti();
    }
  });


  let slider = document.getElementById("volume");  
  //const volIcon = document.querySelector("div > img");
  const volIcon = document.querySelector("#volume-controls > img");
  console.log(`vol icon is ${volIcon.src}`);
  
  slider.oninput = function() {
    let volLevel;
    let sliderVal = this.value;
    if (sliderVal == 0) {
      volLevel = 0;
    }
    else if (sliderVal > 0 && sliderVal < 33) {
      volLevel = 1;
    }
    else if (sliderVal > 33 && sliderVal < 67) {
      volLevel = 2;
    }
    else {
      volLevel = 3;
    }
    volIcon.src=`assets/icons/volume-level-${volLevel}.svg`;
    //console.log(`slider value ${this.value}`);
    audioFile.volume = sliderVal/100;
    console.log(`vol icon is ${volIcon.src}`);
  }
  
  
}