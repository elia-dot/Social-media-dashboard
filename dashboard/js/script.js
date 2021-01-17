let bg = document.getElementsByTagName("body")[0];
let topBox = document.getElementsByClassName("top")[0];
let big = document.getElementsByClassName("box1"); 
let small = document.getElementsByClassName("box2"); 
let H1 = document.getElementsByTagName("h1");

function dark(){
    bg.classList.toggle("backGround");
    topBox.classList.toggle("head");
    document.getElementById("switch").classList.toggle("modes");
    for (i = 0; i < big.length; i++) {
        big[i].classList.toggle("darkBox");
    }
    for (i = 0; i < big.length; i++) {
        big[i].classList.toggle("headline");
    }
    for (i = 0; i < small.length; i++) {
        small[i].classList.toggle("darkBox");
    }
    for (i = 0; i < H1.length; i++) {
        H1[i].classList.toggle("headline");
    }
}




