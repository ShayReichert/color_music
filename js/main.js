window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        'radial-gradient(circle at center, #60d394, #60d39400)',
        'radial-gradient(circle at center, #d3c260, #60d39400)',
        'radial-gradient(circle at center, #d36060, #60d39400)',
        'radial-gradient(circle at center, #d360a7, #60d39400)',
        'radial-gradient(circle at center, #8260d3, #60d39400)',
        'radial-gradient(circle at center, #6096d3, #60d39400)'
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
        bubble.style.backgroundImage = colors[index];
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
                createBubbles(0);
                break;
            case 88:
                $('.pad2').addClass("press");
                createBubbles(1);
                break;
            case 67:
                $('.pad3').addClass("press");
                createBubbles(2);
                break;
            case 86:
                $('.pad4').addClass("press");
                createBubbles(3);
                break;
            case 66:
                $('.pad5').addClass("press");
                createBubbles(4);
                break;
            case 78:
                $('.pad6').addClass("press");
                createBubbles(5);
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


