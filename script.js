var text = prompt("Input text to be displayed");
var speed = Number(prompt("Input words per minute"));
var framecount = 0;
var i = 0;

function frame() {
    if (framecount % Math.floor((60 / (speed / 60))) == 0) {
        var word = "";
        while (text[i] == ' ' && i < text.length)
            ++i;
        while (text[i] != ' ' && i < text.length) {
            word += text[i];
            ++i;
        }
        document.getElementById("text").innerHTML = word;
    }

    ++framecount;

    requestAnimationFrame(frame);
}

frame();