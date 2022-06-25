
var nav = document.querySelector(".nav");

var link = document.getElementsByTagName("a")[1];


link.innerHTML = "about";
link.href = "/about";

link.style.textDecoration = "none";
link.style.color = "red";
link.style.fontSize = "1.5rem";

var body = document.querySelector(".body");

var heading0 = document.createElement("h1");
var text0 = document.createTextNode("This is heading 0");

var heading3 = document.createElement("h1");
var text3 = document.createTextNode("This is heading 3");

heading3.appendChild(text3);
body.appendChild(heading3);

var heading1 = body.children[0];


heading0.appendChild(text0);
body.insertBefore(heading0, heading1);

var test = document.querySelector("#test");