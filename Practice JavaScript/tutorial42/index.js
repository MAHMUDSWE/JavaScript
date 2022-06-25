var heading = document.getElementById("heading");

heading.addEventListener("mouseover", function(){
    heading.classList.add("headingStyle");
});

heading.addEventListener("mouseout", function(){
    heading.classList.remove("headingStyle");
});

