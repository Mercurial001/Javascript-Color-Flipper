const colors = ["green", "red", "rgba(133,122,200)", 
"#f15025"];

let clickbtn = document.getElementById("clickbtn");
let color = document.querySelector(".color");

clickbtn.addEventListener('click', function(){
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}