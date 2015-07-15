$(document).ready(function() {
	var guessarray = [];
	var counter = 5;
	var targetnumber = Math.floor((Math.random() * 100) + 1);

    $("#newGame").on('click', function () {
    	$('#playerGuessButton').attr('disabled', false);
    	guessarray = [];
    	counter = 5;
    	targetnumber = Math.floor((Math.random() * 100) + 1);
    });


    $("#playersGuessButton").on('click', function() {
    	// Pull in the guess from the text box
        var guess =  $("#playersGuessText").val();
        guess = parseInt(guess);
        // Check to make sure this is a number, and 1-100
       // alert(guess);
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
      var statusText = "";
      alert("Target number is " + targetnumber);
      alert("Type of guess is" + typeof(guess));
      alert("Guess - target number = " + (guess - targetnumber));



      if (Math.abs(guess - targetnumber) <= 10) {
      	statusText = statusText + "Hot.  ";
       }
       else {
      	statusText = statusText + "Cold.  ";
      };
     

      if (guess === targetnumber) {
      	statusText = "You got the number!!!";
      	$('#playerGuessButton').attr('disabled',true);
      }
      else if (guess < targetnumber) {
      	statusText = "Too low.  ";
        if (Math.abs(guess - targetnumber) <= 10) {
      	 statusText = statusText + "  Hot!";
       }
       else {
      	statusText = statusText + "  Cold:(";
       }
     }
      else {
      	statusText = "Too high";
        if (Math.abs(guess - targetnumber) <= 10) {
      	 statusText = statusText + "  Hot!";
       }
       else {
      	statusText = statusText + "  Cold:(";
       }
      };

     alert(statusText);
      $("#status").text(statusText);

     // Check and see if the game is still on
     if (counter===0) {
     	$("#status").text("Game over!");
     	$("#guess-count").text("Game over!");
     	$('#playerGuessButton').attr('disabled',true);
     } 

       event.preventDefault();
    });
 
});

// I need to improve this:
// End the game