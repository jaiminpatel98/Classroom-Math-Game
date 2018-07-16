function logout() {
    firebase.auth().signOut();
}
function alertUser(){
    alert("ALERT!");
}
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      //do nothing
      var user = firebase.auth().currentUser.uid;
      sessionStorage.setItem("userId", user);
    } else {
      //login or create account
      window.location.href = "index.html"
    }
});

function playHover(element) {
    element.setAttribute('src', 'images/plus-h.png');
}

function playUnhover(element) {
    element.setAttribute('src', 'images/plus.png');
}

function questionHover(element) {
    element.setAttribute('src', 'images/question-icon-h.png');
}

function questionUnhover(element) {
    element.setAttribute('src', 'images/question-icon.png');
}

function settingsHover(element) {
    element.setAttribute('src', 'images/settings-icon-h.png');
}

function settingsUnhover(element) {
    element.setAttribute('src', 'images/settings-icon.png');
}

function historyHover(element) {
    element.setAttribute('src', 'images/history-icon-h.png');
}

function historyUnhover(element) {
    element.setAttribute('src', 'images/history-icon.png');
}