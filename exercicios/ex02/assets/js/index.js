var currenteNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
function increment(){
    currentNumber = currentNumber + 1;
    currenteNumberWrapper.innerHTML = currentNumber;
}
function decrement(){
    currentNumber = currentNumber - 1;
    currenteNumberWrapper.innerHTML = currentNumber;
}
