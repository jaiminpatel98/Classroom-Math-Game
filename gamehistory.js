var user;
if(sessionStorage.getItem("userId") == null) {

} else {
    user = sessionStorage.getItem("userId");
}
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
      database = firebase.database();
      getTableData();
      
}

function getTableData() {
    var ref = database.ref('users/' + user + '/scores');
    ref.on('value', scoresSuccess, scoresError);
}

function scoresError(err) {
    console.log("Error:");
    console.log(err);
}
var scoreSet = [];
var dateSet = [];
var typeSet = [];
function scoresSuccess(data) {
    var scores = data.val();
    console.log(scores);
    var keys = Object.keys(scores);
    for(var i = 0; i < keys.length; i++){
        var k = keys[i];
        var score = scores[k].score;
        scoreSet[i] = score;
        var date = scores[k].date;
        dateSet[i] = date;
        var type = scores[k].type;
        if(type == "add") {
            type = "Addition - Level 1";
        } else if(type == "sub") {
            type = "Subtraction - Level 1";
        } else if(type == "mul") {
            type = "Multiplication - Level 1";
        } else if(type == "mul2") {
            type = "Multiplication - Level 2";
        } else if(type == "div") {
            type = "Division - Level 1";
        } else if(type == "div2") {
            type = "Division - Level 2";
        }
        typeSet[i] = type;
    }
    for(var i = 0; i < dateSet.length; i++){
        console.log(scoreSet.length);
        console.log(dateSet[i]);
        console.log(typeSet[i]);
        console.log(scoreSet[i]);
    }
    tableCreation();

    
}

function tableCreation(){
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    var text1 = document.createTextNode('Date');
    var th2 = document.createElement('th');
    var text2 = document.createTextNode('Game Type');
    var th3 = document.createElement('th');
    var text3 = document.createTextNode('Score');
    th1.appendChild(text1);
    th2.appendChild(text2);
    th3.appendChild(text3);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    table.appendChild(tr);
    for (var i = 0; i < scoreSet.length; i++){
        var tr = document.createElement('tr');   

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var text1 = document.createTextNode(dateSet[i]);
        var text2 = document.createTextNode(typeSet[i]);
        var text3 = document.createTextNode(scoreSet[i]);



        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);


        table.appendChild(tr);
    }
    document.getElementById("gameHistory").appendChild(table);
}