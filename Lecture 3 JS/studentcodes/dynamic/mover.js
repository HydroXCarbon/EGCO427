// mover.js
//   Illustrates moving an element within a document
     
// The event handler function to move an element

function moveIt(movee, newTop, newLeft) {

  dom = document.getElementById(movee).style; 

  dom.top = newTop + "px";
  dom.left = newLeft + "px";
}
