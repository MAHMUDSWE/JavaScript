
var photos = ["img1.jfif", "img2.jfif", "img3.jfif"];

var myImg = document.getElementById("img");

var count = 0;

function next(){
    count++;
    if(count>= photos.length){
        count = 0;
    }
    myImg.src = photos[count];
}

function previous(){
    count--;
    if(count == -1){
        count = photos.length - 1;
    }
    myImg.src =  photos[count];
}