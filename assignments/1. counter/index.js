//counter
//step1: create one h1 and three buttons in html
//step2: select the button and h1 by using queryselector
let btn1 = document.querySelector('.inc');
let h1 = document.querySelector('h1');
let count=0;

//step3: add event click to the button
btn1.addEventListener('click',increment);

//step4: manupulating
function increment(){
count = count+1;
h1.textContent = count;
}
//step5 : select the element 
let btn2 = document.querySelector('.dec');
// let h1 = document.querySelector('h1');

// step6: add event click
btn2.addEventListener('click',decrement);

//step7 : manupulating
function decrement(){
count = count-1;
h1.textContent = count;
}

//step8:select the element by using queryselector
let btn3 = document.querySelector('.reset');
 
//step9:add an event called click
btn3.addEventListener('click',reset);

// step10: manupulating
function reset (){
    count = 0;
    h1.textContent = count;
}