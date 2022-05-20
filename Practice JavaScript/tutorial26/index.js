// var num = new Array;
// var sum = 0;
// for(var i=0; i<5; i++){

//     num[i] = parseInt( prompt("Enter number : ")) ;

//     sum = sum + num[i];

//     console.log(num[i]);
// }

// console.log(sum);

var num = [5, 20, 3, 2, 6, 9, 19];

num.sort(function(a, b){
    return b-a;
});

console.log(num);


