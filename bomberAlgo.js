// Initialize step counter to print console messages
var step = 1;

// The bomberAlgo function
var bomberAlgo = function(inputString) {

    // Split the characters in inputString into an array
    var inputArray = inputString.split("");
    
    // Iterate over the array
    for(var i = 0; i < inputArray.length; i++) {
        // Reset spliceCount and residualString at every step
        var spliceCount = 0;
        var residualString = "";

        if(inputArray[i] === inputArray[i + 1]) {
            // First two consecutive occurrences of the same character found
            spliceCount = spliceCount + 2;

            for(var j = i + 1; j < inputArray.length; j++) {
                if(inputArray[j] === inputArray[j+1]) {
                    // Keep incrementing spliceCount for all the next consecutive occurrence of the same character found above
                    spliceCount++;
                } else {
                    // Break from the inner loop (which finds the third occurrence and onward for the first two consecutive characters found),
                    // and continue with the outer loop which iterates over the array
                    break;
                }
            }

            // Remove all the consecutive occurrences of the character when the next character doesn't match
            inputArray.splice(i, spliceCount);

            // Create the residualString for printing into the console
            residualString = inputArray.join("");
            console.log("Step - " + (step++) + ": " + residualString);

            // Reset i for the main counter to iterate over the array from the beginning
            i = -1;
        }    
    }
};

// User Input based Call bomberAlgo function
console.log("\nEnter your input string: ");

var stdin = process.openStdin();
stdin.addListener("data", function(userInput) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim()
    var inputString = userInput.toString().trim();
    console.log("\nYou have entered: [" + 
        inputString + "]");

    console.log("\nBombing your string..!");

    // Call bomberAlgo function
    bomberAlgo(inputString);

    console.log("\nYour string has been successfully bombed!"); 
});

// Hardcoded Call bomberAlgo function
// bomberAlgo("aabbc");