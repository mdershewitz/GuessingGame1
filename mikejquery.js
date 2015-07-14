$( document ).ready(function() {

	targetNumber = Math.floor((Math.random() * 100) + 1);

    $(playersGuess).click(function( event ) {
    	// Pull in the guess from the text box
    	var guess =  $(playersGuessText).val();
        // Check to make sure this is a number, and 1-100
        event.preventDefault();
    });
 
});