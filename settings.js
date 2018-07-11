$(function () {
    $('#cp1').colorpicker();
});

function changeBackground() {
    var color; 
    color = document.getElementById("cp1");
    color = color.value;
    document.body.style.backgroundColor = color;
}