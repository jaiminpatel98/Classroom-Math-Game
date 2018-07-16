$(function () {
    $('#cp1').colorpicker();
});

var levelValue;

if (localStorage.getItem("levelValue") == null) {

} else {
    levelValue = localStorage.getItem("levelValue");
}


function changeBackground() {
    color = document.getElementById("cp1");
    color = color.value;
    document.body.style.backgroundColor = color;
}
function onLoad() {
    if(localStorage.getItem("levelValue") != null) {
        document.getElementById('level').value = localStorage.getItem("levelValue");
    }

}
function save() {
    saveSettings();
    document.getElementById('savebtn').className = "btn btn-outline-success";
    window.location.href = 'home-educator.html';
}

function saveSettings() {
    var level = document.getElementById('level').value;
    localStorage.setItem("levelValue", level);
}

