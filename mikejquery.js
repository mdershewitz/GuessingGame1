$(document).ready(function() {
	var guessarray = [];
	var counter = 5;
	var targetnumber = Math.floor((Math.random() * 100) + 1);

    $("#playersGuessButton").on('click', function() {
    	// Pull in the guess from the text box
        var guess =  $("#playersGuessText").val();
        // Check to make sure this is a number, and 1-100
        alert(guess);
     //   alert(guess);
        if (isNaN(guess)){ 
          alert("Error.  This must be a number!");
          throw "Error.  This must be a number!";
        }
        if (guess < 1 || guess > 100) {
        	alert("Error.  Must be an integer between 1 and 100");
            throw "Error.  Must be an integer between 1 and 100";
        }
       
       // There has been a legitimate number entered
       guessarray.push(guess);

       // Change the counter
       counter--;
       var countString = "";
       countString = countString + counter + " Guesses Remaining";
       $("#guess-count").text(countString);

      // Update the status
      var status = "";
      if (Math.abs(guess - targetnumber) <= 10) {
      	statusText = statusText + "Hot.  ";
      }
      else {
      	statusText = statusText + "Cold.  ";
      }
      if (guess < targetnumber) {
      	statusText = statusText + "Too low";
      }
      else {
      	statusText = statusText + "Too high";
      }
      $("#status").text(statusText);

     // Check and see if the game is still on
     if (counter===0) {
     	$("#status").text("Game over!");
     	$("#guess-count").text("Game over!");
     } 

       event.preventDefault();
    });
 
});

// I need to improve this:
// End the game