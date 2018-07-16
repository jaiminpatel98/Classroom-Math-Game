var student;
var studentID;
function addStudent() {
    database = firebase.database();
    var user = firebase.auth().currentUser.uid;
    var ref = database.ref("users/" + user + "/class");
    student = document.getElementById("addClass").value;
    if(student != ""){
        var data = {
            student: student
        }
        ref.push(data);
    }
    //addQuestions(user, student);
    document.getElementById("addClass").value = "";
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

function addQuestions(user){
    alert("Adding Questions")
    database = firebase.database();
    var ref = database.ref("users/" + user + "/class");
    ref.on("value", gotClass, errClass);
    alert("gotStudents");
    
}

function errClass(err) {
    console.log("Error:");
    console.log(err);
}

var studentList = [];
function gotClass(data){
    var user = firebase.auth().currentUser.uid;
    var classList = data.val();
    var keys = Object.keys(classList);
    for(var i = 0; i < keys.length; i++)
    {
        var k = keys[i];
        var tempStudent = classList[k].student;
        studentList[i] = tempStudent;
    }
    for(var i = 0; i < studentList.length; i++){
        alert("multipleTimes");
        if(studentList[i] == student){
            alert("Entering Users");
            var ref2 = database.ref("users/" + user + "/Questions");
            ref2.on("value", gotQuestionSet, errQuestionSet);
        }
    }
}

function errQuestionSet(err) {
    console.log("Error:");
    console.log(err);
}

function gotQuestionSet(data) {
    var questionSets = data;
    var keys = Object.keys(questionSets);
    var usersRef = database.ref("users/");
    usersRef.on("value", gotUsers, errUsers);
    
}

function errUsers(err) {
    console.log("Error:");
    console.log(err);
}
var ref3;
var studentfound = false;
function gotUsers(data) {
    var i = 0;
    var users = data.val();
    var keys = Object.keys(users);
    while(!studentfound){
        
        var k = keys[i];
        console.log(users[k]);
        var currentEmail = users[k].email;
        var currentUser = users[k].userID;
        alert(currentUser);
        if(currentEmail == student){
            alert("MADE IT");
            ref3 = database.ref("users/" + currentUser + "/customQuestions");
            ref3.push("hey");
            alert(studentID);
        } else {
            alert("WRONG");
        }
        i++;
    }
    
}


