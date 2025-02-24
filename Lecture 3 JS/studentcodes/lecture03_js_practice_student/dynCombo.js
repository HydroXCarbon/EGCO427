// dynValue.js
//   Illustrates dynamic values
     
var helpers = ["Bob 1234 Bangkok", "Mary 5678 Phuket","Susan 9012 Nakorn Prathom"];

function messages(name){
  document.getElementById("adviceBox").value = helpers[name];
}