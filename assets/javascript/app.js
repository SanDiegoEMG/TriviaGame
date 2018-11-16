//timer pulled from onnline credit:  https://codepen.io/TLJens/pen/azedap
var interval;

function countdown() {
    clearInterval(interval);
    interval = setInterval(function () {
        var timer = $('.js-timeout').html();
        timer = timer.split(':');
        var minutes = timer[0];
        var seconds = timer[1];
        seconds -= 1;
        if (minutes < 0) return;
        else if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        }
        else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

        $('.js-timeout').html(minutes + ':' + seconds);

        if (minutes == 0 && seconds == 0) clearInterval(interval);
    }, 1000);
}

// buttons to start and stop timer
$('#js-startTimer').click(function () {
    console.log("start clicked");
    $('.js-timeout').text("1:00");
    countdown();
});

$('#js-resetTimer').click(function () {
    console.log("reset clicked");
    $('.js-timeout').text("1:00");
    clearInterval(interval);
});



var mainArr = [
    {
        question: 'Sticks and stones will break your bones but ______ will never hurt you.',
        options: ['bats', 'people', 'words', 'looks'],
        answer: "words"
    },
    {
        question: "How long is the great wall of China?",
        options: ["1500 miles", "1000 miles", "5000 miles", "500 miles"],
        answer: "1500 miles"
    },
    {
        question: "Why did Superman's parents send him to Earth?",
        options: ["to find his siblings", "to save planet Earth", "because his home was about to explode", "his people were starving"],
        answer: "because his home was about to explore"
    },
    {
        question: "How many innings are in a regulation MLB game?",
        options: ["7", "11", "9", "8"],
        answer: "9"
    },
    {
        question: "What is Tony Hawk best known for?",
        options: ["BMX biking", "skateboarding", "base jumping", "long distance running"],
        answer: "skateboarding"
    },
    {
        question: "Which continent contains the most countries?",
        options: ["Asia", "Africa", "Europe", "South America"],
        answer: "Africa"
    },
    {
        question: "What is the diameter of a regulation hockey puck?",
        options: ['2.5 inches"', '3 inches', "3.25 inches", "2 inches"],
        answer: "3 inches"
    },
    {
        question: "What cartoon featured a dog named Astro?",
        options: ["The Flinstones", "The Jetsons", "He-Man", "Rainbow Brite"],
        answer: "The Jetsons"
    },
    {
        question: "What equipment is needed to play the game Craps?",
        options: ["dice", "playing cards", "roulette wheel", "pen and paper"],
        answer: "dice"
    },
    {
        question: "What is the biggest animal in the world?",
        options: ["elephant", "great white shark", "rhinoceros", "blue whale"],
        answer: "blue whale"
    }
];


for (i=0; i < mainArr.length; i++) {
    $("#trivia").append("<br> <p>" + mainArr[i].question + "</p>", 
    '<form action="/action_page.php"></form>', '<input type="radio" name="gender" value="male">' + " " + mainArr[i].options[0] + '<br>', '<input type="radio" name="gender" value="male">' + " " + mainArr[i].options[1] + '<br>', '<input type="radio" name="gender" value="male">' + " " + mainArr[i].options[2] + '<br>', '<input type="radio" name="gender" value="male">' + " " + mainArr[i].options[3] + '<br>')
    };


var testing = ["loverly", "and then", "keep going"];
console.log(testing[2]); //keep going
console.log(mainArr[7].answer); //The Jetsons


/* <input type="radio" name="gender" value="male"> Male<br>
<input type="radio" name="gender" value="female"> Female<br>
<input type="radio" name="gender" value="other"> Other<br>  
<input type="submit" value="Submit"> */

// ### Option One: Basic Quiz (Timed Form)
// ![Basic](Images/1-basic.jpg)

// **[Click Here to Watch the Demo](https://youtu.be/fBIj8YsA9dk)**.

// * You'll create a trivia form with multiple choice or true/false options (your choice).

// * The player will have a limited amount of time to finish the quiz. 

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.