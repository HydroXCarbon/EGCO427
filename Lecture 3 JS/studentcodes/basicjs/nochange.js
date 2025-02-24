// nochange.js
//   This script illustrates using the focus event
//   to prevent the user from changing a text field

// The event handler function to compute the cost

function computeCost() {
//add your code here

// Compute the cost

  //document.getElementById("cost").value = 
  french = parseInt(document.getElementById("french").value) || 0
  hazelnut = parseInt(document.getElementById("hazelnut").value) || 0
  columbian = parseInt(document.getElementById("columbian").value) || 0
  if (french < 0 || hazelnut < 0 || columbian < 0){
    alert("Invalid input")
    return
  }

  totalCost = french * 3.49 + hazelnut * 3.95 + columbian * 4.59

  return document.getElementById("cost").value = totalCost.toFixed(2)
}  //* end of computeCost
