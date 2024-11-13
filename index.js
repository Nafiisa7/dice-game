// Generate a random number between 1 and 6
var randomNumberOne = Math.floor(Math.random() * 6) + 1;
// randomNumberOne
document.querySelector('img.img1').setAttribute('src', './images/dice' + randomNumberOne + '.png');
// randomNumberTwo
var randomNumberTwo = Math.floor(Math.random() * 6) +1;
document.querySelector('img.img2').setAttribute('src', './images/dice' + randomNumberTwo + '.png');

// changing refresh into winner
var changeWinner = document.querySelector('h1');
if(randomNumberOne > randomNumberTwo){
    changeWinner.innerHTML = 'player one wins🚩';
}else if(randomNumberTwo > randomNumberOne){
    changeWinner.innerHTML = 'player two wins🚩';
}else{
    changeWinner.innerHTML = 'Draw';
}
