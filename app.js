function myFunction(){
document.getElementById("demo").innerHTML
//generate random numbers

const firstRandomNum = Math.floor(Math.random() * 6) + 1;
const firstDiceImage = './img/dice' + firstRandomNum +'.png';
document.querySelectorAll ('img')[0].setAttribute ('src', firstDiceImage);
//document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);

const secondRandomNum = Math.floor(Math.random() * 6) + 1;
const secondDiceImage = './img/dice' + secondRandomNum +'.png';
document.querySelectorAll ('img')[1].setAttribute ('src', secondDiceImage);
//document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

if (firstRandomNum > secondRandomNum){
    document.querySelector('h1').innerHTML = 'The Winner is User 1'
} else if (firstRandomNum > secondRandomNum){
    document.querySelector('h1').innerHTML = 'The Winner is User 2'
} else {
    document.querySelector('h1').innerHTML = 'Its a Draw'
}
}
