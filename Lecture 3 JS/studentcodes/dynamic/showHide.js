// showHide.js
//   Illustrates visibility control of elements
     
// The event handler function to toggle the visibility 
//    of the images of Saturn 

function flipImag() {
  dom = document.getElementById("nebula").style;  

  if(dom.visibility == 'visible'){
    dom.visibility  = 'hidden';
  }else{
    dom.visibility  = 'visible';
  }

}
