var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.getElementById("image1").src = "./images/dice"+randomNumber1+".png";
document.getElementById("image2").src = "./images/dice"+randomNumber2+".png";

if(randomNumber1>randomNumber2){
    document.getElementById("title").innerHTML = "Player 1 Wins!"
}else if(randomNumber2>randomNumber1){
     document.getElementById("title").innerHTML = "Player 2 Wins!"
}else{
    document.getElementById("title").innerHTML = "Draw!"
}