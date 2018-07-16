$(function () {
    $('#cp1').colorpicker();
});

var levelValue;

if (localStorage.getItem("levelValue") == null) {

} else {
    levelValue = localStorage.getItem("levelValue");
}

function changeBackground() {
    var color; 
    color = document.getElementById("cp1");
    color = color.value;
    document.body.style.backgroundColor = color;
}

function save() {
    saveSettings();
}

function saveSettings() {
    var level = document.getElementById('level').value;
    localStorage.setItem("levelValue", level);
}

