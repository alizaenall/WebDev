// alert("HELELO")

// Button Click <button onclick="myFunction()">Click me</button>
// document.querySelector("button")[0]


// var clickW = document.querySelectorAll("button")[0].addEventListener("click", function(){
//     new Audio("./sounds/crash.mp3").play();
    
// });
// var clickW = document.querySelectorAll("button")[1].addEventListener("click", function(){
//     new Audio("./sounds/kick-bass.mp3").play();
    
// });
// var clickW = document.querySelectorAll("button")[2].addEventListener("click", function(){
//     new Audio("./sounds/snare.mp3").play();
    
// });
// var clickW = document.querySelectorAll("button")[3].addEventListener("click", function(){
//     new Audio("./sounds/tom-1.mp3").play();
    
// });
// var clickW = document.querySelectorAll("button")[4].addEventListener("click", function(){
//     new Audio("./sounds/tom-2.mp3").play();
    
// });
// var clickW = document.querySelectorAll("button")[5].addEventListener("click", function(){
//     new Audio("./sounds/tom-3.mp3").play();
    
// });
// var clickW = document.querySelectorAll("button")[6].addEventListener("click", function(){
//     new Audio("./sounds/tom-4.mp3").play();
    
// });


// var clickW = document.querySelectorAll("button")[0].addEventListener("keydown", function(){
//     new Audio("./sounds/crash.mp3").play();
    
// });
// var clickA = document.querySelectorAll("button")[1].addEventListener("click", clickFun);
// var clickS = document.querySelectorAll("button")[2].addEventListener("click", clickFun);
// var clickD = document.querySelectorAll("button")[3].addEventListener("click", clickFun);
// var clickJ = document.querySelectorAll("button")[4].addEventListener("click", clickFun);
// var clickK = document.querySelectorAll("button")[5].addEventListener("click", clickFun);
// var clickL = document.querySelectorAll("button")[6].addEventListener("click", clickFun);

// function clickFun(){
//     // alert("I GOT CLICK");
//     let audio = new Audio("./sounds/crash.mp3");
//     audio.play();
// }
// clickW.fuction(){

// }

var numOfInstrument = document.querySelectorAll(".drum").length;
console.log(numOfInstrument);
var buttonKey = document.addEventListener("keydown", function(event){
    //console.log(event.key);
    var keyPressed = event.key;
    clickOrPressed(keyPressed);     //Music
    buttonAnimation(keyPressed);    //Animation
}) 

// var arrSound = ["./sounds/crash.mp3", "./sounds/kick-bass.mp3", "./sounds/snare.mp3", "./sounds/tom-1.mp3", "./sounds/tom-2.mp3", "./sounds/tom-3.mp3", "./sounds/tom-4.mp3"];

for (i=0; i<numOfInstrument; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        // console.log(this.innerHTML);
        // this.innerHTML = "blue";
        // let arr = arrSound[i];
        // let audio = new Audio(arr);
        // console.log(audio);
        // audio.play();
        var buttonInnerHTML = this.innerHTML;
        clickOrPressed(buttonInnerHTML);//Music
        buttonAnimation(buttonInnerHTML);//Animation
    })
}


function clickOrPressed(key){
    switch(key){
        case "w":
            var crash = new Audio("./sounds/crash.mp3")
            crash.play();
            break;
        case "a":
            var kickBass = new Audio("./sounds/kick-bass.mp3")
            kickBass.play();
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3")
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3")
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3")
            tom4.play();
            break;
    }
}

function buttonAnimation(key){
    var activeKey = document.querySelector("." + key);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    }, 100)
}