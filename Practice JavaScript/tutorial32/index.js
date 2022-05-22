console.clear();
var times = 5, won = 0, lost = 0;
while (times--) {

    var num = parseInt(prompt("Enter Your Guess Between 1 to 5: \n" 
    + "Guess left " + (times + 1)));

    var random = Math.floor(Math.random() * 5 + 1);

    if (num == random) {
        alert("You have won!");
        console.log("You have won!");
        won++;
    }
    else {
        alert("You have lost! Random number was " + random);
        console.log("You have lost! Random number was " + random);
        lost++;
    }
}
document.write("You have won " + won + " times <br>");
document.write("You have lost " + lost + " times");


