


let button = document.getElementById('submitbutton');


//takes a number and evenly spaces it out around the 
//circumference of the circle

function spacerOuter(num) {
const lowestDenom = 360 / num;
let array = [];

    for(let x = lowestDenom; x <= 360; x += lowestDenom){
       array.push(x); 
    }
    return array;
}

let message = "It's working";

function work (){
    alert(message);
}

button.onclick = work;

