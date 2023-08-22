// import chalk from 'chalk';
var readlineSync = require('readline-sync');
var chalk = require("chalk");

var userName = readlineSync.question("May i know ur name?");
console.log(chalk.blue("********************"));
console.log("Hello! "+userName+". Welcome to my first reply quiz game... (Answer in Title Case)");

console.log("********************");
console.log("-------------------");

var score = 0, highScore = 7;

function play(question, answer) {
  var userAns = readlineSync.question(question);

  if (answer === userAns) {
    score += 1;
  }
}

// play("is this working", "yes");

var questions1 = [{
  question: "What is the largest mammal in the world?",
  answer: "Blue Whale"
},{
  question: "What is the tallest mountain in the world?",
  answer: "Mount Everest"
}, {
  question: "What do bees primarily collect to make honey?",
  answer: "Nectar"
}, {
  question: "What do you call a polygon with three sides?",
  answer: "Triangle"
}, {
  question: "In which sport do you try to knock down pins with a ball?",
  answer: "Bowling"
}
]

var questions2 = [{
  question: "Who painted the Mona Lisa?",
  answer: "Leonardo Da Vinci"
},{
  question: "Which gas do plants use to convert sunlight into energy?",
  answer: "Carbon Dioxide"
}, {
  question: "Who wrote the famous novel Pride and Prejudice?",
  answer: "Jane Austen"
}, {
  question: "What is the capital city of France?",
  answer: "Paris"
}, {
  question: "Which planet is known as the Red Planet?",
  answer: "Mars"
}
]

// console.log(questions2);

for (var i=0; i<10; i++) {
  if (i<5) {
    play(questions1[i].question, questions1[i].answer);
    console.log("-------------------");
  }
  else {
    if (i===5) {
      console.log("$$$$$$$$$$$$$$$$$$$");
    console.log("$$$$$$$$$$$$$$$$$$$");
    console.log("Gear up! It's Level 2!!");
console.log("$$$$$$$$$$$$$$$$$$$");
    console.log("$$$$$$$$$$$$$$$$$$$");
    }
    if (score>highScore) {
      console.log("Yay!! You beat the highscore!");
      highScore = score;
    }
    play(questions2[i-5].question, questions2[i-5].answer);
    console.log("-------------------");
  }
}

console.log("Thank You!")
console.log("Current Score: "+score);
console.log("High Score: "+highScore);