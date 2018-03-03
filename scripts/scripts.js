function password() {
  var password = document.getElementById("password").value;
  if ( password == "chickens") {
    var argue = alert("Welcome Back, Jade!");
    return "Correct!";
  } else {
    return alert("Incorrect Password");
  }
}

var nukePass = prompt("Type password to initiate nuclear weapon launch.");

function nuke() {
  if (nukePass == "mystery")
  return console.log("working");
}
