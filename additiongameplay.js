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

function firebaseSetup() {
    var config = {
        apiKey: "AIzaSyB3aDWMeVBkoBX6_Td6WKjj81kRiETBHmA",
        authDomain: "quick-maths-cb609.firebaseapp.com",
        databaseURL: "https://quick-maths-cb609.firebaseio.com",
        projectId: "quick-maths-cb609",
        storageBucket: "quick-maths-cb609.appspot.com",
        messagingSenderId: "704606376986"
      };
      firebase.initializeApp(config);
      database = firebase.database();
      var ref = database.ref('Questions');
      ref.on("value", gotQuestions, errorQuestions);
}

function gotQuestions(data) {
    console.log(data.val());
}

function errorQuestions(err) {
    console.log("Error:");
    console.log(err);
}
