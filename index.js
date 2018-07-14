firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = "home.html";
        
    } else {
      // No user is signed in.
    }
});

/*firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      alert(user);
    } else {
      alert("no user");
    }
  });*/

function login() {
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;
    alert(email + " - " + password);
    
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error " + errorCode + " : "+ errorMessage);

        // ...
    });
}

function signup() {
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error " + errorCode + " : "+ errorMessage);
        // ...
    });

}

function setUserInfo() {
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var level = document.getElementById("level");
    var database = firebase.database();
    var ref = database.ref("users");
    var data = {
        firstname: firstname,
        lastname: lastname,
        level: level
    };
    ref.push(data);

}