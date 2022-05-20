function add(num1, num2)
{
    var result = num1 + num2;
    return result;
}

function print(sum)
{
    document.write("Sum = " + sum + "<br>");
}

var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter second number: ");
num1 = parseInt(num1);
num2 = parseInt(num2);

var result = add(num1, num2);
print(result);

 