let sumHome = document.getElementById("homescore");
let count = 0;

function plusOne(){
    count += 1;
    sumHome.textContent = count;
}

function plusTwo(){
    count += 2;
    sumHome.textContent = count;
}

function plusThree(){
    count += 3;
    sumHome.textContent = count;
}

let sumGuest = document.getElementById('guestscore');

function p1(){
    count += 1;
    sumGuest.textContent = count;
}

function p2(){
    count += 2;
    sumGuest.textContent = count;
}
function p3(){
    count += 3;
    sumGuest.textContent = count;
}