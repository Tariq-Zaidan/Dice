
var diceImegs= ['./images/dice1.png' , './images/dice2.png' , './images/dice3.png' , 
'./images/dice4.png' , './images/dice5.png' , './images/dice6.png'];


var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2 = Math.floor(Math.random()*6);


 var diceImg1 = diceImegs[randomNumber1];
 var diceImg2 = diceImegs[randomNumber2];


document.querySelector(".dice .img1").setAttribute("src" , diceImg1);
document.querySelector(".dice .img2").setAttribute("src" , diceImg2);

if (diceImg1 > diceImg2) {
    document.querySelector("h1").innerHTML = ("🚩Player 1 wins!")
}
 else if(diceImg2 > diceImg1) {
    document.querySelector("h1").innerHTML = ("Player 2 wins!🚩")
}
else{
    document.querySelector("h1").innerHTML = ("Drow!")

}