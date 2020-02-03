// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q8
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let x = 1; x < 8; x ++) {
    display ="";
    for (let i = 1; i<=x; i++){
        display += "#";
    }
    console.log(display);
}


// for (let x = 1; x < 8; x ++) {
//     if (x===1){
//         console.log('#');
//     }
//     if (x===2){
//         console.log('##');
//     }
//     if (x===3){
//         console.log('###');
//     }
//     if (x===4){
//         console.log('####');
//     }
//     if (x===5){
//         console.log('#####');
//     }
//     if (x===6){
//         console.log('######');
//     }
//     if (x===7){
//         console.log('#######');
//     }
// }