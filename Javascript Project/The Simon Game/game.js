// // alert("FUnc")

// var gamePattern = [];
// var userPatternColour = [];

// var buttonColours = ["red", "blue", "green", "yellow"];


// function nextSequence(){
//     var randomNumber = Math.floor(Math.random() * 4); //Random number 0-3
    
//     var addPattern = buttonColours[randomNumber]; 
//     return addPattern;
// }
// gamePattern.push(nextSequence());

// var randomChosenColour = buttonColours[nextSequence()];

// // $("div .btn").click(function(event){
// //     // $('#" + randomChosenColour).addClass("pressed");
// //     $('#' + randomChosenColour).addClass("pressed");
// //     setTimeout(function(){
// //         $('#' + randomChosenColour).removeClass("pressed");
// //     }, 100)
// //     console.log(event.key);
// // });
// $("div .btn").click(function(event){
//     var userPatternColour = event.target.id;
//     $("#" + userPatternColour).addClass("pressed");
//     music(userPatternColour);
//     setTimeout(function(){
//         $("#" + userPatternColour).removeClass("pressed");
//     }, 100)

//     // var text = $(event.target).text();
//     // console.log(clickColor);
//     // console.log(text);
// });

// function music(color){
//     var audio = new Audio("./sounds/" + color + ".mp3")
//             audio.play();
// }



// // $("#red").add("pressed");
// // $("#red").remove("pressed");


// // console.log(randomChosenColour);
// // console.log(buttonColours);
// // console.log(randomNumber);
// gamePattern = [];
// userPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var start = 0;
var level = 0;


$(document).keypress(function(){
    if(start==0){
        
        $("h1").text("Press A Key to Start");
        // $("h1").text("level " + level);
        // console.log(level);
        nextSequence();
    }
    start = 1;
    
})


$(".btn").click(function(){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    // var audio = new Audio("./sounds/" + userChosenColour + ".mp3");
    // audio.play();
    playSound(userChosenColour);

    animatePress(userChosenColour);
    //Passing the lengt of array
    checkAnswer(userClickedPattern.length - 1);
})

// $(".btn").click(function(event){
//     // nextSequence();
//     // console.log(gamePattern);
// })


function checkAnswer(currentLevel){
    console.log(gamePattern);
    // console.log(userClickedPattern);
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("SUCCESS");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000)
        }
    }
    else{
        console.log("WRONG");
        playSound("wrong");


        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200)

        $("h1").text("Game Over, Press Any Key to Restart");
        
        startOver();
    }
    

    
    // for(let i = 0; i<currentLevel; i++){
    //     if (userClickedPattern[i] === gamePattern[i]){
    //         console.log(userClickedPattern[i] + " " + gamePattern[i]);
            
    //     }
    //     else{
    //         console.log("FALSE");
    //     }
    // }
}

function startOver(){
    level = 0;
    gamePattern = [];
    start = 0;
}


function nextSequence(){
    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);


    var randomNumber = Math.floor(Math.random() * 4);   //random number 0-3  
    var randomChosenColour = buttonColours[randomNumber];  //
    gamePattern.push(randomChosenColour);

    // $("#"+randomChosenColour).addClass("pressed");
    $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    // var audio = new Audio("./sounds/" + randomChosenColour + ".mp3");
    // audio.play();
    playSound(randomChosenColour);

    // setTimeout(function(){
    //     $("#"+randomChosenColour).removeClass("pressed");
    // }, 100)
    
   
}

function playSound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100)
}
// for(let i = 0; i<5; i++){
//     nextSequence();
//     setTimeout(function(){
        
//     }, 100)
    
// }
// console.log(gamePattern);



