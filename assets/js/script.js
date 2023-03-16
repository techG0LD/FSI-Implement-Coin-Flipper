// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function() {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    let total = 0;
    let numberOfHeads = 0;
    let numberOfTails = 0;
    let percentageHeads = 0;
    let percentageTails = 0;

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler

    const flipButton = document.querySelector('#flip');
    const clearButton = document.querySelector('#clear');
    const statusMessage = document.querySelector('#statusMessage');
    const pennyImage = document.querySelector('img');
    const numberHeadsCell = document.querySelector('#heads');
    const numberTailsCell = document.querySelector('#tails');
    const percentageHeadsCell = document.querySelector('#heads-percent');
    const percentageTailsCell = document.querySelector('#tails-percent');

     flipButton.addEventListener('click', function(e){
        total += 1;
        

        const result = Math.round(Math.random() * 100);
    

        //heads
        if(result > 50) {
            numberOfHeads += 1;
            statusMessage.textContent= "You flipped Heads!";
            pennyImage.src = "assets/images/penny-heads.jpg";

        } else {
            //tails
            numberOfTails += 1;
            statusMessage.textContent = "You flipped Tails!";
            pennyImage.src = "assets/images/penny-tails.jpg";
        }

        percentageHeads = Math.round((numberOfHeads / total) * 100);
        percentageTails = Math.round((numberOfTails / total) * 100);
        numberHeadsCell.textContent = `${numberOfHeads}`;
        numberTailsCell.textContent = `${numberOfTails}`;
        percentageHeadsCell.textContent = `${percentageHeads}%`;
        percentageTailsCell.textContent = `${percentageTails}%`;

    });

    clearButton.addEventListener('click',function(e) {
        total = 0;
        numberOfHeads = 0;
        numberOfTails = 0;
        percentageHeads = 0;
        percentageTails = 0;

        numberHeadsCell.textContent = `${numberOfHeads}%`
        numberTailsCell.textContent = `${numberOfTails}%`
        percentageHeadsCell.textContent = `${percentageHeads}%`
        percentageTailsCell.textContent = `${percentageTails}%`
        statusMessage.textContent = "Let's Get Rolling!";
        pennyImage.src = 'assets/images/penny-heads.jpg';


        
    });



        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})