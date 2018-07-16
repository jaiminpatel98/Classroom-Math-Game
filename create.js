function onLoad() {
    var config = {
        apiKey: "AIzaSyB3aDWMeVBkoBX6_Td6WKjj81kRiETBHmA",
        authDomain: "quick-maths-cb609.firebaseapp.com",
        databaseURL: "https://quick-maths-cb609.firebaseio.com",
        projectId: "quick-maths-cb609",
        storageBucket: "quick-maths-cb609.appspot.com",
        messagingSenderId: "704606376986"
      };
    firebase.initializeApp(config);
    
}

function newQuestion() {
    database = firebase.database();
    var setname = document.getElementById('set-name').value;
    var head = document.getElementById('heading').innerHTML;
    var answer = document.getElementById('answer').value;
    var choices = document.getElementById('choices').value;
    var choicesArray = choices.split(',');
    var qnumber = head.slice(-2);
    if (qnumber.charAt(0) == " ") {
        qnumber = qnumber.slice(-1);
    }
    var question = document.getElementById('problem').value;
    var user = firebase.auth().currentUser.uid;
    var ref = database.ref('users/' + user + '/Questions/' + setname + '/Question' + qnumber);
    var data = {
        Answer: answer,
        Option2: choicesArray[0],
        Option3: choicesArray[1],
        Option4: choicesArray[2],
        Question: question
    };
    ref.push(data);
    qnumber = Number(qnumber) + 1;
    document.getElementById('set-name').disabled = true;
    document.getElementById('heading').innerHTML = 'Create Question ' + qnumber;
    document.getElementById('problem').value = "";
    document.getElementById('answer').value = "";
    document.getElementById('choices').value = "";
}

function saveExit() {
    database = firebase.database();
    var setname = document.getElementById('set-name').value;
    var head = document.getElementById('heading').innerHTML;
    var answer = document.getElementById('answer').value;
    var choices = document.getElementById('choices').value;
    var choicesArray = choices.split(',');
    var qnumber = head.slice(-2);
    if (qnumber.charAt(0) == " ") {
        qnumber = qnumber.slice(-1);
    }
    var question = document.getElementById('problem').value;
    var user = firebase.auth().currentUser.uid;
    var ref = database.ref('users/' + user + '/Questions/' + setname + '/Question' + qnumber);
    var data = {
        Answer: answer,
        Option2: choicesArray[0],
        Option3: choicesArray[1],
        Option4: choicesArray[2],
        Question: question
    };
    ref.push(data, function() {
        window.location.href = 'home-educator.html';
    });
    
;}