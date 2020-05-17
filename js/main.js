window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        '#60d394',
        '#d3c260',
        '#d36060',
        '#d360a7',
        '#8260d3',
        '#6096d3'
    ];

    console.log(sounds[0]);

    // SOUNDS
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });

    //Create a function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function () {
            visual.removeChild(this);
        });
    }

    // play sound with Keys (wxcvbn)
    function playSoundWithKeys(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if (!audio) return; // don't execute if no sound
        audio.currentTime = 0;
        audio.play();
    }
    window.addEventListener('keydown', playSoundWithKeys);


    // add "press" class to pad when keys down
    document.onkeydown = function addClassToKeys() {
        switch (event.keyCode) {
            case 87:
                $('.pad1').addClass("press");
                break;
            case 88:
                $('.pad2').addClass("press");
                break;
            case 67:
                $('.pad3').addClass("press");
                break;
            case 86:
                $('.pad4').addClass("press");
                break;
            case 66:
                $('.pad5').addClass("press");
                break;
            case 78:
                $('.pad6').addClass("press");
                break;
        }
    }
    //remove "press" class to pad when keys up
    document.onkeyup = function removeClassToKeys() {
        switch (event.keyCode) {
            case 87:
            case 88:
            case 67:
            case 86:
            case 66:
            case 78:
                $('.pad').removeClass("press");
                break;
        }
    }
});


