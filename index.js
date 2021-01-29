// alert("Hello Dice");

var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var diceImgOne = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var diceImgTwo = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", diceImgOne);
document.querySelector(".img2").setAttribute("src", diceImgTwo);

function result(randomNumber1, randomNumber2) {
    if(randomNumber1 > randomNumber2)
        document.getElementsByTagName("h1")[0].textContent = "🚩Player 1 Wins";
    else if(randomNumber1 < randomNumber2)
        document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins🚩";
    else 
        document.getElementsByTagName("h1")[0].textContent = "Draw";
}
result(randomNumber1, randomNumber2);