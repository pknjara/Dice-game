//generating random numbers for dice
var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);

//making that random number our image source
var randomImageSource1 = "images/dice"+randomNumber1+".png";
var randomImageSource2 = "images/dice"+randomNumber2+".png";

//changing image source
document.querySelector('.img1').setAttribute('src',randomImageSource1);
document.querySelector('.img2').setAttribute('src',randomImageSource2);

//who wins
if(randomNumber1>randomNumber2){
  document.querySelector('h1').innerHTML='🚩 player 1 wins';
}
else if(randomNumber2>randomNumber1){
  document.querySelector('h1').innerHTML='player 2 wins! 🚩'
}
else{
  document.querySelector('h1').innerHTML='Draw!'
}
