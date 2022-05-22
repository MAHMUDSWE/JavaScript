// var num = new Array;
// var sum = 0;
// for(var i=0; i<5; i++){

//     num[i] = parseInt( prompt("Enter number : ")) ;

//     sum = sum + num[i];

//     console.log(num[i]);
// }

// console.log(sum);

// var num = [5, 20, 3, 2, 6, 9, 19];

// num.sort(function(a, b){
//     return b-a;
// });

// console.log(num);


// function highestScore(scores) {

//     var max = scores[0];

//     for(var i = 1; i < scores.length; i++){
//         if(max < scores[i]){
//             max = scores[i];
//         }
//     }

//     return max;
// }

// var scores = [5, 20, 55, 3, 2, 6, 9, 19];

// var max = highestScore(scores);

// console.log(max);

function highestRunScorer(playerInfo) {
    
    var highestScore = playerInfo[0][1];
    var highestScorer = playerInfo[0][0];

    for(var i = 1; i < playerInfo.length; i++){

        if(highestScore < playerInfo[i][1]){

            highestScore = playerInfo[i][1];

            highestScorer = playerInfo[i][0];
        }

    }
    return highestScorer;

}

var playerInfo = [
    ["Mahmud", 91],
    ["fahim", 93],
    ["salman", 85],
    ["abir", 90],
];

var highestScorer = highestRunScorer(playerInfo);

console.log(highestScorer);