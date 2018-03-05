function welcome() {
  var x = document.getElementById("username");
  document.getElementById("textBox") = x;
}

function password() {
  var password = document.getElementById("password").value;
  if ( password == "chickens") {
    return welcome();
  } else {
    return alert("Incorrect Password");
  }
}

var nukePass = prompt("Type password to initiate nuclear weapon launch.");

function nuke() {
  if (nukePass == "mystery") {
  return console.log("working");
  }
}
