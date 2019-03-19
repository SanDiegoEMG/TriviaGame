//timer pulled from onnline credit:  https://codepen.io/TLJens/pen/azedap

$(document).ready(function() {
  $("#trivia").hide();
  $("#quizEndButton").hide();
  $("#endofgame").hide();

  // buttons to start and stop timer
  $(".startTimer").click(function() {
    console.log("start clicked");
    $(".js-timeout").text("1:00");
    countdown();
    $("#js-startTimer").hide();
    $("#endofgame").hide();
    $("#trivia").show();
    $("#quizEndButton").show();
    reset();
  });

  $("#quizEndButton").click(function() {
    console.log("reset clicked");
    $(".js-timeout").text("1:00");
    clearInterval(interval);
    $("#js-startTimer").show();
    $("#trivia").hide();
    getAnswers();
    showScores();
    $(this).hide();
  });

  var interval;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;
  var q = "q";

  function reset() {
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    for (i = 0; i < mainArr.length; i++) {
      $(".q" + i).prop("checked", false);
    }
    $("#corrects").empty();
    $("#incorrects").empty();
    $("#unanswereds").empty();
  }

  $('input[name="correctAnswer"]').prop("checked", false);

  function countdown() {
    clearInterval(interval);
    interval = setInterval(function() {
      var timer = $(".js-timeout").html();
      timer = timer.split(":");
      var minutes = timer[0];
      var seconds = timer[1];
      seconds -= 1;
      if (minutes < 0) return;
      else if (seconds < 0 && minutes != 0) {
        minutes -= 1;
        seconds = 59;
      } else if (seconds < 10 && length.seconds != 2) seconds = "0" + seconds;
      $(".js-timeout").html(minutes + ":" + seconds);
      if (minutes == 0 && seconds == 0) clearInterval(interval);
    }, 1000);
  }

  var getAnswers = function() {
    event.preventDefault();
    for (var i = 0; i < mainArr.length; i++) {
      var response = $(".q" + i + ":checked").val();

      if (response === mainArr[i].answer) {
        console.log(mainArr[i].name + " .q" + i + " response is: " + response);
        correct++;
        console.log(".q" + i + " is correct");
        console.log(typeof(response))

      } else if (response === undefined) {
        console.log(mainArr[i].name + " .q" + i + " response is: " + response);
        unanswered++;
        console.log("q" + i + " is unanswered");
        console.log(typeof(response))

      } else if (response) {
        console.log(mainArr[i].name + " .q" + i + " response is: " + response);
        console.log("q" + i + " is last else if");
        incorrect++;
      }

      else {
        console.log("q" + i + " is default else");
        console.log(mainArr[i].name + " .q" + i +  " response is: " + response);

      } 
    }
  };

  showScores = function() {
    $("#endofgame").show();
    $("#corrects").append(" " + correct);
    $("#incorrects").append(" " + incorrect);
    $("#unanswereds").append(" " + unanswered);
  };

  var mainArr = [
    {
      name: "zero",
      question:
        "Sticks and stones will break your bones but ______ will never hurt you.",
      options: ["bats", "people", "words", "looks"],
      answer: "words"
    },
    {
      name: "one",
      question: "How many miles long is the great wall of China?",
      options: ["1500", "1000", "5000", "500"],
      answer: "1500"
    },
    {
      name: "two",
      question: "What is the only 'nut' which grows underground?",
      options: [ "peanut", "cashew", "almond", "walnut"],
      answer: "peanut"
    },
    {
      name: "three",
      question: "How many innings are in a regulation MLB game?",
      options: ["7", "11", "9", "8"],
      answer: "9"
    },
    {
      name: "four",
      question: "What is Tony Hawk best known for?",
      options: [
        "BMX biking",
        "skateboarding",
        "base jumping",
        "long distance running"
      ],
      answer: "skateboarding"
    },
    {
      name: "five",
      question: "Which continent contains the most countries?",
      options: ["Asia", "Africa", "Europe", "South America"],
      answer: "Africa"
    },
    {
      name: "six",
      question: "What is the diameter - in inches - of a regulation hockey puck?",
      options: ["2.5", "3", "3.25", "2"],
      answer: "3"
    },
    {
      name: "seven",
      question: "What cartoon featured a dog named Astro?",
      options: ["Flinstones", "Jetsons", "He-Man", "Rainbow Brite"],
      answer: "Jetsons"
    },
    {
      name: "eight",
      question: "What equipment is needed to play the game Craps?",
      options: ["dice", "playing cards", "roulette wheel", "pen and paper"],
      answer: "dice"
    },
    {
      name: "nine",
      question: "What is the heaviest land animal in the world?",
      options: ["elephant", "giraffe", "rhinoceros", "bison"],
      answer: "elephant"
    }
  ];

  console.log("answer to q1 = " + mainArr[1].answer)

  for (var i = 0; i < mainArr.length; i++) {
    $("#trivia").append(
      "<br> <p>" + mainArr[i].question + "</p>",
      '<input type="radio" name=' +
        mainArr[i].name +
        " class=" +
        q +
        i +
        " value=" +
        mainArr[i].options[0] +
        ">  " +
        mainArr[i].options[0] +
        "<br>",
      '<input type="radio" name=' +
        mainArr[i].name +
        " class=" +
        q +
        i +
        " value=" +
        mainArr[i].options[1] +
        ">  " +
        mainArr[i].options[1] +
        "<br>",
      '<input type="radio" name=' +
        mainArr[i].name +
        " class=" +
        q +
        i +
        " value=" +
        mainArr[i].options[2] +
        ">  " +
        mainArr[i].options[2] +
        "<br>",
      '<input type="radio" name=' +
        mainArr[i].name +
        " class=" +
        q +
        i +
        " value=" +
        mainArr[i].options[3] +
        ">  " +
        mainArr[i].options[3] +
        "<br>"
    );
    // console.log(q + [i]);
    // console.log(mainArr[i]);
  }
});

// ### Instructions for Timed Form

// **[Click Here to Watch the Demo](https://youtu.be/fBIj8YsA9dk)**.

// * You'll create a trivia form with multiple choice or true/false options (your choice).

// * The player will have a limited amount of time to finish the quiz.

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.
