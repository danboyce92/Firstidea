


let button = document.getElementById('submitbutton');
let background = document.getElementById('space');
let chosenNumber = document.getElementById("inputbox").value;

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

let message = "The number was ";

function work (){
    alert(message + chosenNumber);
}


//process() should do all the work. create every step of the way
//separately and individually but afterward stick them all together
//into the one function = process()

//button.onclick = work;

/*I tried having the button change the background color
but I could see it would change to the desired color but
change back immediately to the color designated in the 
css sheet. Figure out how to bypass this.*/