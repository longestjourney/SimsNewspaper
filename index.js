console.log('Hello');
document.getElementById("myH1").textContent = 'I like pizza';

let x = 122;

console.log(x);

let age = 25;


console.log(`Your age is ${age} years old`);

let username;
document.getElementById("myButton").onclick = function()
{
    username = document.getElementById("myText").value;
    document.getElementById("myH2").textContent = `Hello ${username}`;
}

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const resetb = document.getElementById("resetb");
const counter = document.getElementById("counter");

let count = 0;

plus.onclick = function()
{
    count++;
    counter.textContent = count;
    wieksze();
}

minus.onclick = function()
{
    count--;
    counter.textContent = count;
}
resetb.onclick = function()
{
    count = 0;
    counter.textContent = count;
}
function wieksze(){
if(count>4){
    console.log("Udało się");
}
}