var player1name = prompt("Enter the name of player 1 : ");
var player2name = prompt("Enter the name of player 2 : ");
document.querySelectorAll("p")[0].innerHTML = player1name;
document.querySelectorAll("p")[1].innerHTML = player2name;
var randomnumber1 = Math.floor(6 * Math.random())+1;
var randomnumber2 = Math.floor(6 * Math.random())+1;
var  randomdiceimage1 = "./images"+"/dice"+randomnumber1+".png";
var  randomdiceimage2 = "./images"+"/dice"+randomnumber2+".png";
var dice1 = document.querySelectorAll("img")[0].setAttribute("src" , randomdiceimage1);
var dice2 = document.querySelectorAll("img")[1].setAttribute("src" , randomdiceimage2);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML = "🚩Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
