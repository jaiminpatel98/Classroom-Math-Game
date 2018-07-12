function arrowPressed(event) {
    var keyPressed = event.charCode || event.keyCode;
    var getKey = String.fromCharCode(keyPressed);
    switch(getKey) {
        case "%":
            document.getElementById("left").setAttribute('src', 'images/arrow-left-h.png');
            break;
        case "'":
            document.getElementById("right").setAttribute('src', 'images/arrow-right-h.png');
            break;
        case "&":
            document.getElementById("up").setAttribute('src', 'images/arrow-up-h.png');
            break;
        case "(":
            document.getElementById("down").setAttribute('src', 'images/arrow-down-h.png');
    }

}

function arrowPressedDone(event) {
    var keyPressed = event.charCode || event.keyCode;
    var getKey = String.fromCharCode(keyPressed);
    switch(getKey) {
        case "%":
            document.getElementById("left").setAttribute('src', 'images/arrow-left.png');
            break;
        case "'":
            document.getElementById("right").setAttribute('src', 'images/arrow-right.png');
            break;
        case "&":
            document.getElementById("up").setAttribute('src', 'images/arrow-up.png');
            break;
        case "(":
            document.getElementById("down").setAttribute('src', 'images/arrow-down.png');
    }

}