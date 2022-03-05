


let button = document.getElementById('submitbutton');


//takes a number and evenly spaces it out around the 
//circumference of the circle

function spacerOuter(num) {
const lowestDenom = 360 / num;

    for(let x = lowestDenom; x < 360; x += lowestDenom){
       console.log(x); 
    }

}

let message = "It's working";
let userInput = document.getElementById('textbox');

button.onclick = alert(userInput);

