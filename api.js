let date = Date();

function student() {
  var person = prompt("Please enter your name", "John Doe");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}
