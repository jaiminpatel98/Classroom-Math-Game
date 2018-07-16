function logout() {
    firebase.auth().signOut();
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      //do nothing
      var user = firebase.auth().currentUser.uid;
      var email = firebase.auth().currentUser.email;
      sessionStorage.setItem("userId", user);
      database = firebase.database();
      var ref = database.ref("users/" + user + "/email");
      var ref2 = database.ref("users/" + user + "/accountType");
      var ref3 = database.ref("users/" + user + "/userID");
      ref.set(email);
      ref3.set(user);
      if(email.includes("@edu")){
        ref2.set("Educator", function(){
            window.location.href = "home-educator.html";
        });
        
      } else{
          ref2.set("Student");
      }
      if(email.includes("@edu")){
        
      }
    } else {
      //login or create account
      window.location.href = "index.html"
    }
});

function playHover(element) {
    element.setAttribute('src', 'images/play-icon-h.png');
}

function playUnhover(element) {
    element.setAttribute('src', 'images/play-icon.png');
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