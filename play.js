var levelValue;

if (localStorage.getItem("levelValue" == null)) {

} else {
    levelValue = localStorage.getItem("levelValue");
} 

function onLoad() {
    if (levelValue == 'Level 2') {
        document.getElementById('mul').onclick = function() {setType('mul2')};
        document.getElementById('div').onclick = function() {setType('div2')};
    } else {

    }
}



function plusHover(element) {
    element.setAttribute('src', 'images/plus-h.png');
}

function plusUnhover(element) {
    element.setAttribute('src', 'images/plus.png');
}

function minusHover(element) {
    element.setAttribute('src', 'images/minus-h.png');
}

function minusUnhover(element) {
    element.setAttribute('src', 'images/minus.png');
}

function multiHover(element) {
    element.setAttribute('src', 'images/multi-h.png');
}

function multiUnhover(element) {
    element.setAttribute('src', 'images/multi.png');
}

function divHover(element) {
    element.setAttribute('src', 'images/div-h.png');
}

function divUnhover(element) {
    element.setAttribute('src', 'images/div.png');
}