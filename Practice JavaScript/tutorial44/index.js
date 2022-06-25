
var len = document.getElementsByClassName("button").length;

var audio1 = new Audio('sounds/a.mp3');
var audio2 = new Audio('sounds/b.mp3');
var audio3 = new Audio('sounds/c.mp3');

for (var i = 0; i < len; i++) {

    document.querySelectorAll(".button")[i].addEventListener("mouseover", function play() {
        var text = this.innerHTML;
        audioPlay(text);
        animationPlay(text);
    });
    document.querySelectorAll(".button")[i].addEventListener("mouseout", function pause() {
        var text = this.innerHTML;
        audioPause(text);
        animationStop(text);
    });
}


function audioPlay(text) {
    switch (text) {
        case "a":
            audio1.play();
            break;

        case "b":
            audio2.play();
            break;

        case "c":
            audio3.play();
            break;
    }
}


function audioPause(text) {
    switch (text) {
        case "a":
            audio1.pause();
            break;

        case "b":
            audio2.pause();
            break;

        case "c":
            audio3.pause();
            break;
    }
}

function animationPlay(text) {
    text = "." + text
    var button = document.querySelector(text);
    button.classList.add("anim");
}
function animationStop(text) {
    text = "." + text;
    var button = document.querySelector(text);
    button.classList.remove("anim");
}

document.addEventListener("keypress", function (event) {
    var text = event.key;

    audioPlay(text);
    animationPlay(text);

    document.addEventListener("keypress", function (event) {
        audioPause(text);
        animationStop(text);

    });

});

