
var heading = document.querySelector("h1");

var len = document.querySelectorAll(".button").length;

for (var i = 0; i < len; i++) {
    var button = document.querySelectorAll(".button")[i];
    button.addEventListener("click", function () {
        var text = this.innerHTML;
        heading.innerHTML = text + " is clicked";
    });
}

