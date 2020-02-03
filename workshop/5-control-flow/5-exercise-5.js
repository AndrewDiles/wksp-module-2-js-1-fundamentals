// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q5
// Write a loop that will output every hour of the day (0 to 23) and
// determine whether it is time to sleep, eat or train.
// Life in the army is regimented! These are the hours alloted to each activity.
// Sleep between 22h and 5h
// Eat at 7h, 13h and 18h
// The rest of the time is spent training.

// The output should look something like 
// It's 11h. Time to train!
// It's 12h. Time to train!
// It's 13h. Time to eat!

for (let t = 0; t < 24; t ++) {
    if(t<6 || t>21){
        console.log('It\'s ' + t + 'h.  Time to sleep!');
    }
    else if(t===7||t===13||t===18){
        console.log('It\'s ' + t + 'h.  Time to eat!');
    }
    else {
        console.log('It\'s ' + t + 'h.  Time to train! X gon give it to ya!  Fuck waiting for you to get it on your own, X gonna deliver!  Knock knock...');
    }
}