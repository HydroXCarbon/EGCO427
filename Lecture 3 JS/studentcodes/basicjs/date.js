// date.html 
//   Illustrates the use of the Date object by 
//   displaying the parts of a current date and
//   using two Date objects to time a calculation
    
// Get the current date

      var today = new Date();

// Fetch the various parts of the date
      
      var date = today.toLocaleDateString('en-US', { weekday: 'long' });
      var month = today.toLocaleDateString('en-US', { month: 'long' });
      var day = today.getDate();
      var year = today.getFullYear();
      var time = today.toLocaleTimeString();

// Display the parts

      document.write(
            date + ' ' + day + ' ' + month + ' ' + year + ' ' + time + "<br />"
      );
	//Write your own code here 
